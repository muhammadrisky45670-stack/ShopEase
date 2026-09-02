/* ================================================
   ShopEase – app.js
   ================================================ */

/* ---------- Product Database ---------- */
const productsDB = [
    {
        id: 1,
        name: 'Lakmé Sun Expert SPF 50 PA+++ Ultramatte Lotion',
        brand: 'Lakme',
        priceCurrent: 'Rp129.000',
        priceOriginal: 'Rp179.000',
        discount: '12% Off',
        rating: 5,
        reviews: '(1250 Reviews)',
        images: ['Assets/Product 1.jpg', 'Assets/Product 1 gambar kedua.png', 'Assets/Product 1.jpg', 'Assets/Product 1.jpg']
    },
    {
        id: 2,
        name: 'Ocean Shield Sunscreen SPF 50 PA+++',
        brand: 'Ocean Shield',
        priceCurrent: 'Rp89.000',
        priceOriginal: 'Rp129.000',
        discount: '31% Off',
        rating: 5,
        reviews: '(985 Reviews)',
        images: ['Assets/Product 2.jpg', 'Assets/Product 2 gambar kedua.png', 'Assets/Product 2.jpg', 'Assets/Product 2.jpg']
    },
    {
        id: 3,
        name: 'SUN Protect Cream SPF 50+',
        brand: 'SUN',
        priceCurrent: 'Rp119.000',
        priceOriginal: 'Rp159.000',
        discount: '25% Off',
        rating: 5,
        reviews: '(828 Reviews)',
        images: ['Assets/Product 3.jpg', 'Assets/Product 3 gambar kedua.png', 'Assets/Product 3.jpg', 'Assets/Product 3.jpg']
    },
    {
        id: 4,
        name: 'TFIT Tone Up Sun Fluid SPF50+ PA++++',
        brand: 'TFIT',
        priceCurrent: 'Rp149.000',
        priceOriginal: 'Rp179.000',
        discount: '16% Off',
        rating: 5,
        reviews: '(721 Reviews)',
        images: ['Assets/Product 4.jpg', 'Assets/Product 4.jpg', 'Assets/Product 4.jpg', 'Assets/Product 4.jpg']
    },
    {
        id: 5,
        name: 'Biore UV Aqua Rich Watery Essence',
        brand: 'Biore',
        priceCurrent: 'Rp95.000',
        priceOriginal: 'Rp129.000',
        discount: '26% Off',
        rating: 4,
        reviews: '(495 Reviews)',
        images: ['Assets/Product 5.jpg', 'Assets/Product 5.jpg', 'Assets/Product 5.jpg', 'Assets/Product 5.jpg']
    },
    {
        id: 6,
        name: 'TFIT Intensive Repair Serum',
        brand: 'TFIT',
        priceCurrent: 'Rp210.000',
        priceOriginal: 'Rp259.000',
        discount: '18% Off',
        rating: 5,
        reviews: '(828 Reviews)',
        images: ['Assets/Product 6.jpg', 'Assets/Product 6.jpg', 'Assets/Product 6.jpg', 'Assets/Product 6.jpg']
    },
    {
        id: 7,
        name: 'Biore Deep Pore Foaming Cleanser',
        brand: 'Biore',
        priceCurrent: 'Rp50.000',
        priceOriginal: 'Rp79.000',
        discount: '36% Off',
        rating: 3,
        reviews: '(721 Reviews)',
        images: ['Assets/Product 7.jpg', 'Assets/Product 7.jpg', 'Assets/Product 7.jpg', 'Assets/Product 7.jpg']
    },
    {
        id: 8,
        name: 'SUN Refreshing Botanical Toner',
        brand: 'SUN',
        priceCurrent: 'Rp110.000',
        priceOriginal: 'Rp149.000',
        discount: '26% Off',
        rating: 4,
        reviews: '(985 Reviews)',
        images: ['Assets/Product 8.jpg', 'Assets/Product 8.jpg', 'Assets/Product 8.jpg', 'Assets/Product 8.jpg']
    },
    {
        id: 9,
        name: 'Lakmé Soft Skin Body Lotion 500ml',
        brand: 'Lakme',
        priceCurrent: 'Rp155.000',
        priceOriginal: 'Rp199.000',
        discount: '22% Off',
        rating: 4,
        reviews: '(821 Reviews)',
        images: ['Assets/Product 9.jpg', 'Assets/Product 9.jpg', 'Assets/Product 9.jpg', 'Assets/Product 9.jpg']
    }
];

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
        let count = cartItems.reduce((sum, item) => {
            if (typeof item === 'string') return sum + 1;
            return sum + (item.qty || 1);
        }, 0);
        badge.textContent = count > 99 ? '99+' : count;
    }
}

function toggleCartItem(productName, btn, qty = 1) {
    const index = cartItems.findIndex(item => {
        if (typeof item === 'string') return item === productName;
        return item.name === productName;
    });

    if (index > -1) {
        // Remove item
        cartItems.splice(index, 1);
        showToast(`"${productName}" removed from cart.`);
        btn.innerHTML = `Add to cart
            <i data-lucide="plus" width="16" height="16" stroke-width="2.5"></i>`;
        btn.classList.remove('in-cart');
    } else {
        // Add item
        cartItems.push({ name: productName, qty: qty });
        showToast(`${qty}x "${productName}" added to cart!`);
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
    const isInCart = cartItems.some(item => {
        if (typeof item === 'string') return item === name;
        return item.name === name;
    });

    if (isInCart) {
        btn.classList.add('in-cart');
        btn.innerHTML = `Remove
            <i data-lucide="x" width="16" height="16" stroke-width="2.5"></i>`;
    } else {
        btn.innerHTML = `Add to cart
            <i data-lucide="plus" width="16" height="16" stroke-width="2.5"></i>`;
    }

    btn.addEventListener('click', () => {
        let qty = 1;
        const qtyInput = document.getElementById('qtyInput');
        // If we're on a product detail page with a quantity input
        if (qtyInput) {
            qty = parseInt(qtyInput.value, 10) || 1;
        }
        
        toggleCartItem(name, btn, qty);
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

/* ---------- Product Detail Quantity ---------- */
(function initProductQty() {
    const qtyInput = document.getElementById('qtyInput');
    const qtyMinusBtn = document.getElementById('qtyMinusBtn');
    const qtyPlusBtn = document.getElementById('qtyPlusBtn');

    if (qtyInput && qtyMinusBtn && qtyPlusBtn) {
        qtyMinusBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value, 10) || 1;
            if (val > 1) {
                qtyInput.value = val - 1;
            }
        });

        qtyPlusBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value, 10) || 0;
            qtyInput.value = val + 1;
        });

        qtyInput.addEventListener('blur', () => {
            let val = parseInt(qtyInput.value, 10);
            if (isNaN(val) || val < 1) {
                qtyInput.value = 1;
            }
        });
    }
})();

/* ---------- Dynamic Product Rendering ---------- */
(function renderProductDetail() {
    // Only run on product-detail.html
    if (window.location.pathname.includes('product-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'), 10) || 1;
        const product = productsDB.find(p => p.id === productId);

        if (product) {
            // Update Text Elements
            const brandEl = document.getElementById('detailBrand');
            const titleEl = document.getElementById('detailTitle');
            const priceEl = document.getElementById('detailPrice');
            const oldPriceEl = document.getElementById('detailOldPrice');
            const discountEl = document.getElementById('detailDiscount');
            const reviewEl = document.getElementById('detailReviews');
            const btnEl = document.getElementById('detailAddToCart');

            if(brandEl) brandEl.textContent = product.brand;
            if(titleEl) titleEl.textContent = product.name;
            if(priceEl) priceEl.textContent = product.priceCurrent;
            if(oldPriceEl) oldPriceEl.textContent = product.priceOriginal;
            if(discountEl) discountEl.textContent = product.discount;
            if(reviewEl) reviewEl.textContent = product.reviews;
            
            const tabReviewsEl = document.getElementById('detailTabReviews');
            if(tabReviewsEl) {
                // Extract just the number from "(985 Reviews)" using regex
                const reviewCountMatch = product.reviews.match(/\d+/);
                const reviewCount = reviewCountMatch ? reviewCountMatch[0] : '0';
                tabReviewsEl.textContent = `Reviews (${reviewCount})`;
            }

            if(btnEl) btnEl.dataset.product = product.name; // Update dataset for cart logic
            
            // Check if product already in cart and update btn UI
            const isInCart = cartItems.some(item => {
                if (typeof item === 'string') return item === product.name;
                return item.name === product.name;
            });
            if(btnEl && isInCart) {
                btnEl.classList.add('in-cart');
                btnEl.innerHTML = `Remove <i data-lucide="x" width="20" height="20"></i>`;
            }

            // Update Images
            const mainImg = document.getElementById('detailMainImg');
            if(mainImg && product.images.length > 0) {
                mainImg.src = product.images[0];
                mainImg.alt = product.name;
            }
            const thumbnails = document.querySelectorAll('.thumb-img');
            thumbnails.forEach((thumb, i) => {
                if(product.images[i]) {
                    thumb.src = product.images[i];
                }
            });
            
            // Re-render lucide icons if changed
            if(window.lucide) {
                lucide.createIcons();
            }
        }
    }
})();

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

/* =========================================
   DEALS PAGE COUNTDOWN TIMER
   ========================================= */
(function initDealsCountdown() {
    const dealsCountdown = document.getElementById('dealsCountdown');
    if (!dealsCountdown) return; // Only run on Deals page

    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMins = document.getElementById('cdMins');
    const cdSecs = document.getElementById('cdSecs');

    // Set a target date 2 days, 14 hours, 23 mins, 51 secs from now for demo purposes
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(targetDate.getHours() + 14);
    targetDate.setMinutes(targetDate.getMinutes() + 23);
    targetDate.setSeconds(targetDate.getSeconds() + 51);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) {
            clearInterval(timerInterval);
            if(cdDays) cdDays.textContent = "00";
            if(cdHours) cdHours.textContent = "00";
            if(cdMins) cdMins.textContent = "00";
            if(cdSecs) cdSecs.textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(cdDays) cdDays.textContent = days.toString().padStart(2, '0');
        if(cdHours) cdHours.textContent = hours.toString().padStart(2, '0');
        if(cdMins) cdMins.textContent = minutes.toString().padStart(2, '0');
        if(cdSecs) cdSecs.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
})();
