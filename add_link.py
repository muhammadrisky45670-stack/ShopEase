import os

def add_link(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the starting div for product cards to make them clickable
    new_content = content.replace('<div class="product-card"', '<div class="product-card" onclick="window.location.href=\'product-detail.html\'" style="cursor: pointer;"')
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

add_link('index.html')
add_link('shop.html')
print("Links added to index.html and shop.html")
