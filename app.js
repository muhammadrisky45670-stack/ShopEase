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
        images: ['Assets/Product 1.jpg', 'Assets/Product 1 gambar kedua.png', 'Assets/Product 1.jpg', 'Assets/Product 1.jpg'],
        description: 'Lakmé Sun Expert SPF 50 PA+++ Ultramatte Lotion provides high protection from UVA & UVB rays while keeping your skin matte, fresh, and non-greasy all day long.',
        features: [
            '• Provides high protection from UVA & UVB rays',
            '• Ultramatte finish prevents greasy skin shine',
            '• Lightweight & quick-absorbing formula',
            '• Dermatologically tested for daily skin protection'
        ]
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
        images: ['Assets/Product 2.jpg', 'Assets/Product 2 gambar kedua.png', 'Assets/Product 2.jpg', 'Assets/Product 2.jpg'],
        description: 'Ocean Shield Sunscreen SPF 50 PA+++ is formulated with deep marine minerals to hydrate and shield your skin from sun damage and environmental pollutants.',
        features: [
            '• Marine mineral complex for deep hydration',
            '• Broad spectrum SPF 50 PA+++ protection',
            '• Water-resistant for swimming and active outdoor sports',
            '• Eco-friendly & reef-safe sunscreen formulation'
        ]
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
        images: ['Assets/Product 3.jpg', 'Assets/Product 3 gambar kedua.png', 'Assets/Product 3.jpg', 'Assets/Product 3.jpg'],
        description: 'SUN Protect Cream SPF 50+ offers comprehensive daily sun defense infused with soothing botanical extracts to keep skin nourished and calm under sunlight.',
        features: [
            '• Soothing botanical extract formula',
            '• High SPF 50+ UVA/UVB defense',
            '• Prevents premature photo-aging and dark spots',
            '• Non-comedogenic and gentle on delicate skin'
        ]
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
        images: ['Assets/Product 4.jpg', 'Assets/Product 4.jpg', 'Assets/Product 4.jpg', 'Assets/Product 4.jpg'],
        description: 'TFIT Tone Up Sun Fluid is a lightweight daily sunscreen with SPF50+ PA++++ that helps protect your skin from harmful UV rays while giving a natural tone-up effect.',
        features: [
            '• Provides high protection from UVA & UVB rays',
            '• Instant tone-up for a brighter and more even skin tone',
            '• Lightweight, non-greasy, and quick absorbing formula',
            '• Suitable for all skin types, even sensitive skin'
        ]
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
        images: ['Assets/Product 5.jpg', 'Assets/Product 5.jpg', 'Assets/Product 5.jpg', 'Assets/Product 5.jpg'],
        description: 'Biore UV Aqua Rich Watery Essence features micro defense technology to cover every micro-crevice effortlessly, leaving a weightless, watery veil.',
        features: [
            '• Micro Defense formula covers micro-crevices seamlessly',
            '• Infused with Hyaluronic Acid and Royal Jelly Extract',
            '• Super waterproof & sweat resistant up to 80 minutes',
            '• Can be used as a smooth primer base under makeup'
        ]
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
        images: ['Assets/Product 6.jpg', 'Assets/Product 6.jpg', 'Assets/Product 6.jpg', 'Assets/Product 6.jpg'],
        description: 'TFIT Intensive Repair Serum is concentrated with potent peptides and niacinamide to restore skin barrier health and reduce visible signs of fatigue.',
        features: [
            '• Concentrated peptide complex restores moisture barrier',
            '• Niacinamide targets hyperpigmentation and uneven texture',
            '• Deeply hydrates and plumps fine lines',
            '• Fast-absorbing formula suitable for day & night routine'
        ]
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
        images: ['Assets/Product 7.jpg', 'Assets/Product 7.jpg', 'Assets/Product 7.jpg', 'Assets/Product 7.jpg'],
        description: 'Biore Deep Pore Foaming Cleanser lifts stubborn dirt, excess oil, and impurities deep within pores without over-drying your complexion.',
        features: [
            '• Rich dense foam penetrates pores deeply',
            '• Removes excess sebum and daily dirt buildup',
            '• Leaves skin feeling refreshed, clean, and balanced',
            '• Gentle formula designed for daily morning and evening use'
        ]
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
        images: ['Assets/Product 8.jpg', 'Assets/Product 8.jpg', 'Assets/Product 8.jpg', 'Assets/Product 8.jpg'],
        description: 'SUN Refreshing Botanical Toner balances pH level and preps skin for subsequent moisturizing steps with pure botanical hydrosols.',
        features: [
            '• Balances natural pH and calms skin redness',
            '• Rich in antioxidants and natural plant extracts',
            '• Alcohol-free and ultra-hydrating formulation',
            '• Preps skin to absorb serums and moisturizers efficiently'
        ]
    },
    {
        id: 9,
        name: 'Lakmé Soft Skin Body Lotion 500ml',
        brand: 'Lakme',
        category: 'Beauty & Personal Care Body Care',
        priceCurrent: 'Rp155.000',
        priceOriginal: 'Rp199.000',
        discount: '22% Off',
        rating: 4,
        reviews: '(821 Reviews)',
        images: ['Assets/Product 9.jpg', 'Assets/Product 9.jpg', 'Assets/Product 9.jpg', 'Assets/Product 9.jpg'],
        description: 'Lakmé Soft Skin Body Lotion locks in intense moisture for up to 48 hours, leaving dry skin velvety soft, smooth, and delicately scented.',
        features: [
            '• 48-hour deep moisture nourishment',
            '• Enriched with shea butter and vitamin E',
            '• Non-sticky lotion absorbs rapidly',
            '• Generous 500ml family-sized pump bottle'
        ]
    },
    {
        id: 10,
        name: 'Nescafé Gold Blend Premium Instant Coffee 200g',
        brand: 'Nescafe',
        category: 'Food & Beverage',
        priceCurrent: 'Rp85.000',
        priceOriginal: 'Rp110.000',
        discount: '23% Off',
        rating: 5,
        reviews: '(1420 Reviews)',
        images: ['Assets/Product 1.jpg', 'Assets/Product 1.jpg'],
        description: 'Rich, smooth, and full-bodied premium instant coffee crafted with high quality Arabica and Robusta coffee beans.',
        features: [
            '• Made from selected Arabica & Robusta coffee beans',
            '• Smooth crema finish and rich aromatic roast',
            '• Quick and convenient premium coffee preparation',
            '• Imported 200g glass jar'
        ]
    },
    {
        id: 11,
        name: 'Twinings Earl Grey Tea 50 Tea Bags',
        brand: 'Twinings',
        category: 'Food & Beverage',
        priceCurrent: 'Rp65.000',
        priceOriginal: 'Rp89.000',
        discount: '27% Off',
        rating: 5,
        reviews: '(650 Reviews)',
        images: ['Assets/Product 2.jpg', 'Assets/Product 2.jpg'],
        description: 'Classic fragrant black tea delicately scented with citrusy bergamot oil.',
        features: [
            '• Premium loose leaf black tea in convenient tea bags',
            '• Distinctive citrus bergamot aroma',
            '• Refreshing and uplifting hot or iced',
            '• 50 individually foil wrapped tea bags'
        ]
    },
    {
        id: 12,
        name: 'Minimalist Ceramic Table Lamp',
        brand: 'Nordic Light',
        category: 'Home & Living',
        priceCurrent: 'Rp199.000',
        priceOriginal: 'Rp269.000',
        discount: '26% Off',
        rating: 5,
        reviews: '(410 Reviews)',
        images: ['Assets/Product 3.jpg', 'Assets/Product 3.jpg'],
        description: 'Elegant ceramic bedside table lamp with warm ambient LED light perfect for living room or bedroom decor.',
        features: [
            '• Handcrafted ceramic base with fabric shade',
            '• Warm 3000K soft eye-care LED lighting',
            '• Touch control dimmer switch',
            '• Energy efficient low power consumption'
        ]
    },
    {
        id: 13,
        name: 'Ergonomic Memory Foam Contour Pillow',
        brand: 'RestEasy',
        category: 'Home & Living',
        priceCurrent: 'Rp175.000',
        priceOriginal: 'Rp239.000',
        discount: '27% Off',
        rating: 4,
        reviews: '(530 Reviews)',
        images: ['Assets/Product 4.jpg', 'Assets/Product 4.jpg'],
        description: 'Orthopedic memory foam pillow designed to support neck curve and relieve shoulder pressure during sleep.',
        features: [
            '• High density slow rebound memory foam',
            '• Breathable hypoallergenic bamboo velvet cover',
            '• Ergonomic contour for back and side sleepers',
            '• Removable and machine washable zipper cover'
        ]
    },
    {
        id: 14,
        name: 'Wireless Active Noise-Cancelling Headphones Pro',
        brand: 'SoundPro',
        category: 'Electronics Audio & Entertainment',
        priceCurrent: 'Rp499.000',
        priceOriginal: 'Rp699.000',
        discount: '28% Off',
        rating: 5,
        reviews: '(910 Reviews)',
        images: ['Assets/Product 5.jpg', 'Assets/Product 5.jpg'],
        description: 'Immersive wireless over-ear headphones with active noise cancellation and up to 40 hours battery life.',
        features: [
            '• Hybrid active noise cancelling ANC technology',
            '• 40mm custom audio drivers for deep bass',
            '• 40-hour playback with fast USB-C charging',
            '• Soft memory foam earcups for all-day comfort'
        ]
    },
    {
        id: 15,
        name: 'Smartwatch Series 7 Waterproof',
        brand: 'TechTime',
        category: 'Electronics',
        priceCurrent: 'Rp389.000',
        priceOriginal: 'Rp520.000',
        discount: '25% Off',
        rating: 4,
        reviews: '(780 Reviews)',
        images: ['Assets/Product 6.jpg', 'Assets/Product 6.jpg'],
        description: 'Feature-rich smartwatch with heart rate monitoring, sleep tracker, 50+ sports modes, and HD AMOLED display.',
        features: [
            '• 1.85 inch HD full touch screen',
            '• 24/7 Heart Rate, SpO2 & Sleep Tracker',
            '• IP68 waterproof rating for swimming',
            '• Long battery life up to 10 days per charge'
        ]
    },
    {
        id: 16,
        name: 'Oversized Premium Cotton Hoodie',
        brand: 'UrbanStyle',
        category: 'Fashion',
        priceCurrent: 'Rp249.000',
        priceOriginal: 'Rp329.000',
        discount: '24% Off',
        rating: 5,
        reviews: '(640 Reviews)',
        images: ['Assets/Product 7.jpg', 'Assets/Product 7.jpg'],
        description: 'Cozy heavyweight 100% combed cotton fleece hoodie with relaxed drop shoulder fit.',
        features: [
            '• 380 GSM ultra-soft heavy fleece fabric',
            '• Double-lined hood with adjustable drawstrings',
            '• Spacious kangaroo pouch pocket',
            '• Durable double-stitched seams'
        ]
    },
    {
        id: 17,
        name: 'Leather Minimalist Slim RFID Wallet',
        brand: 'VogueCraft',
        category: 'Fashion Bags & Accessories',
        priceCurrent: 'Rp120.000',
        priceOriginal: 'Rp165.000',
        discount: '27% Off',
        rating: 5,
        reviews: '(390 Reviews)',
        images: ['Assets/Product 8.jpg', 'Assets/Product 8.jpg'],
        description: 'Genuine full-grain leather slim wallet equipped with RFID blocking protection for cards and cash.',
        features: [
            '• Handcrafted 100% genuine leather',
            '• Built-in RFID blocking security shield',
            '• Holds up to 8 cards plus cash clip',
            '• Ultra slim profile fits comfortably in front pocket'
        ]
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

/* ---------- Price Helpers ---------- */
function parsePrice(priceStr) {
    if (!priceStr) return 0;
    if (typeof priceStr === 'number') return priceStr;
    const clean = priceStr.replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
}

function formatPrice(num) {
    return 'Rp' + num.toLocaleString('id-ID');
}

/* ---------- Cart Logic ---------- */
let cartItems = [];
try {
    cartItems = JSON.parse(localStorage.getItem('shopease_cart_items') || '[]');
} catch (e) {
    cartItems = [];
}

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

function renderCartSidebar() {
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotalPrice');
    if (!container) return;

    if (cartItems.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-msg">
                <i data-lucide="shopping-cart" width="48" height="48" style="opacity: 0.4;"></i>
                <p>Your cart is empty.</p>
                <a href="shop.html" class="btn-hero btn-navy" style="font-size: 13px; padding: 8px 16px; margin-top: 10px; border-radius: 20px;">Explore Shop</a>
            </div>
        `;
        if (totalEl) totalEl.textContent = 'Rp0';
        if (window.lucide) lucide.createIcons();
        return;
    }

    let grandTotal = 0;
    let html = '';

    cartItems.forEach((item, idx) => {
        const itemName = typeof item === 'string' ? item : item.name;
        const qty = typeof item === 'string' ? 1 : (item.qty || 1);
        
        const p = productsDB.find(prod => prod.name.toLowerCase() === itemName.toLowerCase()) || {
            name: itemName,
            priceCurrent: 'Rp100.000',
            images: ['Assets/Product 1.jpg']
        };

        const unitPrice = parsePrice(p.priceCurrent);
        const itemTotal = unitPrice * qty;
        grandTotal += itemTotal;

        const img = p.images && p.images[0] ? p.images[0] : 'Assets/Product 1.jpg';

        html += `
            <div class="cart-item">
                <img src="${img}" alt="${p.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-name" title="${p.name}">${p.name}</div>
                    <div class="cart-item-price">${p.priceCurrent}</div>
                    <div class="cart-item-qty">
                        <button onclick="changeCartQty(${idx}, -1)" aria-label="Decrease quantity">-</button>
                        <span>${qty}</span>
                        <button onclick="changeCartQty(${idx}, 1)" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeCartItemAt(${idx})" aria-label="Remove item">
                    <i data-lucide="trash-2" width="18" height="18"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = html;
    if (totalEl) totalEl.textContent = formatPrice(grandTotal);
    if (window.lucide) lucide.createIcons();
}

function openCartSidebar() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    renderCartSidebar();
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
}

function closeCartSidebar() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function changeCartQty(index, delta) {
    if (index >= 0 && index < cartItems.length) {
        if (typeof cartItems[index] === 'string') {
            cartItems[index] = { name: cartItems[index], qty: 1 };
        }
        cartItems[index].qty = (cartItems[index].qty || 1) + delta;
        if (cartItems[index].qty <= 0) {
            cartItems.splice(index, 1);
        }
        localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
        updateCartBadge();
        renderCartSidebar();
    }
}

function removeCartItemAt(index) {
    if (index >= 0 && index < cartItems.length) {
        const removedName = typeof cartItems[index] === 'string' ? cartItems[index] : cartItems[index].name;
        cartItems.splice(index, 1);
        localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
        showToast(`"${removedName}" removed from cart.`);
        updateCartBadge();
        renderCartSidebar();
    }
}

function toggleCartItem(productName, btn, qty = 1) {
    const index = cartItems.findIndex(item => {
        if (typeof item === 'string') return item === productName;
        return item.name === productName;
    });

    if (index > -1) {
        cartItems.splice(index, 1);
        showToast(`"${productName}" removed from cart.`);
        if (btn) {
            btn.innerHTML = `Add to cart <i data-lucide="plus" width="16" height="16" stroke-width="2.5"></i>`;
            btn.classList.remove('in-cart');
        }
    } else {
        cartItems.push({ name: productName, qty: qty });
        showToast(`${qty}x "${productName}" added to cart!`);
        if (btn) {
            btn.innerHTML = `Remove <i data-lucide="x" width="16" height="16" stroke-width="2.5"></i>`;
            btn.classList.add('in-cart');
        }
    }
    
    if (window.lucide) {
        lucide.createIcons();
    }

    localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
    updateCartBadge();
    renderCartSidebar();
}

/* ---------- Add to Cart Buttons Initialization ---------- */
document.querySelectorAll('.js-add-to-cart').forEach(btn => {
    const name = btn.dataset.product || 'Product';
    
    const isInCart = cartItems.some(item => {
        if (typeof item === 'string') return item === name;
        return item.name === name;
    });

    if (isInCart) {
        btn.classList.add('in-cart');
        btn.innerHTML = `Remove <i data-lucide="x" width="16" height="16" stroke-width="2.5"></i>`;
    } else {
        btn.innerHTML = `Add to cart <i data-lucide="plus" width="16" height="16" stroke-width="2.5"></i>`;
    }

    btn.addEventListener('click', () => {
        let qty = 1;
        const qtyInput = document.getElementById('qtyInput');
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

    function goTo(idx) {
        current = (idx + cards.length) % cards.length;
        cards.forEach((c, i) => {
            c.style.display = i === current ? 'flex' : 'none';
        });
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

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
        const newUrl = query ? `shop.html?search=${encodeURIComponent(query)}` : 'shop.html';
        window.history.pushState({path: newUrl}, '', newUrl);
        searchInput.blur();
        const evt = new Event('input', { bubbles: true });
        searchInput.dispatchEvent(evt);
    } else {
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

/* ---------- Dynamic Product Detail & Gallery & Tabs ---------- */
(function renderProductDetail() {
    if (window.location.pathname.includes('product-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'), 10) || 1;
        const product = productsDB.find(p => p.id === productId) || productsDB[0];

        if (product) {
            const brandEl = document.getElementById('detailBrand');
            const titleEl = document.getElementById('detailTitle');
            const priceEl = document.getElementById('detailPrice');
            const oldPriceEl = document.getElementById('detailOldPrice');
            const discountEl = document.getElementById('detailDiscount');
            const reviewEl = document.getElementById('detailReviews');
            const btnEl = document.getElementById('detailAddToCart');
            const descEl = document.getElementById('detailDescription');
            const featuresEl = document.getElementById('detailFeatures');
            const reviewCountText = document.getElementById('tabReviewCountText');

            if(brandEl) brandEl.textContent = product.brand;
            if(titleEl) titleEl.textContent = product.name;
            if(priceEl) priceEl.textContent = product.priceCurrent;
            if(oldPriceEl) oldPriceEl.textContent = product.priceOriginal;
            if(discountEl) discountEl.textContent = product.discount;
            if(reviewEl) reviewEl.textContent = product.reviews;
            
            if(descEl && product.description) {
                descEl.textContent = product.description;
            }

            if(featuresEl && product.features) {
                featuresEl.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
            }

            const tabReviewsEl = document.getElementById('detailTabReviews');
            if(tabReviewsEl) {
                const reviewCountMatch = product.reviews.match(/\d+/);
                const reviewCount = reviewCountMatch ? reviewCountMatch[0] : '0';
                tabReviewsEl.textContent = `Reviews (${reviewCount})`;
                if(reviewCountText) {
                    reviewCountText.textContent = `Based on ${reviewCount} customer reviews`;
                }
            }

            if(btnEl) btnEl.dataset.product = product.name;
            
            const isInCart = cartItems.some(item => {
                if (typeof item === 'string') return item === product.name;
                return item.name === product.name;
            });
            if(btnEl) {
                if (isInCart) {
                    btnEl.classList.add('in-cart');
                    btnEl.innerHTML = `Remove <i data-lucide="x" width="20" height="20"></i>`;
                } else {
                    btnEl.classList.remove('in-cart');
                    btnEl.innerHTML = `<i data-lucide="shopping-cart" width="20" height="20"></i> Add to cart`;
                }
            }

            const mainImg = document.getElementById('detailMainImg');
            if(mainImg && product.images.length > 0) {
                mainImg.src = product.images[0];
                mainImg.alt = product.name;
            }
            const thumbnails = document.querySelectorAll('.thumb-img');
            thumbnails.forEach((thumb, i) => {
                const wrap = thumb.closest('.thumb-img-wrap');
                if(product.images[i]) {
                    thumb.src = product.images[i];
                    if (wrap) wrap.style.display = 'block';
                } else if(wrap && i > 0) {
                    wrap.style.display = 'none';
                }
            });

            if(window.lucide) {
                lucide.createIcons();
            }
        }
    }
})();

/* ---------- Thumbnail & Tab Click Handlers ---------- */
document.addEventListener('click', (e) => {
    const thumbWrap = e.target.closest('.thumb-img-wrap');
    if (thumbWrap) {
        const thumbImg = thumbWrap.querySelector('.thumb-img');
        const mainImg = document.getElementById('detailMainImg');
        if (thumbImg && mainImg) {
            mainImg.src = thumbImg.src;
            document.querySelectorAll('.thumb-img-wrap').forEach(w => w.classList.remove('active'));
            thumbWrap.classList.add('active');
        }
    }

    const tabBtn = e.target.closest('.tab-btn');
    if (tabBtn) {
        const tabId = tabBtn.dataset.tab;
        if (tabId) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            tabBtn.classList.add('active');
            const targetPanel = document.getElementById(tabId);
            if (targetPanel) targetPanel.classList.add('active');
        }
    }
});

/* =========================================
   DYNAMIC MEGA MENU CATEGORIES
   ========================================= */
const megaMenuData = {
    "food-beverage": {
        title: "Food & Beverage",
        columns: [
            {
                title: "Beverages",
                items: ["Coffee & Tea", "Fresh Juices", "Soft Drinks", "Mineral Water", "Energy Drinks"]
            },
            {
                title: "Snacks & Sweets",
                items: ["Biscuits & Cookies", "Chocolates", "Potato Chips", "Dried Fruits", "Nuts & Seeds"]
            },
            {
                title: "Pantry & Cooking",
                items: ["Cooking Oil", "Spices & Seasoning", "Pasta & Noodles", "Canned Food", "Sauces"]
            },
            {
                title: "Fresh & Dairy",
                items: ["Milk & Butter", "Cheese & Yogurt", "Fresh Bakery", "Breakfast Cereal"]
            }
        ]
    },
    "beauty-personal-care": {
        title: "Beauty & Personal Care",
        columns: [
            {
                title: "Skin Care",
                items: ["Moisturizers", "Serums", "Sunscreen", "Toners", "Face Wash", "Eye Cream"]
            },
            {
                title: "Makeup",
                items: ["Foundation", "Lipstick", "Eyeshadow", "Blush & Bronzer", "Mascara", "Primer"]
            },
            {
                title: "Hair Care",
                items: ["Shampoo", "Conditioner", "Hair Mask", "Hair Oil", "Styling Products"]
            },
            {
                title: "Body Care",
                items: ["Body Lotion", "Body Scrub", "Deodorant", "Hand Cream", "Perfume & Fragrance"]
            },
            {
                title: "Fragrance",
                items: ["Women's Perfume", "Men's Cologne", "Body Mist", "Roll-On Perfume", "Gift Sets"]
            }
        ]
    },
    "home-living": {
        title: "Home & Living",
        columns: [
            {
                title: "Bed & Bath",
                items: ["Sheets & Pillowcases", "Bath Towels", "Blankets & Throws", "Bath Mats", "Duvet Covers"]
            },
            {
                title: "Decor & Lighting",
                items: ["Wall Art", "Candles & Diffusers", "Desk Lamps", "Floor Rugs", "Decorative Vases"]
            },
            {
                title: "Kitchen & Dining",
                items: ["Drinkware & Mugs", "Cookware Sets", "Cutlery & Utensils", "Storage Containers"]
            },
            {
                title: "Furniture",
                items: ["Coffee Tables", "Ergonomic Chairs", "Bookshelves", "Storage Racks"]
            }
        ]
    },
    "electronics": {
        title: "Electronics",
        columns: [
            {
                title: "Mobile & Tablets",
                items: ["Smartphones", "Tablets", "Screen Protectors", "Phone Cases", "Power Banks"]
            },
            {
                title: "Computers",
                items: ["Laptops", "Desktop PCs", "Monitors", "Keyboards & Mice", "External Storage"]
            },
            {
                title: "Smart Home",
                items: ["Smart Speakers", "Security Cameras", "Smart Plugs", "Robot Vacuums"]
            },
            {
                title: "Cameras & Drones",
                items: ["Action Cameras", "DSLR Lenses", "Camera Tripods", "Memory Cards"]
            }
        ]
    },
    "audio-entertainment": {
        title: "Audio & Entertainment",
        columns: [
            {
                title: "Headphones",
                items: ["Wireless Earbuds", "Over-Ear Headphones", "Noise-Canceling", "Sports Earphones"]
            },
            {
                title: "Speakers",
                items: ["Bluetooth Speakers", "Soundbars", "Home Theater", "Portable Speakers"]
            },
            {
                title: "Gaming",
                items: ["Gaming Consoles", "Controllers", "Gaming Headsets", "RGB Accessories"]
            }
        ]
    },
    "fashion": {
        title: "Fashion",
        columns: [
            {
                title: "Women's Clothing",
                items: ["Dresses", "Tops & Blouses", "Pants & Jeans", "Jackets & Coats", "Activewear"]
            },
            {
                title: "Men's Clothing",
                items: ["T-Shirts & Polos", "Shirts", "Denim & Jeans", "Hoodies & Sweatshirts", "Blazers"]
            },
            {
                title: "Footwear",
                items: ["Sneakers", "Running Shoes", "Casual Loafers", "Formal Shoes", "Sandals"]
            },
            {
                title: "Watches & Jewelry",
                items: ["Analog Watches", "Smartwatches", "Necklaces", "Rings & Bracelets"]
            }
        ]
    },
    "bags-accessories": {
        title: "Bags & Accessories",
        columns: [
            {
                title: "Bags",
                items: ["Backpacks", "Tote Bags", "Crossbody Bags", "Luggage & Suitcases", "Leather Wallets"]
            },
            {
                title: "Accessories",
                items: ["Sunglasses", "Leather Belts", "Hats & Caps", "Scarves & Gloves", "Keychains"]
            }
        ]
    },
    "baby-kids": {
        title: "Baby & Kids",
        columns: [
            {
                title: "Baby Care",
                items: ["Diapers & Wipes", "Baby Skincare", "Feeding Bottles", "Baby Strollers"]
            },
            {
                title: "Toys & Learning",
                items: ["Educational Toys", "Building Blocks", "Board Games", "Plush Toys"]
            },
            {
                title: "Kids Fashion",
                items: ["Baby Clothing", "Kids Shoes", "School Backpacks"]
            }
        ]
    },
    "sport-outdoors": {
        title: "Sport & Outdoors",
        columns: [
            {
                title: "Exercise & Fitness",
                items: ["Yoga Mats", "Dumbbells", "Resistance Bands", "Jump Ropes"]
            },
            {
                title: "Outdoor Gear",
                items: ["Camping Tents", "Hiking Backpacks", "Water Bottles", "Flashlights"]
            },
            {
                title: "Sportswear",
                items: ["Athletic Shirts", "Compression Shorts", "Running Socks", "Sports Bras"]
            }
        ]
    },
    "automotive": {
        title: "Automotive",
        columns: [
            {
                title: "Car Care",
                items: ["Car Wash & Wax", "Microfiber Towels", "Tire Care", "Air Fresheners"]
            },
            {
                title: "Interior Accessories",
                items: ["Seat Covers", "Floor Mats", "Phone Mounts", "Steering Wheel Covers"]
            }
        ]
    }
};

function renderMegaContent(categoryKey) {
    const container = document.querySelector('.mega-content');
    if (!container) return;

    const data = megaMenuData[categoryKey] || megaMenuData["food-beverage"];
    let html = '';

    data.columns.forEach(col => {
        html += `
            <div class="mega-col">
                <h4 class="mega-col-title">${col.title}</h4>
                ${col.items.map(item => `<a href="shop.html?search=${encodeURIComponent(item)}">${item}</a>`).join('')}
            </div>
        `;
    });

    container.innerHTML = html;
}

(function initMegaMenuInteractivity() {
    const activeLink = document.querySelector('.mega-sidebar .sidebar-link.active');
    if (activeLink) {
        const initialKey = activeLink.dataset.category || 'food-beverage';
        renderMegaContent(initialKey);
    } else {
        renderMegaContent('food-beverage');
    }

    document.addEventListener('mouseover', (e) => {
        const link = e.target.closest('.mega-sidebar .sidebar-link');
        if (link) {
            const catKey = link.dataset.category || link.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            document.querySelectorAll('.mega-sidebar .sidebar-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            renderMegaContent(catKey);
        }
    });

    document.addEventListener('click', (e) => {
        const link = e.target.closest('.mega-sidebar .sidebar-link');
        if (link) {
            const catKey = link.dataset.category || link.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
            document.querySelectorAll('.mega-sidebar .sidebar-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            renderMegaContent(catKey);
        }
    });
})();

/* ---------- Shop Filters Logic ---------- */
(function initShopFilters() {
    const filterInputs = document.querySelectorAll('.filter-cb');
    const products = document.querySelectorAll('.shop-product');
    const noProductsMsg = document.getElementById('noProductsMessage');
    const searchInput = document.getElementById('searchInput');
    
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    const categoryQuery = urlParams.get('category');
    
    if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
    }
    
    if (categoryQuery) {
        filterInputs.forEach(cb => {
            if (cb.dataset.type === 'category' && cb.value.toLowerCase() === categoryQuery.toLowerCase()) {
                cb.checked = true;
            }
        });
    }
    
    if (!products.length) return;

    function applyFilters() {
        const selectedCategories = Array.from(document.querySelectorAll('.filter-cb[data-type="category"]:checked')).map(cb => cb.value.toLowerCase());
        const selectedBrands = Array.from(document.querySelectorAll('.filter-cb[data-type="brand"]:checked')).map(cb => cb.value.toLowerCase());
        const selectedRatings = Array.from(document.querySelectorAll('.filter-cb[data-type="rating"]:checked')).map(cb => cb.value);
        const priceRadio = document.querySelector('.filter-cb[data-type="price"]:checked');
        const selectedPrice = priceRadio ? priceRadio.value : null;
        const currentSearch = searchInput ? searchInput.value.trim().toLowerCase() : '';

        let visibleCount = 0;

        products.forEach(card => {
            const category = card.dataset.category?.toLowerCase() || '';
            const brand = card.dataset.brand?.toLowerCase() || '';
            const rating = card.dataset.rating;
            const price = parseInt(card.dataset.price, 10);
            const productName = card.querySelector('.product-name')?.textContent.toLowerCase() || '';

            const matchCategory = selectedCategories.length === 0 || selectedCategories.some(c => category.includes(c) || c.includes(category));
            const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);
            const matchRating = selectedRatings.length === 0 || selectedRatings.includes(rating);
            
            let matchPrice = true;
            if (selectedPrice === 'under-100k') {
                matchPrice = price < 100000;
            } else if (selectedPrice === '100k-200k') {
                matchPrice = price >= 100000 && price <= 200000;
            } else if (selectedPrice === 'above-200k') {
                matchPrice = price > 200000;
            }
            
            const matchSearch = currentSearch === '' || productName.includes(currentSearch) || category.includes(currentSearch);

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

    applyFilters();
})();

/* =========================================
   DEALS PAGE COUNTDOWN TIMER & FILTERS
   ========================================= */
(function initDealsCountdown() {
    const dealsCountdown = document.getElementById('dealsCountdown');
    if (!dealsCountdown) return;

    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMins = document.getElementById('cdMins');
    const cdSecs = document.getElementById('cdSecs');

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

(function initDealsFilters() {
    const filterBtns = document.querySelectorAll('.deal-filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterName = btn.textContent.trim();
            showToast(`Filtered by: ${filterName}`);
        });
    });
})();

/* =========================================
   MOBILE INTERACTION HANDLERS & GLOBAL ACTIONS
   ========================================= */
(function initMobileNavAndGlobals() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const closeBtn = document.getElementById('closeMobileMenuBtn');
    const drawer = document.getElementById('mobileMenuDrawer');
    const overlay = document.getElementById('overlay');
    const cartSidebar = document.getElementById('cartSidebar');
    const filterBtn = document.getElementById('mobileFilterToggle');
    const shopSidebar = document.querySelector('.shop-sidebar');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');

    function closeAllDrawers() {
        if (drawer) drawer.classList.remove('open');
        if (shopSidebar) shopSidebar.classList.remove('open-mobile');
        if (cartSidebar) cartSidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    }

    if (mobileToggle && drawer) {
        mobileToggle.addEventListener('click', () => {
            drawer.classList.add('open');
            if (overlay) overlay.classList.add('active');
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeAllDrawers);
    if (filterBtn && shopSidebar) {
        filterBtn.addEventListener('click', () => {
            shopSidebar.classList.add('open-mobile');
            if (overlay) overlay.classList.add('active');
        });
    }
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeAllDrawers);

    if (overlay) {
        overlay.addEventListener('click', closeAllDrawers);
    }

    document.querySelectorAll('#cartBtn, .cart-icon').forEach(cartBtnEl => {
        cartBtnEl.addEventListener('click', (e) => {
            e.preventDefault();
            openCartSidebar();
        });
    });

    document.getElementById('closeCartBtn')?.addEventListener('click', () => {
        closeCartSidebar();
    });

    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if (cartItems.length === 0) {
            showToast('Your cart is empty!');
        } else {
            showToast('Thank you! Your order has been placed successfully. 🎉');
            cartItems = [];
            localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
            updateCartBadge();
            renderCartSidebar();
            setTimeout(closeCartSidebar, 1500);
        }
    });

    document.querySelectorAll('#wishlistBtn, .wishlist-btn-circle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            const isFav = btn.classList.contains('active');
            showToast(isFav ? 'Added to Wishlist ❤️' : 'Removed from Wishlist');
        });
    });

    document.getElementById('loginBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Login & Registration feature coming soon!');
    });
})();

/* ---------- Init ---------- */
updateCartBadge();
document.addEventListener('DOMContentLoaded', () => { 
    if (window.lucide) lucide.createIcons(); 
    updateCartBadge();
});
