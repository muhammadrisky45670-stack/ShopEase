/* ================================================
   ShopEase – app.js
   ================================================ */

/* ---------- Utility: Toast Notification ---------- */
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerHTML = `<i data-lucide="check-circle" width="20" height="20" stroke-width="2.5"></i> <span>${message}</span>`;
    if (window.lucide) {
        lucide.createIcons();
    }
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ---------- Cart Logic ---------- */
let cartItems = [];
try {
    cartItems = JSON.parse(localStorage.getItem('shopease_cart_items') || '[]');
} catch (e) {
    cartItems = [];
}

// Ensure old integer value isn't crashing it if it existed
if (!Array.isArray(cartItems)) {
    cartItems = [];
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        let count = cartItems.length;
        badge.textContent = count > 99 ? '99+' : count;
    }
}

function toggleCartItem(productName, btn) {
    const index = cartItems.indexOf(productName);
    if (index > -1) {
        // Remove item
        cartItems.splice(index, 1);
        showToast(`"${productName}" removed from cart.`);
        btn.innerHTML = `Add to cart
            <i data-lucide="plus" width="16" height="16" stroke-width="2.5"></i>`;
        btn.classList.remove('in-cart');
    } else {
        // Add item
        cartItems.push(productName);
        showToast(`"${productName}" added to cart!`);
        btn.innerHTML = `Remove
            <i data-lucide="x" width="16" height="16" stroke-width="2.5"></i>`;
        btn.classList.add('in-cart');
    }
    
    // Refresh lucide icons for the newly injected <i> tags
    if (window.lucide) {
        lucide.createIcons();
    }

    localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
    updateCartBadge();
}

/* ---------- Add to Cart Buttons ---------- */
document.querySelectorAll('.js-add-to-cart').forEach(btn => {
    const name = btn.dataset.product || 'Product';
    
    // Set initial state
    if (cartItems.includes(name)) {
        btn.classList.add('in-cart');
        btn.innerHTML = `Remove
            <i data-lucide="x" width="16" height="16" stroke-width="2.5"></i>`;
    } else {
        btn.innerHTML = `Add to cart
            <i data-lucide="plus" width="16" height="16" stroke-width="2.5"></i>`;
    }

    btn.addEventListener('click', () => {
        toggleCartItem(name, btn);
    });
});

/* ---------- Testimonial Slider ---------- */
(function initSlider() {
    const track = document.getElementById('testimonialsTrack');
    const dots  = document.querySelectorAll('.dot');
    if (!track) return;

    const cards = track.querySelectorAll('.review-card');
    let current = 0;
    const total = Math.max(1, cards.length - 1); // pairs

    function goTo(idx) {
        current = (idx + cards.length) % cards.length;
        cards.forEach((c, i) => {
            c.style.display = i === current ? 'flex' : 'none';
        });
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    // Show first pair (both visible on desktop via CSS grid)
    // For mobile, only show active
    function initDisplay() {
        const isMobile = window.innerWidth < 880;
        if (isMobile) {
            goTo(current);
        } else {
            cards.forEach(c => c.style.display = 'flex');
            dots.forEach((d, i) => d.classList.toggle('active', i === 0));
        }
    }

    document.getElementById('prevTestimonial')?.addEventListener('click', () => {
        if (window.innerWidth < 880) goTo(current - 1);
    });
    document.getElementById('nextTestimonial')?.addEventListener('click', () => {
        if (window.innerWidth < 880) goTo(current + 1);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            if (window.innerWidth < 880) goTo(i);
        });
    });

    initDisplay();
    window.addEventListener('resize', initDisplay);
})();

/* ---------- Newsletter Form ---------- */
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailEl = document.getElementById('newsletterEmail');
    const email = emailEl?.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address.');
        return;
    }
    showToast(`Subscribed with ${email}! Welcome to ShopEase.`);
    emailEl.value = '';
});

/* ---------- Header Scroll Shadow ---------- */
window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
        header.style.boxShadow = window.scrollY > 4
            ? '0 2px 16px rgba(0,0,0,0.10)'
            : '0 2px 8px rgba(0,0,0,0.06)';
    }
}, { passive: true });

/* ---------- Search Logic ---------- */
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    const query = searchInput.value.trim();
    
    const isShopPage = window.location.pathname.endsWith('shop.html');
    
    if (isShopPage) {
        // Update URL without reloading
        const newUrl = query ? `shop.html?search=${encodeURIComponent(query)}` : 'shop.html';
        window.history.pushState({path: newUrl}, '', newUrl);
        searchInput.blur(); // Remove focus
    } else {
        // Redirect to shop page
        window.location.href = query ? `shop.html?search=${encodeURIComponent(query)}` : 'shop.html';
    }
}

document.getElementById('searchBtn')?.addEventListener('click', handleSearch);
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
    }
});

/* ---------- Init ---------- */
updateCartBadge();

/* ---------- Shop Filters Logic ---------- */
(function initShopFilters() {
    const filterInputs = document.querySelectorAll('.filter-cb');
    const products = document.querySelectorAll('.shop-product');
    const noProductsMsg = document.getElementById('noProductsMessage');
    const searchInput = document.getElementById('searchInput');
    
    // Check url param for search
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
    }
    
    if (!products.length) return;

    function applyFilters() {
        const selectedCategories = Array.from(document.querySelectorAll('.filter-cb[data-type="category"]:checked')).map(cb => cb.value);
        const selectedBrands = Array.from(document.querySelectorAll('.filter-cb[data-type="brand"]:checked')).map(cb => cb.value);
        const selectedRatings = Array.from(document.querySelectorAll('.filter-cb[data-type="rating"]:checked')).map(cb => cb.value);
        const priceRadio = document.querySelector('.filter-cb[data-type="price"]:checked');
        const selectedPrice = priceRadio ? priceRadio.value : null;
        const currentSearch = searchInput ? searchInput.value.trim().toLowerCase() : '';

        let visibleCount = 0;

        products.forEach(card => {
            const category = card.dataset.category;
            const brand = card.dataset.brand;
            const rating = card.dataset.rating;
            const price = parseInt(card.dataset.price, 10);
            const productName = card.querySelector('.product-name')?.textContent.toLowerCase() || '';

            // Check category
            const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(category);
            
            // Check brand
            const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);
            
            // Check rating
            const matchRating = selectedRatings.length === 0 || selectedRatings.includes(rating);
            
            // Check price
            let matchPrice = true;
            if (selectedPrice === 'under-100k') {
                matchPrice = price < 100000;
            } else if (selectedPrice === '100k-200k') {
                matchPrice = price >= 100000 && price <= 200000;
            } else if (selectedPrice === 'above-200k') {
                matchPrice = price > 200000;
            }
            
            // Check search
            const matchSearch = currentSearch === '' || productName.includes(currentSearch);

            if (matchCategory && matchBrand && matchRating && matchPrice && matchSearch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noProductsMsg) {
            noProductsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
            
            if (visibleCount === 0 && currentSearch !== '') {
                noProductsMsg.textContent = `No products found matching "${currentSearch}".`;
            } else if (visibleCount === 0) {
                noProductsMsg.textContent = 'No products found matching the selected filters.';
            }
        }
    }

    filterInputs.forEach(input => {
        input.addEventListener('change', applyFilters);
    });
    
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    // Run once on load to apply default checked filters and search query
    applyFilters();
})();
