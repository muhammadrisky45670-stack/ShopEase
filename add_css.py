import os

css_to_append = """
/* ================================================
   PRODUCT DETAIL PAGE
================================================ */
.product-detail-wrapper {
    margin-top: 40px;
    margin-bottom: 60px;
}

.product-detail-main {
    display: flex;
    gap: 40px;
    margin-bottom: 50px;
    align-items: flex-start;
}

@media (max-width: 900px) {
    .product-detail-main {
        flex-direction: column;
    }
}

/* Gallery */
.product-gallery {
    display: flex;
    gap: 20px;
    flex: 1;
}

.thumbnail-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.thumb-img-wrap {
    width: 70px;
    height: 70px;
    background: #eef2f6;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: var(--transition);
}

.thumb-img-wrap.active, .thumb-img-wrap:hover {
    border-color: var(--navy);
}

.thumb-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumb-more {
    width: 70px;
    height: 40px;
    background: var(--navy);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-image-wrap {
    flex: 1;
    background: #eef2f6;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

/* Info Detail */
.product-info-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.brand-name {
    font-size: 16px;
    color: #666;
    margin: 0;
}

.product-title-large {
    font-size: 28px;
    font-weight: 700;
    color: white;
    margin: 0;
    line-height: 1.3;
}

.product-rating-large {
    display: flex;
    align-items: center;
    gap: 10px;
}

.product-rating-large .stars {
    color: #fbbf24;
    display: flex;
}

.product-rating-large .review-count {
    color: #999;
    font-size: 14px;
}

.product-price-large {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
}

.product-price-large .price-current {
    font-size: 32px;
    font-weight: 700;
    color: var(--orange);
}

.product-price-large .price-original {
    font-size: 20px;
    color: #999;
    text-decoration: line-through;
}

.discount-badge {
    background: var(--orange);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
}

.product-actions-bar {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 8px;
}

.qty-selector {
    display: flex;
    align-items: center;
    gap: 12px;
}

.qty-label {
    font-size: 16px;
    color: white;
}

.qty-controls {
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    overflow: hidden;
}

.qty-btn {
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: var(--transition);
}

.qty-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

.qty-val {
    width: 40px;
    text-align: center;
    color: white;
    font-size: 16px;
}

.stock-status {
    color: #4ade80;
    font-weight: 500;
}

.wishlist-btn-circle {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transition: var(--transition);
}

.wishlist-btn-circle:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--orange);
}

.product-buttons-large {
    display: flex;
    gap: 16px;
    margin-top: 10px;
}

.add-cart-large, .buy-now-large {
    flex: 1;
    padding: 16px 24px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: var(--transition);
}

.add-cart-large {
    background: var(--orange);
    color: white;
    border: none;
}

.add-cart-large:hover {
    background: #e67e22;
}

.buy-now-large {
    background: white;
    color: var(--navy);
    border: 2px solid white;
}

.buy-now-large:hover {
    background: transparent;
    color: white;
}

/* Tabs */
.product-tabs {
    margin-top: 60px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-headers {
    display: flex;
    gap: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-btn {
    background: transparent;
    border: none;
    color: #999;
    font-size: 18px;
    padding: 20px 0;
    cursor: pointer;
    position: relative;
}

.tab-btn.active {
    color: white;
    font-weight: 600;
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
}

.tab-content {
    padding: 30px 0;
    color: #ddd;
    line-height: 1.6;
    font-size: 16px;
}

.product-features {
    list-style: none;
    padding: 0;
    margin: 20px 0 0 0;
}

.product-features li {
    margin-bottom: 8px;
}

/* Related Products */
.related-products {
    margin-top: 60px;
}

.related-title {
    font-size: 24px;
    color: white;
    margin-bottom: 30px;
}
"""

with open('style.css', 'a', encoding='utf-8') as f:
    f.write(css_to_append)

print("CSS appended to style.css")
