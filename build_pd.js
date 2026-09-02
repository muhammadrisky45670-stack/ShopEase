const fs = require('fs');
let content = fs.readFileSync('shop.html', 'utf8');

// Find the start of shop-page-wrapper
const startKeyword = '<!-- ======= SHOP LAYOUT ======= -->';
const endKeyword = '</main>';

const startIndex = content.indexOf(startKeyword);
const endIndex = content.indexOf(endKeyword);

if (startIndex !== -1 && endIndex !== -1) {
    const headerPart = content.substring(0, startIndex);
    const footerPart = content.substring(endIndex);

    const productDetailContent = `
        <!-- ======= PRODUCT DETAIL ======= -->
        <div class="product-detail-wrapper section-container">
            <div class="product-detail-main">
                <!-- Gallery -->
                <div class="product-gallery">
                    <div class="thumbnail-list">
                        <div class="thumb-img-wrap active"><img src="Assets/Lakme Sun Expert.png" alt="Lakme Thumbnail" class="thumb-img"></div>
                        <div class="thumb-img-wrap"><img src="Assets/Lakme Sun Expert.png" alt="Lakme Thumbnail" class="thumb-img"></div>
                        <div class="thumb-img-wrap"><img src="Assets/Lakme Sun Expert.png" alt="Lakme Thumbnail" class="thumb-img"></div>
                        <div class="thumb-img-wrap"><img src="Assets/Lakme Sun Expert.png" alt="Lakme Thumbnail" class="thumb-img"></div>
                        <button class="thumb-more" aria-label="More thumbnails">
                            <i data-lucide="chevron-down" width="24" height="24"></i>
                        </button>
                    </div>
                    <div class="main-image-wrap">
                        <img src="Assets/Lakme Sun Expert.png" alt="Lakme Sun Expert SPF 50 PA+++ Ultramatte Lotion" class="main-image">
                    </div>
                </div>

                <!-- Info -->
                <div class="product-info-detail">
                    <p class="brand-name">Lakme</p>
                    <h2 class="product-title-large">Lakmé Sun Expert SPF 50 PA+++ Ultramatte Lotion</h2>
                    
                    <div class="product-rating-large">
                        <span class="stars">
                            <i data-lucide="star" fill="currentColor" color="#fbbf24"></i>
                            <i data-lucide="star" fill="currentColor" color="#fbbf24"></i>
                            <i data-lucide="star" fill="currentColor" color="#fbbf24"></i>
                            <i data-lucide="star" fill="currentColor" color="#fbbf24"></i>
                            <i data-lucide="star" fill="currentColor" color="#fbbf24"></i>
                        </span>
                        <span class="review-count">(1250 Reviews)</span>
                    </div>

                    <div class="product-price-large">
                        <span class="price-current">Rp129.000</span>
                        <span class="price-original">Rp179.000</span>
                        <span class="discount-badge">12% Off</span>
                    </div>

                    <div class="product-actions-bar">
                        <div class="qty-selector">
                            <span class="qty-label">Quantity</span>
                            <div class="qty-controls">
                                <button class="qty-btn">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn">+</button>
                            </div>
                        </div>
                        <span class="stock-status">In Stock</span>
                        <button class="wishlist-btn-circle">
                            <i data-lucide="heart" width="20" height="20"></i>
                        </button>
                    </div>

                    <div class="product-buttons-large">
                        <button class="btn-primary add-cart-large">
                            <i data-lucide="shopping-cart" width="20" height="20"></i>
                            Add to cart
                        </button>
                        <button class="btn-outline buy-now-large">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <!-- Tabs -->
            <div class="product-tabs">
                <div class="tab-headers">
                    <button class="tab-btn active">Description</button>
                    <button class="tab-btn">Reviews (1250)</button>
                </div>
                <div class="tab-content">
                    <p>TFIT Tone Up Sun Fluid is a lightweight daily sunscreen with SPF50+ PA++++ that helps protect your skin from harmful UV rays while giving a natural tone-up effect. Its non-sticky formula blends easily and leaves your skin smooth, bright, and protected all day long.</p>
                    <ul class="product-features">
                        <li>Provides high protection from UVA &amp; UVB rays</li>
                        <li>Instant tone-up for a brighter and more even skin tone</li>
                        <li>Lightweight, non-greasy, and quick absorbing formula</li>
                        <li>Suitable for all skin types, even sensitive skin</li>
                    </ul>
                </div>
            </div>

            <!-- Related Products -->
            <div class="related-products">
                <h3 class="related-title">You May Also Like</h3>
                <div class="products-grid">
                    <!-- Product Card 1 -->
                    <div class="product-card">
                        <div class="product-img-wrap">
                            <img src="Assets/Product 1.jpg" alt="SUN Protect Cream SPF 50+" class="product-img" loading="lazy">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">SUN Protect Cream SPF 50+</h3>
                            <div class="product-rating">
                                <span class="stars">★★★★★</span>
                                <span class="review-count">(828)</span>
                            </div>
                            <div class="product-price">
                                <span class="price-current">Rp119.000</span>
                                <span class="price-original">Rp159.000</span>
                            </div>
                            <button class="add-to-cart-btn btn-outline-small">
                                Add to Cart
                                <i data-lucide="arrow-right" width="16" height="16"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Product Card 2 -->
                    <div class="product-card">
                        <div class="product-img-wrap">
                            <img src="Assets/Product 2.jpg" alt="Ocean Shield Sunscreen SPF 50 PPA+++" class="product-img" loading="lazy">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">Ocean Shield Sunscreen SPF 50 PPA+++</h3>
                            <div class="product-rating">
                                <span class="stars">★★★★★</span>
                                <span class="review-count">(386)</span>
                            </div>
                            <div class="product-price">
                                <span class="price-current">Rp89.000</span>
                                <span class="price-original">Rp129.000</span>
                            </div>
                            <button class="add-to-cart-btn btn-outline-small">
                                Add to Cart
                                <i data-lucide="arrow-right" width="16" height="16"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Product Card 3 -->
                    <div class="product-card">
                        <div class="product-img-wrap">
                            <img src="Assets/Product 3.jpg" alt="TFIT Tone Up Sun Fluid SPF50+ PA++++" class="product-img" loading="lazy">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">TFIT Tone Up Sun Fluid SPF50+ PA++++</h3>
                            <div class="product-rating">
                                <span class="stars">★★★★★</span>
                                <span class="review-count">(728)</span>
                            </div>
                            <div class="product-price">
                                <span class="price-current">Rp149.000</span>
                                <span class="price-original">Rp179.000</span>
                            </div>
                            <button class="add-to-cart-btn btn-outline-small">
                                Add to Cart
                                <i data-lucide="arrow-right" width="16" height="16"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Product Card 4 -->
                    <div class="product-card">
                        <div class="product-img-wrap">
                            <img src="Assets/Product 4.jpg" alt="SUN Protect Cream SPF 50+" class="product-img" loading="lazy">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">SUN Protect Cream SPF 50+</h3>
                            <div class="product-rating">
                                <span class="stars">★★★★★</span>
                                <span class="review-count">(828)</span>
                            </div>
                            <div class="product-price">
                                <span class="price-current">Rp119.000</span>
                                <span class="price-original">Rp159.000</span>
                            </div>
                            <button class="add-to-cart-btn btn-outline-small">
                                Add to Cart
                                <i data-lucide="arrow-right" width="16" height="16"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- ============================== -->
    `;

    const newContent = headerPart + productDetailContent + '\n    ' + footerPart;
    fs.writeFileSync('product-detail.html', newContent, 'utf8');
    console.log('product-detail.html generated successfully.');
} else {
    console.log('Markers not found in shop.html');
}
