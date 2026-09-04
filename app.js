/* ================================================
   ShopEase – app.js
   ================================================ */

/* ---------- Product Database ---------- */
const productsDB = [
    {
        id: 1,
        name: "Nescaf\u00e9 Gold Blend Premium Instant Coffee 200g",
        brand: "Nescafe",
        category: "Food & Beverage Beverages Coffee & Tea",
        priceCurrent: "Rp85.000",
        priceOriginal: "Rp110.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(1420 Reviews)",
        images: ["Assets/Products/prod_1.jpg", "Assets/Products/prod_1_2.jpg"],
        description: "Rich, smooth, and full-bodied premium instant coffee crafted with high quality Arabica and Robusta coffee beans.",
        features: [
            "\u2022 Made from selected Arabica & Robusta coffee beans",
            "\u2022 Smooth crema finish and rich aromatic roast",
            "\u2022 Quick and convenient premium coffee preparation",
            "\u2022 Imported 200g glass jar"
]
    },
    {
        id: 2,
        name: "Twinings Earl Grey Tea 50 Tea Bags",
        brand: "Twinings",
        category: "Food & Beverage Beverages Coffee & Tea",
        priceCurrent: "Rp65.000",
        priceOriginal: "Rp89.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(650 Reviews)",
        images: ["Assets/Products/prod_2.jpg", "Assets/Products/prod_2_2.jpg"],
        description: "Classic fragrant black tea delicately scented with citrusy bergamot oil.",
        features: [
            "\u2022 Premium loose leaf black tea in convenient tea bags",
            "\u2022 Distinctive citrus bergamot aroma",
            "\u2022 Refreshing and uplifting hot or iced",
            "\u2022 50 individually foil wrapped tea bags"
]
    },
    {
        id: 3,
        name: "Ferrero Rocher Premium Chocolate Box 24 Pcs",
        brand: "Ferrero Rocher",
        category: "Food & Beverage Snacks & Sweets Chocolates",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp189.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(980 Reviews)",
        images: ["Assets/Products/prod_3.jpg", "Assets/Products/prod_3_2.jpg"],
        description: "Whole crunchy hazelnut in the center, delicious creamy hazelnut filling, and crisp wafer shell covered with chocolate.",
        features: [
            "\u2022 Premium golden foil wrapped chocolates",
            "\u2022 Crunchy hazelnut center coated in smooth chocolate",
            "\u2022 Perfect luxury gift box for special celebrations",
            "\u2022 Box of 24 pieces"
]
    },
    {
        id: 4,
        name: "Kellogg's Original Corn Flakes Cereal 500g",
        brand: "Kellogg",
        category: "Food & Beverage Fresh & Dairy Breakfast Cereal",
        priceCurrent: "Rp55.000",
        priceOriginal: "Rp75.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(510 Reviews)",
        images: ["Assets/Products/prod_4.jpg", "Assets/Products/prod_4_2.jpg"],
        description: "Crispy golden corn flakes enriched with essential vitamins and iron for a nutritious family breakfast.",
        features: [
            "\u2022 Made from real sun-ripened corn",
            "\u2022 Enriched with 9 essential vitamins & minerals",
            "\u2022 Low fat & high energy start to your morning",
            "\u2022 Large 500g family pack"
]
    },
    {
        id: 5,
        name: "Organic Extra Virgin Olive Oil 500ml",
        brand: "PantryGold",
        category: "Food & Beverage Pantry & Cooking Cooking Oil",
        priceCurrent: "Rp125.000",
        priceOriginal: "Rp160.000",
        discount: "22% Off",
        rating: 5,
        reviews: "(430 Reviews)",
        images: ["Assets/Products/prod_5.jpg", "Assets/Products/prod_5_2.jpg"],
        description: "Cold-pressed 100% organic extra virgin olive oil ideal for healthy dressing, saut\u00e9ing, and cooking.",
        features: [
            "\u2022 100% Cold pressed first extraction",
            "\u2022 Rich in antioxidants and healthy monounsaturated fats",
            "\u2022 Dark glass bottle preserves freshness",
            "\u2022 Certified organic and non-GMO"
]
    },
    {
        id: 6,
        name: "Premium Italian Pasta Penne Rigate 1kg",
        brand: "PantryGold",
        category: "Food & Beverage Pantry & Cooking Pasta & Noodles",
        priceCurrent: "Rp48.000",
        priceOriginal: "Rp65.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(320 Reviews)",
        images: ["Assets/Products/prod_6.jpg", "Assets/Products/prod_6_2.jpg"],
        description: "Authentic 100% Italian durum wheat semolina penne pasta crafted for perfect al dente texture.",
        features: [
            "\u2022 Made from 100% Italian durum wheat semolina",
            "\u2022 Bronze-die extruded for superior sauce absorption",
            "\u2022 Holds shape perfectly during cooking",
            "\u2022 1kg economy pack"
]
    },
    {
        id: 7,
        name: "Pure Wildflower Raw Honey 350g",
        brand: "PantryGold",
        category: "Food & Beverage Pantry & Cooking Honey & Syrups",
        priceCurrent: "Rp95.000",
        priceOriginal: "Rp130.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(780 Reviews)",
        images: ["Assets/Products/prod_7.jpg", "Assets/Products/prod_7_2.jpg"],
        description: "100% pure unfiltered raw wildflower honey rich in natural enzymes and soothing antibacterial properties.",
        features: [
            "\u2022 Unfiltered raw natural honey",
            "\u2022 Harvested from wild mountain flora",
            "\u2022 Great natural sweetener for tea and desserts",
            "\u2022 350g glass jar with wooden dipper"
]
    },
    {
        id: 8,
        name: "Organic Japanese Ceremonial Matcha Powder 100g",
        brand: "Twinings",
        category: "Food & Beverage Beverages Tea & Herbal Teas",
        priceCurrent: "Rp155.000",
        priceOriginal: "Rp210.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(590 Reviews)",
        images: ["Assets/Products/prod_8.jpg", "Assets/Products/prod_8_2.jpg"],
        description: "First harvest ceremonial grade Japanese green tea matcha powder vibrant green and rich in L-theanine.",
        features: [
            "\u2022 Ceremonial grade 100% Japanese green tea",
            "\u2022 Rich in antioxidants & natural calm energy",
            "\u2022 Perfect for matcha latte or traditional tea ceremony",
            "\u2022 Airtight resealable tin"
]
    },
    {
        id: 9,
        name: "Natural Spring Mineral Water 1.5L (Pack of 6)",
        brand: "PantryGold",
        category: "Food & Beverage Beverages Mineral Water",
        priceCurrent: "Rp35.000",
        priceOriginal: "Rp48.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(890 Reviews)",
        images: ["Assets/Products/prod_9.jpg", "Assets/Products/prod_9_2.jpg"],
        description: "Pure natural spring mineral water sourced from deep mountain springs rich in essential minerals.",
        features: [
            "\u2022 Pure mountain spring water",
            "\u2022 Naturally balanced pH 7.8 mineral content",
            "\u2022 Eco-friendly recyclable 1.5L bottles",
            "\u2022 Pack of 6 bottles"
]
    },
    {
        id: 10,
        name: "Premium Whole Bean Arabica Dark Roast Coffee 1kg",
        brand: "Nescafe",
        category: "Food & Beverage Beverages Coffee & Tea",
        priceCurrent: "Rp210.000",
        priceOriginal: "Rp280.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(640 Reviews)",
        images: ["Assets/Products/prod_10.jpg", "Assets/Products/prod_10_2.jpg"],
        description: "Freshly roasted single-origin Arabica coffee beans with notes of dark chocolate and toasted hazelnuts.",
        features: [
            "\u2022 100% Single-origin Arabica coffee beans",
            "\u2022 Artisan dark roast for intense espresso crema",
            "\u2022 One-way degassing valve foil packaging",
            "\u2022 1kg barista pack"
]
    },
    {
        id: 11,
        name: "Lakm\u00e9 Sun Expert SPF 50 PA+++ Ultramatte Lotion",
        brand: "Lakme",
        category: "Beauty & Personal Care Skin Care Sunscreen",
        priceCurrent: "Rp129.000",
        priceOriginal: "Rp179.000",
        discount: "12% Off",
        rating: 5,
        reviews: "(1250 Reviews)",
        images: ["Assets/Products/prod_11.jpg", "Assets/Products/prod_11_2.jpg"],
        description: "Lakm\u00e9 Sun Expert SPF 50 PA+++ Ultramatte Lotion provides high protection from UVA & UVB rays.",
        features: [
            "\u2022 Provides high protection from UVA & UVB rays",
            "\u2022 Ultramatte finish prevents greasy skin shine",
            "\u2022 Lightweight & quick-absorbing formula",
            "\u2022 Dermatologically tested"
]
    },
    {
        id: 12,
        name: "Ocean Shield Sunscreen SPF 50 PA+++",
        brand: "Ocean Shield",
        category: "Beauty & Personal Care Skin Care Sunscreen",
        priceCurrent: "Rp89.000",
        priceOriginal: "Rp129.000",
        discount: "31% Off",
        rating: 5,
        reviews: "(985 Reviews)",
        images: ["Assets/Products/prod_12.jpg", "Assets/Products/prod_12_2.jpg"],
        description: "Ocean Shield Sunscreen SPF 50 PA+++ is formulated with deep marine minerals to hydrate and shield your skin.",
        features: [
            "\u2022 Marine mineral complex for deep hydration",
            "\u2022 Broad spectrum SPF 50 PA+++ protection",
            "\u2022 Water-resistant for swimming",
            "\u2022 Eco-friendly & reef-safe"
]
    },
    {
        id: 13,
        name: "SUN Protect Cream SPF 50+",
        brand: "SUN",
        category: "Beauty & Personal Care Skin Care Sunscreen",
        priceCurrent: "Rp119.000",
        priceOriginal: "Rp159.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(828 Reviews)",
        images: ["Assets/Products/prod_13.jpg", "Assets/Products/prod_13_2.jpg"],
        description: "SUN Protect Cream SPF 50+ offers comprehensive daily sun defense infused with soothing botanical extracts.",
        features: [
            "\u2022 Soothing botanical extract formula",
            "\u2022 High SPF 50+ UVA/UVB defense",
            "\u2022 Prevents photo-aging",
            "\u2022 Non-comedogenic and gentle"
]
    },
    {
        id: 14,
        name: "TFIT Tone Up Sun Fluid SPF50+ PA++++",
        brand: "TFIT",
        category: "Beauty & Personal Care Skin Care Sunscreen Moisturizers",
        priceCurrent: "Rp149.000",
        priceOriginal: "Rp179.000",
        discount: "16% Off",
        rating: 5,
        reviews: "(721 Reviews)",
        images: ["Assets/Products/prod_14.jpg", "Assets/Products/prod_14_2.jpg"],
        description: "TFIT Tone Up Sun Fluid is a lightweight daily sunscreen with SPF50+ PA++++ for a natural tone-up effect.",
        features: [
            "\u2022 Broad spectrum SPF50+ PA++++",
            "\u2022 Instant tone-up for brighter skin",
            "\u2022 Non-greasy quick absorbing formula",
            "\u2022 Suitable for all skin types"
]
    },
    {
        id: 15,
        name: "Biore UV Aqua Rich Watery Essence",
        brand: "Biore",
        category: "Beauty & Personal Care Skin Care Sunscreen Moisturizers",
        priceCurrent: "Rp95.000",
        priceOriginal: "Rp129.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(495 Reviews)",
        images: ["Assets/Products/prod_15.jpg", "Assets/Products/prod_15_2.jpg"],
        description: "Biore UV Aqua Rich Watery Essence features micro defense technology for a weightless, watery veil.",
        features: [
            "\u2022 Micro Defense formula",
            "\u2022 Infused with Hyaluronic Acid & Royal Jelly",
            "\u2022 Super waterproof up to 80 minutes",
            "\u2022 Ideal primer base"
]
    },
    {
        id: 16,
        name: "TFIT Intensive Repair Serum",
        brand: "TFIT",
        category: "Beauty & Personal Care Skin Care Serums",
        priceCurrent: "Rp210.000",
        priceOriginal: "Rp259.000",
        discount: "18% Off",
        rating: 5,
        reviews: "(828 Reviews)",
        images: ["Assets/Products/prod_16.jpg", "Assets/Products/prod_16_2.jpg"],
        description: "Concentrated with potent peptides and niacinamide to restore skin barrier health.",
        features: [
            "\u2022 Concentrated peptide complex",
            "\u2022 Niacinamide targets hyperpigmentation",
            "\u2022 Deeply hydrates and plumps skin",
            "\u2022 Fast-absorbing formula"
]
    },
    {
        id: 17,
        name: "Biore Deep Pore Foaming Cleanser",
        brand: "Biore",
        category: "Beauty & Personal Care Skin Care Cleansers Face Wash",
        priceCurrent: "Rp50.000",
        priceOriginal: "Rp79.000",
        discount: "36% Off",
        rating: 3,
        reviews: "(721 Reviews)",
        images: ["Assets/Products/prod_17.jpg", "Assets/Products/prod_17_2.jpg"],
        description: "Lifts stubborn dirt, excess oil, and impurities deep within pores without over-drying.",
        features: [
            "\u2022 Rich dense foam penetrates pores",
            "\u2022 Removes excess sebum buildup",
            "\u2022 Leaves skin feeling refreshed",
            "\u2022 Gentle daily formula"
]
    },
    {
        id: 18,
        name: "SUN Refreshing Botanical Toner",
        brand: "SUN",
        category: "Beauty & Personal Care Skin Care Toners",
        priceCurrent: "Rp110.000",
        priceOriginal: "Rp149.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(985 Reviews)",
        images: ["Assets/Products/prod_18.jpg", "Assets/Products/prod_18_2.jpg"],
        description: "Balances pH level and preps skin for subsequent moisturizing steps with pure botanical hydrosols.",
        features: [
            "\u2022 Balances natural pH and calms redness",
            "\u2022 Rich in antioxidants and plant extracts",
            "\u2022 Alcohol-free formula",
            "\u2022 Preps skin to absorb serums"
]
    },
    {
        id: 19,
        name: "Lakm\u00e9 Soft Skin Body Lotion 500ml",
        brand: "Lakme",
        category: "Beauty & Personal Care Body Care Body Lotion",
        priceCurrent: "Rp155.000",
        priceOriginal: "Rp199.000",
        discount: "22% Off",
        rating: 4,
        reviews: "(821 Reviews)",
        images: ["Assets/Products/prod_19.jpg", "Assets/Products/prod_19_2.jpg"],
        description: "Lakm\u00e9 Soft Skin Body Lotion locks in intense moisture for up to 48 hours, leaving dry skin velvety soft.",
        features: [
            "\u2022 48-hour deep moisture nourishment",
            "\u2022 Enriched with shea butter & vitamin E",
            "\u2022 Non-sticky lotion absorbs rapidly",
            "\u2022 500ml pump bottle"
]
    },
    {
        id: 20,
        name: "Luxury French Rose Perfume & Body Mist 250ml",
        brand: "Lakme",
        category: "Beauty & Personal Care Fragrance Women's Perfume",
        priceCurrent: "Rp185.000",
        priceOriginal: "Rp240.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(610 Reviews)",
        images: ["Assets/Products/prod_20.jpg", "Assets/Products/prod_20_2.jpg"],
        description: "Delicate French rose petal fragrance body mist providing an elegant fresh floral scent all day long.",
        features: [
            "\u2022 Infused with natural French rose essential oil",
            "\u2022 Long-lasting 12-hour floral fragrance veil",
            "\u2022 Hydrating aloe vera mist base",
            "\u2022 Elegant 250ml spray bottle"
]
    },
    {
        id: 21,
        name: "Minimalist Ceramic Table Lamp",
        brand: "Nordic Light",
        category: "Home & Living Decor & Lighting Desk Lamps",
        priceCurrent: "Rp199.000",
        priceOriginal: "Rp269.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(410 Reviews)",
        images: ["Assets/Products/prod_21.jpg", "Assets/Products/prod_21_2.jpg"],
        description: "Elegant ceramic bedside table lamp with warm ambient LED light perfect for living room or bedroom decor.",
        features: [
            "\u2022 Handcrafted ceramic base with fabric shade",
            "\u2022 Warm 3000K soft eye-care LED lighting",
            "\u2022 Touch control dimmer switch",
            "\u2022 Energy efficient LED"
]
    },
    {
        id: 22,
        name: "Ergonomic Memory Foam Contour Pillow",
        brand: "RestEasy",
        category: "Home & Living Bed & Bath Pillows",
        priceCurrent: "Rp175.000",
        priceOriginal: "Rp239.000",
        discount: "27% Off",
        rating: 4,
        reviews: "(530 Reviews)",
        images: ["Assets/Products/prod_22.jpg", "Assets/Products/prod_22_2.jpg"],
        description: "Orthopedic memory foam pillow designed to support neck curve and relieve shoulder pressure during sleep.",
        features: [
            "\u2022 Slow rebound memory foam",
            "\u2022 Breathable bamboo velvet cover",
            "\u2022 Ergonomic contour for back & side sleepers",
            "\u2022 Removable washable zipper cover"
]
    },
    {
        id: 23,
        name: "Stainless Steel Electric Water Kettle 1.8L",
        brand: "TechCook",
        category: "Home & Living Kitchen & Dining Cookware",
        priceCurrent: "Rp220.000",
        priceOriginal: "Rp299.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(670 Reviews)",
        images: ["Assets/Products/prod_23.jpg", "Assets/Products/prod_23_2.jpg"],
        description: "Fast boiling 1.8 liter stainless steel electric kettle with auto shut-off and boil-dry protection.",
        features: [
            "\u2022 Food grade 304 stainless steel",
            "\u2022 Fast 1500W heating boils in under 5 mins",
            "\u2022 360-degree swivel cordless base",
            "\u2022 Auto shut-off safety protection"
]
    },
    {
        id: 24,
        name: "Non-Stick Ceramic Cookware Frying Pan Set",
        brand: "ChefChoice",
        category: "Home & Living Kitchen & Dining Cookware Sets",
        priceCurrent: "Rp285.000",
        priceOriginal: "Rp379.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(480 Reviews)",
        images: ["Assets/Products/prod_24.jpg", "Assets/Products/prod_24_2.jpg"],
        description: "Eco-friendly non-stick ceramic skillet pan set suitable for induction, gas, and electric stovetops.",
        features: [
            "\u2022 100% PFOA-free non-stick ceramic coating",
            "\u2022 Induction compatible heavy base",
            "\u2022 Stay-cool ergonomic handle",
            "\u2022 Dishwasher safe"
]
    },
    {
        id: 25,
        name: "Nordic Soft Velvet Throw Blanket 150x200cm",
        brand: "RestEasy",
        category: "Home & Living Bed & Bath Blankets",
        priceCurrent: "Rp139.000",
        priceOriginal: "Rp185.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(360 Reviews)",
        images: ["Assets/Products/prod_25.jpg", "Assets/Products/prod_25_2.jpg"],
        description: "Ultra soft fleece velvet throw blanket for sofa, bed, and cozy living room comfort.",
        features: [
            "\u2022 Super soft plush microfiber fleece",
            "\u2022 Lightweight yet warm",
            "\u2022 Anti-pilling and fade resistant",
            "\u2022 Machine washable"
]
    },
    {
        id: 26,
        name: "Aromatherapy Lavender Essential Oil Reed Diffuser",
        brand: "Nordic Light",
        category: "Home & Living Decor & Lighting Candles & Diffusers",
        priceCurrent: "Rp115.000",
        priceOriginal: "Rp150.000",
        discount: "23% Off",
        rating: 4,
        reviews: "(290 Reviews)",
        images: ["Assets/Products/prod_26.jpg", "Assets/Products/prod_26_2.jpg"],
        description: "Long-lasting essential oil reed diffuser releasing relaxing lavender fragrance up to 90 days.",
        features: [
            "\u2022 Pure natural essential oil blend",
            "\u2022 Includes 8 fiber rattan reed sticks",
            "\u2022 Flame-free safe continuous fragrance",
            "\u2022 Elegant amber glass bottle"
]
    },
    {
        id: 27,
        name: "Handcrafted Solid Wood Round Coffee Table",
        brand: "Nordic Light",
        category: "Home & Living Furniture Coffee Tables",
        priceCurrent: "Rp450.000",
        priceOriginal: "Rp620.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(190 Reviews)",
        images: ["Assets/Products/prod_27.jpg", "Assets/Products/prod_27_2.jpg"],
        description: "Mid-century modern round wooden side table with tripod solid oak legs.",
        features: [
            "\u2022 100% Solid natural oak legs",
            "\u2022 Smooth waterproof matte tabletop finish",
            "\u2022 Quick 5-minute tool-free assembly",
            "\u2022 Compact size for small apartments"
]
    },
    {
        id: 28,
        name: "Vacuum Insulated Stainless Steel Food Flask 800ml",
        brand: "TechCook",
        category: "Home & Living Kitchen & Dining Food Storage",
        priceCurrent: "Rp165.000",
        priceOriginal: "Rp220.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(410 Reviews)",
        images: ["Assets/Products/prod_28.jpg", "Assets/Products/prod_28_2.jpg"],
        description: "Double wall thermal soup thermo jar keeping meals hot up to 12 hours with folding spoon.",
        features: [
            "\u2022 304 Stainless steel interior",
            "\u2022 Keeps food hot for 12 hours or cold for 24 hours",
            "\u2022 Wide mouth opening for easy cleaning",
            "\u2022 Includes foldable stainless steel spoon"
]
    },
    {
        id: 29,
        name: "Modern Silent Non-Ticking Wall Clock 12-Inch",
        brand: "Nordic Light",
        category: "Home & Living Decor & Lighting Wall Art & Clocks",
        priceCurrent: "Rp125.000",
        priceOriginal: "Rp170.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(540 Reviews)",
        images: ["Assets/Products/prod_29.jpg", "Assets/Products/prod_29_2.jpg"],
        description: "Sleek silent quartz sweep movement wall clock perfect for office, kitchen, and living room decor.",
        features: [
            "\u2022 Silent sweep non-ticking quartz movement",
            "\u2022 Large HD glass lens & easy read numerals",
            "\u2022 Battery operated low power consumption",
            "\u2022 Modern minimalist frame design"
]
    },
    {
        id: 30,
        name: "Luxury 100% Egyptian Cotton Bath Towels 2-Pack",
        brand: "RestEasy",
        category: "Home & Living Bed & Bath Bath Towels",
        priceCurrent: "Rp179.000",
        priceOriginal: "Rp240.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(620 Reviews)",
        images: ["Assets/Products/prod_30.jpg", "Assets/Products/prod_30_2.jpg"],
        description: "Plush 600GSM combed Egyptian cotton oversized bath towels ultra soft and super absorbent.",
        features: [
            "\u2022 100% Combed long-staple Egyptian cotton",
            "\u2022 600 GSM thick plush absorbency",
            "\u2022 Reinforced double-stitched hems",
            "\u2022 Set of 2 hotel luxury bath towels"
]
    },
    {
        id: 31,
        name: "Wireless Active Noise-Cancelling Headphones Pro",
        brand: "SoundPro",
        category: "Electronics Audio & Entertainment Headphones",
        priceCurrent: "Rp499.000",
        priceOriginal: "Rp699.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(910 Reviews)",
        images: ["Assets/Products/prod_31.jpg", "Assets/Products/prod_31_2.jpg"],
        description: "Immersive wireless over-ear headphones with active noise cancellation and up to 40 hours battery life.",
        features: [
            "\u2022 Hybrid active noise cancelling ANC",
            "\u2022 40mm custom audio drivers for deep bass",
            "\u2022 40-hour playback with fast USB-C charge",
            "\u2022 Memory foam earcups"
]
    },
    {
        id: 32,
        name: "Smartwatch Series 7 Waterproof",
        brand: "TechTime",
        category: "Electronics Mobile & Tablets Smartwatches",
        priceCurrent: "Rp389.000",
        priceOriginal: "Rp520.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(780 Reviews)",
        images: ["Assets/Products/prod_32.jpg", "Assets/Products/prod_32_2.jpg"],
        description: "Feature-rich smartwatch with heart rate monitoring, sleep tracker, 50+ sports modes, and HD AMOLED display.",
        features: [
            "\u2022 1.85 inch HD full touch screen",
            "\u2022 24/7 Heart Rate & SpO2 Tracker",
            "\u2022 IP68 waterproof rating",
            "\u2022 Long battery life up to 10 days"
]
    },
    {
        id: 33,
        name: "Ultra HD 4K Action Camera Waterproof",
        brand: "GoCam",
        category: "Electronics Cameras & Drones Action Cameras",
        priceCurrent: "Rp599.000",
        priceOriginal: "Rp799.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(340 Reviews)",
        images: ["Assets/Products/prod_33.jpg", "Assets/Products/prod_33_2.jpg"],
        description: "Compact 4K 60fps action camera with electronic image stabilization and 30m underwater housing.",
        features: [
            "\u2022 4K Ultra HD video & 20MP photos",
            "\u2022 EIS 6-axis gyro stabilization",
            "\u2022 30m waterproof case",
            "\u2022 Dual color screens"
]
    },
    {
        id: 34,
        name: "Fast Charging 20,000mAh Power Bank",
        brand: "PowerMax",
        category: "Electronics Mobile & Tablets Power Banks",
        priceCurrent: "Rp199.000",
        priceOriginal: "Rp279.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(890 Reviews)",
        images: ["Assets/Products/prod_34.jpg", "Assets/Products/prod_34_2.jpg"],
        description: "High capacity 20,000mAh portable charger with 22.5W fast charging support.",
        features: [
            "\u2022 22.5W Power Delivery PD & QC 3.0",
            "\u2022 Charges 3 devices simultaneously",
            "\u2022 LED digital battery display screen",
            "\u2022 Multi-protect safety defense"
]
    },
    {
        id: 35,
        name: "Portable Mini LED Home Projector 1080P",
        brand: "TechTime",
        category: "Electronics Smart Home Projectors",
        priceCurrent: "Rp620.000",
        priceOriginal: "Rp850.000",
        discount: "27% Off",
        rating: 4,
        reviews: "(270 Reviews)",
        images: ["Assets/Products/prod_35.jpg", "Assets/Products/prod_35_2.jpg"],
        description: "Compact home cinema projector supporting 1080P Full HD display with built-in speaker.",
        features: [
            "\u2022 Native 720P supports 1080P Full HD",
            "\u2022 4500 Lumens brightness",
            "\u2022 HDMI, USB, and Smartphone screen mirroring",
            "\u2022 Built-in stereo speaker"
]
    },
    {
        id: 36,
        name: "Mechanical RGB Gaming Keyboard Hot-Swappable",
        brand: "GamePro",
        category: "Electronics Computers Keyboards",
        priceCurrent: "Rp345.000",
        priceOriginal: "Rp460.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(610 Reviews)",
        images: ["Assets/Products/prod_36.jpg", "Assets/Products/prod_36_2.jpg"],
        description: "Compact 60% mechanical gaming keyboard with hot-swappable tactile red switches and RGB backlighting.",
        features: [
            "\u2022 Hot-swappable linear red mechanical switches",
            "\u2022 18 Dynamic RGB backlit modes",
            "\u2022 Anti-ghosting 61 keys layout",
            "\u2022 Detachable Type-C braided cable"
]
    },
    {
        id: 37,
        name: "Wireless Ergonomic Optical Mouse Silent Click",
        brand: "PowerMax",
        category: "Electronics Computers Mice",
        priceCurrent: "Rp85.000",
        priceOriginal: "Rp120.000",
        discount: "29% Off",
        rating: 4,
        reviews: "(520 Reviews)",
        images: ["Assets/Products/prod_37.jpg", "Assets/Products/prod_37_2.jpg"],
        description: "2.4GHz wireless quiet click mouse with ergonomic contour grip and 1600 DPI optical sensor.",
        features: [
            "\u2022 90% Noise reduction silent click buttons",
            "\u2022 3 Adjustable DPI levels (800/1200/1600)",
            "\u2022 Ergonomic thumb rest contour",
            "\u2022 Auto sleep power saving mode"
]
    },
    {
        id: 38,
        name: "Full HD 1080P Web Cam with Dual Noise-Cancelling Mic",
        brand: "TechTime",
        category: "Electronics Computers Webcams",
        priceCurrent: "Rp175.000",
        priceOriginal: "Rp235.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Products/prod_38.jpg", "Assets/Products/prod_38_2.jpg"],
        description: "Plug and play 1080P HD USB webcam ideal for Zoom meetings, online teaching, and live streaming.",
        features: [
            "\u2022 1080P 30fps HD clear video recording",
            "\u2022 Built-in dual noise reduction microphones",
            "\u2022 Auto light balance correction",
            "\u2022 Universal monitor clip"
]
    },
    {
        id: 39,
        name: "High Speed USB 3.0 Portable External Hard Drive 2TB",
        brand: "PowerMax",
        category: "Electronics Computers External Storage",
        priceCurrent: "Rp750.000",
        priceOriginal: "Rp980.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(430 Reviews)",
        images: ["Assets/Products/prod_39.jpg", "Assets/Products/prod_39_2.jpg"],
        description: "Ultra slim 2TB portable external hard drive with USB 3.0 high-speed data transfer speeds up to 130MB/s.",
        features: [
            "\u2022 Massive 2TB storage capacity",
            "\u2022 USB 3.0 super-speed data transfer",
            "\u2022 Plug & play for Windows, Mac, and consoles",
            "\u2022 Shockproof aluminum metal enclosure"
]
    },
    {
        id: 40,
        name: "Dual Fast Wireless Charging Stand 15W",
        brand: "PowerMax",
        category: "Electronics Mobile & Tablets Fast Chargers",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp195.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(390 Reviews)",
        images: ["Assets/Products/prod_40.jpg", "Assets/Products/prod_40_2.jpg"],
        description: "2-in-1 Qi fast wireless charger stand for phone and wireless earbuds simultaneously.",
        features: [
            "\u2022 Dual 15W fast wireless charging coils",
            "\u2022 Vertical & horizontal phone orientation",
            "\u2022 Over-voltage & temperature protection",
            "\u2022 USB-C fast charge input cable included"
]
    },
    {
        id: 41,
        name: "Portable Waterproof Bluetooth Party Speaker",
        brand: "SoundPro",
        category: "Audio & Entertainment Speakers Bluetooth Speakers",
        priceCurrent: "Rp350.000",
        priceOriginal: "Rp480.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(610 Reviews)",
        images: ["Assets/Products/prod_41.jpg", "Assets/Products/prod_41_2.jpg"],
        description: "Rugged IPX7 waterproof wireless speaker delivering punchy bass, RGB light show, and 18-hour playtime.",
        features: [
            "\u2022 Dual drivers with bass radiator subwoofer",
            "\u2022 Dynamic beat-synced RGB LED lighting",
            "\u2022 IPX7 waterproof housing",
            "\u2022 18 hours music playback"
]
    },
    {
        id: 42,
        name: "Wireless RGB Gaming Headset 7.1 Surround",
        brand: "GamePro",
        category: "Audio & Entertainment Gaming Gaming Headsets",
        priceCurrent: "Rp420.000",
        priceOriginal: "Rp550.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(740 Reviews)",
        images: ["Assets/Products/prod_42.jpg", "Assets/Products/prod_42_2.jpg"],
        description: "Low latency 2.4GHz wireless gaming headset with 7.1 virtual surround sound and detachable mic.",
        features: [
            "\u2022 Ultra low 15ms wireless audio latency",
            "\u2022 7.1 Virtual Surround sound",
            "\u2022 Detachable noise reduction mic",
            "\u2022 Compatible with PC, PS5, Switch"
]
    },
    {
        id: 43,
        name: "Studio Condenser Microphone Kit with Stand",
        brand: "AudioTech",
        category: "Audio & Entertainment Musical Instruments Microphones",
        priceCurrent: "Rp310.000",
        priceOriginal: "Rp420.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(430 Reviews)",
        images: ["Assets/Products/prod_43.jpg", "Assets/Products/prod_43_2.jpg"],
        description: "Professional USB condenser microphone bundle with adjustable boom arm stand and pop filter.",
        features: [
            "\u2022 192kHz/24bit high sampling rate clarity",
            "\u2022 Cardioid polar pattern reduces background noise",
            "\u2022 Plug and play USB connectivity",
            "\u2022 Complete set with boom arm stand"
]
    },
    {
        id: 44,
        name: "Soundbar TV Speaker System with Subwoofer",
        brand: "SoundPro",
        category: "Audio & Entertainment Speakers Soundbars",
        priceCurrent: "Rp650.000",
        priceOriginal: "Rp899.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(520 Reviews)",
        images: ["Assets/Products/prod_44.jpg", "Assets/Products/prod_44_2.jpg"],
        description: "120W home theater soundbar speaker system with wireless subwoofer and Bluetooth 5.0.",
        features: [
            "\u2022 120W peak power for room-shaking audio",
            "\u2022 3D DSP Equalizer modes",
            "\u2022 Optical, HDMI ARC, AUX, & Bluetooth",
            "\u2022 Includes wireless remote control"
]
    },
    {
        id: 45,
        name: "True Wireless Active Noise Cancelling Earbuds",
        brand: "SoundPro",
        category: "Audio & Entertainment Headphones Wireless Earbuds",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(850 Reviews)",
        images: ["Assets/Products/prod_45.jpg", "Assets/Products/prod_45_2.jpg"],
        description: "TWS bluetooth 5.3 earbuds featuring active noise cancelling and IPX5 sweatproof protection.",
        features: [
            "\u2022 ANC Active noise cancellation up to 30dB",
            "\u2022 Bluetooth 5.3 instant auto pairing",
            "\u2022 32 Hours total battery life",
            "\u2022 IPX5 Water and sweat resistant"
]
    },
    {
        id: 46,
        name: "High Fidelity Wooden Desktop Bookshelf Speakers 60W",
        brand: "AudioTech",
        category: "Audio & Entertainment Speakers Studio Monitors",
        priceCurrent: "Rp520.000",
        priceOriginal: "Rp710.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(310 Reviews)",
        images: ["Assets/Products/prod_46.jpg", "Assets/Products/prod_46_2.jpg"],
        description: "Active wooden powered bookshelf speakers with silk dome tweeters and Bluetooth wireless connectivity.",
        features: [
            "\u2022 60W RMS total power output",
            "\u2022 Handcrafted MDF wooden enclosure",
            "\u2022 Silk dome tweeter & 4-inch bass driver",
            "\u2022 Treble & bass equalizer dials"
]
    },
    {
        id: 47,
        name: "Handheld Wireless Karaoke Microphone Speaker",
        brand: "AudioTech",
        category: "Audio & Entertainment Microphones Karaoke",
        priceCurrent: "Rp135.000",
        priceOriginal: "Rp180.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(490 Reviews)",
        images: ["Assets/Products/prod_47.jpg", "Assets/Products/prod_47_2.jpg"],
        description: "All-in-one handheld bluetooth karaoke mic with echo reverb effects and colorful LED light.",
        features: [
            "\u2022 Built-in loud stereo speaker",
            "\u2022 Fun voice transformer voice changer effects",
            "\u2022 Bluetooth & TF card music playback",
            "\u2022 Rechargeable 2000mAh battery"
]
    },
    {
        id: 48,
        name: "USB Audio Interface Sound Card 24-bit/192kHz",
        brand: "AudioTech",
        category: "Audio & Entertainment Musical Instruments Audio Interfaces",
        priceCurrent: "Rp480.000",
        priceOriginal: "Rp640.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(260 Reviews)",
        images: ["Assets/Products/prod_48.jpg", "Assets/Products/prod_48_2.jpg"],
        description: "Professional 2x2 USB audio interface preamp for recording guitars, vocals, and instruments.",
        features: [
            "\u2022 High resolution 24-bit/192kHz studio quality",
            "\u2022 +48V phantom power for condenser mics",
            "\u2022 Zero latency direct monitoring switch",
            "\u2022 Durable metal chassis construction"
]
    },
    {
        id: 49,
        name: "Professional DJ Studio Monitoring Headphones",
        brand: "AudioTech",
        category: "Audio & Entertainment Headphones Over-Ear Headphones",
        priceCurrent: "Rp399.000",
        priceOriginal: "Rp530.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(480 Reviews)",
        images: ["Assets/Products/prod_49.jpg", "Assets/Products/prod_49_2.jpg"],
        description: "Closed-back professional DJ headphones with 50mm neodymium drivers and 90-degree swiveling earcups.",
        features: [
            "\u2022 50mm Neodymium drivers for accurate monitoring",
            "\u2022 90-degree swiveling earcups for single-ear listening",
            "\u2022 Detachable 3m coiled audio cable",
            "\u2022 Soft memory foam leather ear cushions"
]
    },
    {
        id: 50,
        name: "Compact Outdoor Waterproof Bluetooth Mini Speaker",
        brand: "SoundPro",
        category: "Audio & Entertainment Speakers Portable Speakers",
        priceCurrent: "Rp165.000",
        priceOriginal: "Rp220.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(670 Reviews)",
        images: ["Assets/Products/prod_50.jpg", "Assets/Products/prod_50_2.jpg"],
        description: "Pocket-sized 5W bluetooth speaker with integrated carabiner clip for hiking and cycling.",
        features: [
            "\u2022 Crystal clear sound with passive bass radiator",
            "\u2022 IPX6 Water resistant rugged rubberized body",
            "\u2022 Built-in metal carabiner clip",
            "\u2022 10 Hours continuous playback"
]
    },
    {
        id: 51,
        name: "Oversized Premium Cotton Hoodie",
        brand: "UrbanStyle",
        category: "Fashion Men's Clothing Hoodies",
        priceCurrent: "Rp249.000",
        priceOriginal: "Rp329.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(640 Reviews)",
        images: ["Assets/Products/prod_51.jpg", "Assets/Products/prod_51_2.jpg"],
        description: "Cozy heavyweight 100% combed cotton fleece hoodie with relaxed drop shoulder fit.",
        features: [
            "\u2022 380 GSM ultra-soft heavy fleece fabric",
            "\u2022 Double-lined hood with drawstrings",
            "\u2022 Spacious kangaroo pouch pocket",
            "\u2022 Durable double-stitched seams"
]
    },
    {
        id: 52,
        name: "Leather Minimalist Slim RFID Wallet",
        brand: "VogueCraft",
        category: "Fashion Accessories Wallets",
        priceCurrent: "Rp120.000",
        priceOriginal: "Rp165.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(390 Reviews)",
        images: ["Assets/Products/prod_52.jpg", "Assets/Products/prod_52_2.jpg"],
        description: "Genuine full-grain leather slim wallet equipped with RFID blocking protection for cards and cash.",
        features: [
            "\u2022 Handcrafted 100% genuine leather",
            "\u2022 Built-in RFID blocking security shield",
            "\u2022 Holds up to 8 cards plus cash clip",
            "\u2022 Ultra slim profile"
]
    },
    {
        id: 53,
        name: "Mens Casual Canvas Low-Top Sneakers",
        brand: "StreetWear",
        category: "Fashion Footwear Sneakers",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(810 Reviews)",
        images: ["Assets/Products/prod_53.jpg", "Assets/Products/prod_53_2.jpg"],
        description: "Classic unisex low-top canvas sneakers featuring vulcanized rubber outsole for durable grip.",
        features: [
            "\u2022 Breathable double-layer canvas upper",
            "\u2022 Cushioned memory foam insoles",
            "\u2022 Anti-slip rubber outsole",
            "\u2022 Timeless retro urban design"
]
    },
    {
        id: 54,
        name: "Womens Floral Summer Midi Dress",
        brand: "VogueCraft",
        category: "Fashion Women's Clothing Dresses",
        priceCurrent: "Rp215.000",
        priceOriginal: "Rp285.000",
        discount: "24% Off",
        rating: 4,
        reviews: "(470 Reviews)",
        images: ["Assets/Products/prod_54.jpg", "Assets/Products/prod_54_2.jpg"],
        description: "Flowy chiffon floral printed midi dress with adjustable waist tie and ruffled hem line.",
        features: [
            "\u2022 Lightweight chiffon fabric",
            "\u2022 Elegant floral print pattern",
            "\u2022 Flattering A-line silhouette",
            "\u2022 Soft inner lining"
]
    },
    {
        id: 55,
        name: "Men Classic Vintage Denim Trucker Jacket",
        brand: "UrbanStyle",
        category: "Fashion Men's Clothing Jackets",
        priceCurrent: "Rp320.000",
        priceOriginal: "Rp420.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(530 Reviews)",
        images: ["Assets/Products/prod_55.jpg", "Assets/Products/prod_55_2.jpg"],
        description: "Rugged 100% heavy cotton denim trucker jacket with button-front closure and chest flap pockets.",
        features: [
            "\u2022 Premium 12oz heavy cotton denim",
            "\u2022 Vintage washed blue aesthetic",
            "\u2022 Dual chest pockets & side hand pockets",
            "\u2022 Adjustable waist button tabs"
]
    },
    {
        id: 56,
        name: "Womens Oversized Chunky Knit Cardigan",
        brand: "VogueCraft",
        category: "Fashion Women's Clothing Sweaters",
        priceCurrent: "Rp235.000",
        priceOriginal: "Rp310.000",
        discount: "24% Off",
        rating: 4,
        reviews: "(380 Reviews)",
        images: ["Assets/Products/prod_56.jpg", "Assets/Products/prod_56_2.jpg"],
        description: "Cozy open front cable knit long cardigan sweater with front drop pockets.",
        features: [
            "\u2022 Ultra soft acrylic blend knit yarn",
            "\u2022 Relaxed slouchy oversized fit",
            "\u2022 Ribbed cuff and hem details",
            "\u2022 Perfect for autumn layer style"
]
    },
    {
        id: 57,
        name: "Classic Retro Square Sunglasses UV400",
        brand: "StreetWear",
        category: "Fashion Accessories Sunglasses",
        priceCurrent: "Rp115.000",
        priceOriginal: "Rp160.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(460 Reviews)",
        images: ["Assets/Products/prod_57.jpg", "Assets/Products/prod_57_2.jpg"],
        description: "Trendy square thick frame sunglasses with HD polarized UV protection lenses.",
        features: [
            "\u2022 UV400 Protection against harmful rays",
            "\u2022 Lightweight durable acetate frame",
            "\u2022 Scratch-resistant polarized TAC lenses",
            "\u2022 Includes pouch & wiping cloth"
]
    },
    {
        id: 58,
        name: "Men Reversible Genuine Leather Belt",
        brand: "UrbanStyle",
        category: "Fashion Accessories Belts",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp195.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(340 Reviews)",
        images: ["Assets/Products/prod_58.jpg", "Assets/Products/prod_58_2.jpg"],
        description: "Dual-sided black and brown reversible leather belt with rotating metal pin buckle.",
        features: [
            "\u2022 100% Full grain top leather",
            "\u2022 Reversible design (Black / Brown)",
            "\u2022 Rotating alloy metal pin buckle",
            "\u2022 3.5cm standard dress belt width"
]
    },
    {
        id: 59,
        name: "Mens Slim Fit Stretch Chino Trousers",
        brand: "StreetWear",
        category: "Fashion Men's Clothing Pants",
        priceCurrent: "Rp220.000",
        priceOriginal: "Rp290.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(580 Reviews)",
        images: ["Assets/Products/prod_59.jpg", "Assets/Products/prod_59_2.jpg"],
        description: "Versatile cotton stretch chino pants featuring 4-pocket styling and comfortable flexible waist.",
        features: [
            "\u2022 98% Premium cotton & 2% elastane stretch",
            "\u2022 Modern tailored slim fit profile",
            "\u2022 Wrinkle-resistant easy care fabric",
            "\u2022 YKK zipper fly with button closure"
]
    },
    {
        id: 60,
        name: "Womens High-Waist Athletic Running Shorts",
        brand: "StreetWear",
        category: "Fashion Activewear Activewear",
        priceCurrent: "Rp110.000",
        priceOriginal: "Rp150.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(410 Reviews)",
        images: ["Assets/Products/prod_60.jpg", "Assets/Products/prod_60_2.jpg"],
        description: "Breathable double layer workout shorts with built-in spandex liner and zippered phone pocket.",
        features: [
            "\u2022 Moisture-wicking quick dry fabric",
            "\u2022 Wide elastic high waist tummy control band",
            "\u2022 Hidden zipper back pocket for keys & cards",
            "\u2022 Anti-chafing inner compression liner"
]
    },
    {
        id: 61,
        name: "Anti-Theft Laptop Backpack 15.6 Inch",
        brand: "UrbanStyle",
        category: "Bags & Accessories Backpacks Laptop Backpacks",
        priceCurrent: "Rp275.000",
        priceOriginal: "Rp360.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(920 Reviews)",
        images: ["Assets/Products/prod_61.jpg", "Assets/Products/prod_61_2.jpg"],
        description: "Water-resistant travel laptop backpack with TSA combination lock and built-in USB charging port.",
        features: [
            "\u2022 Padded compartment fits up to 15.6\" laptop",
            "\u2022 Integrated TSA anti-theft combination lock",
            "\u2022 External USB charging port",
            "\u2022 Water-repellent Oxford fabric"
]
    },
    {
        id: 62,
        name: "Polarized UV400 Classic Aviator Sunglasses",
        brand: "VogueCraft",
        category: "Bags & Accessories Accessories Sunglasses",
        priceCurrent: "Rp135.000",
        priceOriginal: "Rp189.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(580 Reviews)",
        images: ["Assets/Products/prod_62.jpg", "Assets/Products/prod_62_2.jpg"],
        description: "Premium TAC polarized aviator sunglasses eliminating glare while providing 100% UV400 protection.",
        features: [
            "\u2022 TAC polarized lenses",
            "\u2022 Lightweight alloy metal frame",
            "\u2022 100% UV400 glare protection",
            "\u2022 Includes hardshell case"
]
    },
    {
        id: 63,
        name: "Waterproof Travel Duffel & Sports Gym Bag",
        brand: "ActiveGear",
        category: "Bags & Accessories Travel & Luggage Duffel Bags",
        priceCurrent: "Rp189.000",
        priceOriginal: "Rp250.000",
        discount: "24% Off",
        rating: 4,
        reviews: "(640 Reviews)",
        images: ["Assets/Products/prod_63.jpg", "Assets/Products/prod_63_2.jpg"],
        description: "Multi-compartment gym duffel bag with dedicated shoes pocket and wet/dry separation pouch.",
        features: [
            "\u2022 Ventilated side shoe compartment",
            "\u2022 Waterproof PVC wet clothes pocket",
            "\u2022 Detachable padded shoulder strap",
            "\u2022 Fits airplane carry-on size"
]
    },
    {
        id: 64,
        name: "Womens Canvas Shoulder Tote Bag with Zipper",
        brand: "VogueCraft",
        category: "Bags & Accessories Handbags & Totes Tote Bags",
        priceCurrent: "Rp95.000",
        priceOriginal: "Rp130.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Products/prod_64.jpg", "Assets/Products/prod_64_2.jpg"],
        description: "Spacious heavy-duty cotton canvas tote bag with inner zippered organizer pockets.",
        features: [
            "\u2022 Thick 16oz durable canvas",
            "\u2022 Main compartment with top zipper",
            "\u2022 Dual reinforced handles",
            "\u2022 Fits iPad, books, and bottle"
]
    },
    {
        id: 65,
        name: "Vintage Leather Crossbody Messenger Bag",
        brand: "VogueCraft",
        category: "Bags & Accessories Handbags & Totes Crossbody Bags",
        priceCurrent: "Rp310.000",
        priceOriginal: "Rp420.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(450 Reviews)",
        images: ["Assets/Products/prod_65.jpg", "Assets/Products/prod_65_2.jpg"],
        description: "Handcrafted PU leather shoulder crossbody bag with multiple zipper compartments for 11-inch tablet.",
        features: [
            "\u2022 Water-resistant premium PU leather",
            "\u2022 Dedicated padded tablet sleeve",
            "\u2022 Magnetic flap quick access pocket",
            "\u2022 Adjustable nylon shoulder strap"
]
    },
    {
        id: 66,
        name: "Travel Passport Holder RFID Blocking Wallet",
        brand: "UrbanStyle",
        category: "Bags & Accessories Travel & Luggage Passport Holders",
        priceCurrent: "Rp85.000",
        priceOriginal: "Rp115.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(310 Reviews)",
        images: ["Assets/Products/prod_66.jpg", "Assets/Products/prod_66_2.jpg"],
        description: "Family travel document organizer case with RFID shielding for passports, tickets, and cards.",
        features: [
            "\u2022 RFID Blocking anti-theft fabric",
            "\u2022 Holds 4 passports, 8 cards, cash, and pen",
            "\u2022 Removable wristlet strap",
            "\u2022 Water-repellent nylon material"
]
    },
    {
        id: 67,
        name: "Hardshell Spinner Suitcase 24-Inch Carry-On",
        brand: "ActiveGear",
        category: "Bags & Accessories Travel & Luggage Suitcases",
        priceCurrent: "Rp750.000",
        priceOriginal: "Rp990.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(520 Reviews)",
        images: ["Assets/Products/prod_67.jpg", "Assets/Products/prod_67_2.jpg"],
        description: "Durable ABS hardside spinner luggage with 360-degree silent dual wheels and TSA lock.",
        features: [
            "\u2022 Lightweight scratch-resistant ABS shell",
            "\u2022 8 Silent 360-degree spinner wheels",
            "\u2022 Built-in 3-digit TSA lock",
            "\u2022 Telescoping ergonomic handle"
]
    },
    {
        id: 68,
        name: "Slim Pop-Up RFID Blocking Aluminum Card Holder",
        brand: "UrbanStyle",
        category: "Bags & Accessories Wallets Card Holders",
        priceCurrent: "Rp105.000",
        priceOriginal: "Rp145.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(610 Reviews)",
        images: ["Assets/Products/prod_68.jpg", "Assets/Products/prod_68_2.jpg"],
        description: "Automatic pop-up trigger metal card wallet holding up to 6 credit cards safely.",
        features: [
            "\u2022 One-click instant pop-up mechanism",
            "\u2022 RFID/NFC blocking aluminum case",
            "\u2022 Fits 6 cards + cash pocket",
            "\u2022 Ultra compact palm size"
]
    },
    {
        id: 69,
        name: "Lightweight Foldable Outdoor Travel Daypack 20L",
        brand: "ActiveGear",
        category: "Bags & Accessories Backpacks Travel Backpacks",
        priceCurrent: "Rp115.000",
        priceOriginal: "Rp155.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(410 Reviews)",
        images: ["Assets/Products/prod_69.jpg", "Assets/Products/prod_69_2.jpg"],
        description: "Packable water-resistant daypack folds into small inner zipper pouch for easy travel storage.",
        features: [
            "\u2022 Folds into compact sandwich-size pocket pouch",
            "\u2022 Tear-resistant ripstop nylon fabric",
            "\u2022 Mesh side pockets for water bottles",
            "\u2022 20L Capacity lightweight (only 200g)"
]
    },
    {
        id: 70,
        name: "Waterproof Running Waist Fanny Pack Belt Bag",
        brand: "ActiveGear",
        category: "Bags & Accessories Accessories Pouches",
        priceCurrent: "Rp75.000",
        priceOriginal: "Rp105.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(590 Reviews)",
        images: ["Assets/Products/prod_70.jpg", "Assets/Products/prod_70_2.jpg"],
        description: "Slim bounce-free waist bag with earphone jack hole and reflective night safety strip.",
        features: [
            "\u2022 Water-resistant neoprene material",
            "\u2022 Earphone cable pass-through hole",
            "\u2022 Adjustable elastic belt fits all waist sizes",
            "\u2022 Reflective zipper safety strip"
]
    },
    {
        id: 71,
        name: "Baby Gentle Skincare Shampoo & Body Wash",
        brand: "BabyGentle",
        category: "Baby & Kids Baby Care Baby Skincare",
        priceCurrent: "Rp75.000",
        priceOriginal: "Rp99.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(460 Reviews)",
        images: ["Assets/Products/prod_71.jpg", "Assets/Products/prod_71_2.jpg"],
        description: "Tear-free hypoallergenic 2-in-1 baby shampoo and body wash enriched with natural chamomile.",
        features: [
            "\u2022 Tear-free gentle formula",
            "\u2022 100% Free of parabens & sulfates",
            "\u2022 Organic chamomile & oat extract",
            "\u2022 Maintains natural skin pH balance"
]
    },
    {
        id: 72,
        name: "Educational Wooden Building Blocks Toy Set",
        brand: "KiddoPlay",
        category: "Baby & Kids Toys & Games Educational Toys",
        priceCurrent: "Rp125.000",
        priceOriginal: "Rp169.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(590 Reviews)",
        images: ["Assets/Products/prod_72.jpg", "Assets/Products/prod_72_2.jpg"],
        description: "100-piece natural solid wood geometric block set with non-toxic water-based paints.",
        features: [
            "\u2022 Solid pine wood blocks",
            "\u2022 Non-toxic water-based paint",
            "\u2022 Enhances hand-eye coordination",
            "\u2022 Wooden bucket storage sorter"
]
    },
    {
        id: 73,
        name: "Lightweight Foldable Baby Stroller",
        brand: "BabyGentle",
        category: "Baby & Kids Nursery & Gear Strollers",
        priceCurrent: "Rp680.000",
        priceOriginal: "Rp899.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(310 Reviews)",
        images: ["Assets/Products/prod_73.jpg", "Assets/Products/prod_73_2.jpg"],
        description: "One-hand quick fold compact airplane cabin approved toddler stroller.",
        features: [
            "\u2022 One-second automatic folding",
            "\u2022 Lightweight aluminum frame (5.8kg)",
            "\u2022 Adjustable reclining backrest",
            "\u2022 5-Point safety harness"
]
    },
    {
        id: 74,
        name: "Soft Organic Cotton Baby Onesies 3-Pack",
        brand: "BabyGentle",
        category: "Baby & Kids Kids Fashion Baby Clothing",
        priceCurrent: "Rp110.000",
        priceOriginal: "Rp149.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(420 Reviews)",
        images: ["Assets/Products/prod_74.jpg", "Assets/Products/prod_74_2.jpg"],
        description: "Ultra soft 100% organic cotton short sleeve bodysuit onesies for newborns.",
        features: [
            "\u2022 100% Certified organic cotton",
            "\u2022 Expandable lap shoulder neckline",
            "\u2022 Bottom snap closures",
            "\u2022 Gentle on sensitive skin"
]
    },
    {
        id: 75,
        name: "Anti-Colic Baby Feeding Bottle 250ml 2-Pack",
        brand: "BabyGentle",
        category: "Baby & Kids Baby Care Feeding Bottles",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp190.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Products/prod_75.jpg", "Assets/Products/prod_75_2.jpg"],
        description: "BPA-free natural latch silicone teat feeding bottle with dual anti-colic air vent valve.",
        features: [
            "\u2022 100% BPA, BPS and Phthalate free",
            "\u2022 Soft natural latch-on silicone teat",
            "\u2022 Air flex anti-colic vent system",
            "\u2022 Easy to clean wide neck design"
]
    },
    {
        id: 76,
        name: "Interactive Musical Toddler Learning Activity Toy",
        brand: "KiddoPlay",
        category: "Baby & Kids Toys & Games Educational Toys",
        priceCurrent: "Rp165.000",
        priceOriginal: "Rp220.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(470 Reviews)",
        images: ["Assets/Products/prod_76.jpg", "Assets/Products/prod_76_2.jpg"],
        description: "Multifunctional electronic learning cube with drum pads, piano keys, and shape sorters.",
        features: [
            "\u2022 6 Unique play sides (Piano, Gears, Shape Sorter)",
            "\u2022 Gentle LED light show & nursery rhymes",
            "\u2022 Promotes sensory motor skill development",
            "\u2022 Shatterproof non-toxic ABS plastic"
]
    },
    {
        id: 77,
        name: "Kids Ergonomic Lightweight School Backpack",
        brand: "KiddoPlay",
        category: "Baby & Kids Kids Fashion School Backpacks",
        priceCurrent: "Rp185.000",
        priceOriginal: "Rp240.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(510 Reviews)",
        images: ["Assets/Products/prod_77.jpg", "Assets/Products/prod_77_2.jpg"],
        description: "Water-resistant spine protection school bag with reflective safety strips for young kids.",
        features: [
            "\u2022 Ergonomic S-shaped padded shoulder straps",
            "\u2022 3D Breathable mesh back ventilation",
            "\u2022 360-Degree nighttime safety reflective strips",
            "\u2022 Lightweight & water repellent fabric"
]
    },
    {
        id: 78,
        name: "Waterproof Silicone Baby Bibs 4-Pack",
        brand: "BabyGentle",
        category: "Baby & Kids Baby Care Feeding",
        priceCurrent: "Rp69.000",
        priceOriginal: "Rp95.000",
        discount: "27% Off",
        rating: 4,
        reviews: "(290 Reviews)",
        images: ["Assets/Products/prod_78.jpg", "Assets/Products/prod_78_2.jpg"],
        description: "Soft food grade silicone bibs with deep crumb catcher pouch and adjustable neck buttons.",
        features: [
            "\u2022 100% Food grade soft silicone",
            "\u2022 Deep spill catcher pocket",
            "\u2022 Adjustable 4-button neck strap",
            "\u2022 Easy wipe clean & dishwasher safe"
]
    },
    {
        id: 79,
        name: "Convertible 3-in-1 Baby High Chair & Toddler Seat",
        brand: "BabyGentle",
        category: "Baby & Kids Nursery & Gear High Chairs",
        priceCurrent: "Rp420.000",
        priceOriginal: "Rp580.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(230 Reviews)",
        images: ["Assets/Products/prod_79.jpg", "Assets/Products/prod_79_2.jpg"],
        description: "Growing toddler high chair converting from baby feeding seat to booster chair and desk stool.",
        features: [
            "\u2022 3-in-1 Convertible grow-with-me design",
            "\u2022 Removable double tray top dishwasher safe",
            "\u2022 Stain-resistant PU leather cushion seat",
            "\u2022 Sturdy trapezoid pyramidal beechwood legs"
]
    },
    {
        id: 80,
        name: "Plush Stuffed Animal Soft Teddy Bear Toy 35cm",
        brand: "KiddoPlay",
        category: "Baby & Kids Toys & Games Plush Toys",
        priceCurrent: "Rp85.000",
        priceOriginal: "Rp115.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(640 Reviews)",
        images: ["Assets/Products/prod_80.jpg", "Assets/Products/prod_80_2.jpg"],
        description: "Ultra soft fluffy plush teddy bear toy filled with hypoallergenic PP cotton.",
        features: [
            "\u2022 Premium super soft velvet plush outer",
            "\u2022 100% Hypoallergenic PP cotton stuffing",
            "\u2022 Lock-washer safety eyes & nose",
            "\u2022 Machine washable gentle cycle"
]
    },
    {
        id: 81,
        name: "Non-Slip Thick Eco-Friendly Yoga Mat",
        brand: "ActiveGear",
        category: "Sport & Outdoors Fitness & Gym Yoga Mats",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp199.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(780 Reviews)",
        images: ["Assets/Products/prod_81.jpg", "Assets/Products/prod_81_2.jpg"],
        description: "Extra thick 8mm high density TPE yoga mat with alignment guide lines and carrying strap.",
        features: [
            "\u2022 Non-toxic eco-friendly TPE material",
            "\u2022 Double-sided non-slip textured surface",
            "\u2022 Body alignment line grid",
            "\u2022 Free carrying strap included"
]
    },
    {
        id: 82,
        name: "Adjustable Dumbbell Weight Set 10kg with Case",
        brand: "FitGym",
        category: "Sport & Outdoors Fitness & Gym Dumbbells",
        priceCurrent: "Rp320.000",
        priceOriginal: "Rp430.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(650 Reviews)",
        images: ["Assets/Products/prod_82.jpg", "Assets/Products/prod_82_2.jpg"],
        description: "Electroplated chrome adjustable dumbbell set with connector bar to convert into a barbell.",
        features: [
            "\u2022 Chrome electroplated steel weight plates",
            "\u2022 Non-slip rubber grip handles",
            "\u2022 Connecting rod converts into barbell",
            "\u2022 Heavy-duty storage box"
]
    },
    {
        id: 83,
        name: "Waterproof 4-Person Outdoor Camping Tent",
        brand: "OutdoorPeak",
        category: "Sport & Outdoors Camping & Hiking Tents",
        priceCurrent: "Rp550.000",
        priceOriginal: "Rp750.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(490 Reviews)",
        images: ["Assets/Products/prod_83.jpg", "Assets/Products/prod_83_2.jpg"],
        description: "Automatic hydraulic popup dome tent with UV protection flysheet and mesh windows.",
        features: [
            "\u2022 3-Second instant automatic popup",
            "\u2022 3000mm PU waterproof coating",
            "\u2022 Anti-mosquito mesh doors",
            "\u2022 Fits 3-4 adults comfortably"
]
    },
    {
        id: 84,
        name: "Stainless Steel Vacuum Thermal Water Bottle 1L",
        brand: "ActiveGear",
        category: "Sport & Outdoors Camping & Hiking Water Bottles",
        priceCurrent: "Rp89.000",
        priceOriginal: "Rp125.000",
        discount: "28% Off",
        rating: 4,
        reviews: "(610 Reviews)",
        images: ["Assets/Products/prod_84.jpg", "Assets/Products/prod_84_2.jpg"],
        description: "Double wall vacuum insulated stainless steel canteen keeping drinks cold 24h or hot 12h.",
        features: [
            "\u2022 Double wall 18/8 stainless steel",
            "\u2022 Cold for 24h, Hot for 12h",
            "\u2022 100% Leakproof lid with loop",
            "\u2022 Sweat-free powder coat"
]
    },
    {
        id: 85,
        name: "High Density Muscle Foam Roller for Recovery",
        brand: "FitGym",
        category: "Sport & Outdoors Fitness & Gym Foam Rollers",
        priceCurrent: "Rp95.000",
        priceOriginal: "Rp130.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(430 Reviews)",
        images: ["Assets/Products/prod_85.jpg", "Assets/Products/prod_85_2.jpg"],
        description: "Deep tissue trigger point foam roller for back, leg muscle massage and post-workout recovery.",
        features: [
            "\u2022 High density EVA foam construction",
            "\u2022 Dual grid massage zone surface",
            "\u2022 Supports up to 200kg weight",
            "\u2022 Relieves muscle soreness & tightness"
]
    },
    {
        id: 86,
        name: "Heavy-Duty Resistance Exercise Bands 5-Set",
        brand: "FitGym",
        category: "Sport & Outdoors Fitness & Gym Resistance Bands",
        priceCurrent: "Rp115.000",
        priceOriginal: "Rp155.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(680 Reviews)",
        images: ["Assets/Products/prod_86.jpg", "Assets/Products/prod_86_2.jpg"],
        description: "100% Natural latex resistance workout band set with handles, door anchor, and ankle straps.",
        features: [
            "\u2022 5 Color-coded resistance levels (10lbs to 50lbs)",
            "\u2022 100% Eco-friendly natural latex",
            "\u2022 Includes door anchor & foam handles",
            "\u2022 Compact mesh travel bag"
]
    },
    {
        id: 87,
        name: "Ultra Bright Rechargeable LED Camping Lantern",
        brand: "OutdoorPeak",
        category: "Sport & Outdoors Camping & Hiking Lanterns",
        priceCurrent: "Rp125.000",
        priceOriginal: "Rp170.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(390 Reviews)",
        images: ["Assets/Products/prod_87.jpg", "Assets/Products/prod_87_2.jpg"],
        description: "1000 Lumens 360-degree LED camping light with power bank output for phone emergency charging.",
        features: [
            "\u2022 1000 Lumens 360-degree illumination",
            "\u2022 4 Light modes (Warm, Cool, White, Flash)",
            "\u2022 Built-in 4400mAh power bank charger",
            "\u2022 IPX4 Water resistant"
]
    },
    {
        id: 88,
        name: "Tactical Outdoor Hiking Backpack 40L Waterproof",
        brand: "OutdoorPeak",
        category: "Sport & Outdoors Camping & Hiking Backpacks",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(570 Reviews)",
        images: ["Assets/Products/prod_88.jpg", "Assets/Products/prod_88_2.jpg"],
        description: "Large capacity 40L trekking hiking pack with rain cover and hydration bladder sleeve.",
        features: [
            "\u2022 40L High capacity with MOLLE system",
            "\u2022 Includes waterproof rain cover",
            "\u2022 Hydration port sleeve for water bladder",
            "\u2022 Padded waist belt & chest strap"
]
    },
    {
        id: 89,
        name: "Professional Speed Jump Rope Steel Cable",
        brand: "FitGym",
        category: "Sport & Outdoors Fitness & Gym Jump Ropes",
        priceCurrent: "Rp55.000",
        priceOriginal: "Rp75.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(710 Reviews)",
        images: ["Assets/Products/prod_89.jpg", "Assets/Products/prod_89_2.jpg"],
        description: "360-degree ball bearing tangle-free speed skipping rope for cardio double-unders workout.",
        features: [
            "\u2022 360-Degree smooth ball bearing rotation mechanism",
            "\u2022 Adjustable 3m PVC coated steel wire cable",
            "\u2022 Non-slip aluminum alloy handles",
            "\u2022 Ideal for boxing, MMA, and cross training"
]
    },
    {
        id: 90,
        name: "Lightweight Portable Folding Camping Chair",
        brand: "OutdoorPeak",
        category: "Sport & Outdoors Camping & Hiking Camping Chairs",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp195.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(340 Reviews)",
        images: ["Assets/Products/prod_90.jpg", "Assets/Products/prod_90_2.jpg"],
        description: "Compact folding camp stool chair with side storage pocket and shoulder carry bag.",
        features: [
            "\u2022 Heavy-duty steel frame supports up to 120kg",
            "\u2022 600D Durable Oxford cloth fabric",
            "\u2022 Side storage pocket for phone & drinks",
            "\u2022 Folds compact into included carry bag"
]
    },
    {
        id: 91,
        name: "Premium Car Wash Shampoo & Wax Foam 1L",
        brand: "AutoCare",
        category: "Automotive Car Care Wash & Wax",
        priceCurrent: "Rp68.000",
        priceOriginal: "Rp95.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(730 Reviews)",
        images: ["Assets/Products/prod_91.jpg", "Assets/Products/prod_91_2.jpg"],
        description: "High foaming car wash soap infused with carnauba wax for a streak-free brilliant shine finish.",
        features: [
            "\u2022 pH neutral safe for clear coats & ceramic wraps",
            "\u2022 Rich snow foam lubricates dirt",
            "\u2022 Infused with real Brazilian carnauba wax",
            "\u2022 Concentrated 1000ml bottle"
]
    },
    {
        id: 92,
        name: "HD 1080P Dual Car Dash Cam Camera",
        brand: "TechTime",
        category: "Automotive Auto Electronics Dash Cams",
        priceCurrent: "Rp399.000",
        priceOriginal: "Rp540.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(580 Reviews)",
        images: ["Assets/Products/prod_92.jpg", "Assets/Products/prod_92_2.jpg"],
        description: "Front and rear dual recording dash camera with night vision, G-sensor, and parking monitor.",
        features: [
            "\u2022 Full HD 1080P front & rear camera",
            "\u2022 170-degree ultra wide angle lens",
            "\u2022 G-sensor collision lock & loop recording",
            "\u2022 Night vision WDR technology"
]
    },
    {
        id: 93,
        name: "Universal All-Weather Rubber Car Floor Mats 4-Piece",
        brand: "AutoCare",
        category: "Automotive Interior Accessories Floor Mats",
        priceCurrent: "Rp185.000",
        priceOriginal: "Rp249.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(410 Reviews)",
        images: ["Assets/Products/prod_93.jpg", "Assets/Products/prod_93_2.jpg"],
        description: "Heavy-duty trimmable waterproof rubber floor mats protecting vehicle carpet from mud and spills.",
        features: [
            "\u2022 Odorless heavy-duty flexible rubber",
            "\u2022 Deep dish channels trap water and mud",
            "\u2022 Customizable trim lines fit sedans & SUVs",
            "\u2022 Anti-slip nibbed backing"
]
    },
    {
        id: 94,
        name: "High Pressure Car Washer Snow Foam Lance Gun",
        brand: "AutoCare",
        category: "Automotive Car Care Wash & Wax",
        priceCurrent: "Rp149.000",
        priceOriginal: "Rp199.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(520 Reviews)",
        images: ["Assets/Products/prod_94.jpg", "Assets/Products/prod_94_2.jpg"],
        description: "Adjustable brass nozzle foam cannon bottle attachment for pressure washers.",
        features: [
            "\u2022 Solid brass core with heavy duty bottle",
            "\u2022 Adjustable spray fan & foam knob",
            "\u2022 1/4 inch quick disconnect fitting",
            "\u2022 Creates thick dense foam blanket"
]
    },
    {
        id: 95,
        name: "Ultra Absorbent Microfiber Car Drying Towels 4-Pack",
        brand: "AutoCare",
        category: "Automotive Car Care Microfiber Towels",
        priceCurrent: "Rp55.000",
        priceOriginal: "Rp75.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(640 Reviews)",
        images: ["Assets/Products/prod_95.jpg", "Assets/Products/prod_95_2.jpg"],
        description: "800GSM thick plush scratch-free lint-free microfiber detailing towels for car drying.",
        features: [
            "\u2022 800 GSM high density absorbent plush pile",
            "\u2022 Scratch-free silk band edge",
            "\u2022 Absorbs up to 10x its weight in water",
            "\u2022 Machine washable 40x40cm"
]
    },
    {
        id: 96,
        name: "Bluetooth 5.3 FM Transmitter Dual USB Car Charger",
        brand: "TechTime",
        category: "Automotive Auto Electronics Car Chargers",
        priceCurrent: "Rp79.000",
        priceOriginal: "Rp110.000",
        discount: "28% Off",
        rating: 4,
        reviews: "(490 Reviews)",
        images: ["Assets/Products/prod_96.jpg", "Assets/Products/prod_96_2.jpg"],
        description: "Wireless bluetooth in-car FM adapter with hands-free microphone and QC 3.0 fast charging port.",
        features: [
            "\u2022 Bluetooth 5.3 wireless audio streaming",
            "\u2022 Hands-free microphone with noise suppression",
            "\u2022 QC 3.0 + Type-C PD 20W fast charging",
            "\u2022 LED car battery voltage display"
]
    },
    {
        id: 97,
        name: "Portable Digital Cordless Car Tire Inflator 150PSI",
        brand: "AutoCare",
        category: "Automotive Auto Electronics Tire Inflators",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Products/prod_97.jpg", "Assets/Products/prod_97_2.jpg"],
        description: "Rechargeable 6000mAh electric air pump compressor with LCD screen and auto shutoff preset.",
        features: [
            "\u2022 150 PSI maximum pressure fast inflation",
            "\u2022 Preset target pressure & automatic shutoff",
            "\u2022 Bright emergency LED flashlight",
            "\u2022 Includes nozzle adapters for car, bike, balls"
]
    },
    {
        id: 98,
        name: "Emergency 1200A Car Jump Starter Power Pack",
        brand: "PowerMax",
        category: "Automotive Auto Electronics Jump Starters",
        priceCurrent: "Rp450.000",
        priceOriginal: "Rp599.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(310 Reviews)",
        images: ["Assets/Products/prod_98.jpg", "Assets/Products/prod_98_2.jpg"],
        description: "1200A peak current portable battery jump starter for 6.0L gas and 4.0L diesel engines.",
        features: [
            "\u2022 1200A Peak current starts 12V dead batteries in seconds",
            "\u2022 Heavy-duty jumper clamps with smart protection",
            "\u2022 Built-in 12,000mAh power bank & LED flashlight",
            "\u2022 Compact shockproof storage case"
]
    },
    {
        id: 99,
        name: "Car Leather Interior Cleaner & Conditioner Spray 500ml",
        brand: "AutoCare",
        category: "Automotive Car Care Interior Cleaners",
        priceCurrent: "Rp78.000",
        priceOriginal: "Rp105.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(420 Reviews)",
        images: ["Assets/Products/prod_99.jpg", "Assets/Products/prod_99_2.jpg"],
        description: "Premium 2-in-1 leather cleaner and restorer protectant against UV cracking and fading.",
        features: [
            "\u2022 Cleans dirt, oil, and grime from leather seats",
            "\u2022 Enriched with natural conditioning oils",
            "\u2022 UV Blockers prevent cracking & fading",
            "\u2022 Non-greasy natural satin finish"
]
    },
    {
        id: 100,
        name: "Universal Magnetic Air Vent Car Phone Mount Holder",
        brand: "TechTime",
        category: "Automotive Interior Accessories Phone Mounts",
        priceCurrent: "Rp49.000",
        priceOriginal: "Rp75.000",
        discount: "34% Off",
        rating: 5,
        reviews: "(860 Reviews)",
        images: ["Assets/Products/prod_100.jpg", "Assets/Products/prod_100_2.jpg"],
        description: "Powerful N52 neodymium magnet car phone holder fitting all smartphone models firmly.",
        features: [
            "\u2022 6 Powerful N52 neodymium magnets hold phone firmly",
            "\u2022 360-Degree rotating metal ball joint angle",
            "\u2022 Anti-scratch rubber air vent clip claw",
            "\u2022 One-hand instant magnetic attachment"
]
    }
];


/* ---------- Utility: HTML Escaping (XSS Prevention) ---------- */
function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/* ---------- Utility: Quantity Helper (1 - 99 Clamping) ---------- */
const MIN_QTY = 1;
const MAX_QTY = 99;

function clampQty(val) {
    const parsed = parseInt(val, 10);
    if (isNaN(parsed) || !Number.isSafeInteger(parsed) || parsed < MIN_QTY) {
        return MIN_QTY;
    }
    if (parsed > MAX_QTY) {
        return MAX_QTY;
    }
    return parsed;
}

/* ---------- Utility: Safe Image Path Helper ---------- */
function sanitizeImgPath(path) {
    if (!path || typeof path !== 'string') return 'Assets/Products/prod_1.jpg';
    const clean = path.trim();
    if (clean.startsWith('Assets/') || clean.startsWith('https://') || clean.startsWith('data:image/')) {
        return escapeHTML(clean);
    }
    return 'Assets/Products/prod_1.jpg';
}

/* ---------- Utility: Toast Notification ---------- */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    const safeMsg = escapeHTML(message);
    const icon = type === 'error' ? 'alert-circle' : 'check-circle';
    toast.innerHTML = `<i data-lucide="${icon}" width="20" height="20" stroke-width="2.5"></i> <span>${safeMsg}</span>`;
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
    const clean = String(priceStr).replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
}

function formatPrice(num) {
    return 'Rp' + (num || 0).toLocaleString('id-ID');
}

/* ---------- Cart Logic (Single Source of Truth) ---------- */
let cartItems = [];
try {
    const raw = JSON.parse(localStorage.getItem('shopease_cart_items') || '[]');
    if (Array.isArray(raw)) {
        cartItems = raw.map(item => {
            if (typeof item === 'number') return { id: item, qty: 1 };
            if (typeof item === 'object' && item && item.id) {
                const id = Number(item.id);
                const qty = clampQty(item.qty);
                return id ? { id, qty } : null;
            }
            if (typeof item === 'string') {
                const found = productsDB.find(p => p.name.toLowerCase() === item.toLowerCase());
                return found ? { id: found.id, qty: 1 } : null;
            }
            if (typeof item === 'object' && item && item.name) {
                const found = productsDB.find(p => p.name.toLowerCase() === item.name.toLowerCase());
                const qty = clampQty(item.qty);
                return found ? { id: found.id, qty } : null;
            }
            return null;
        }).filter(Boolean);
    }
} catch (e) {
    cartItems = [];
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        let count = cartItems.reduce((sum, item) => sum + clampQty(item.qty), 0);
        badge.textContent = count > 99 ? '99+' : count;
    }
}

function renderCartSidebar() {
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotalPrice');
    if (!container) return;

    if (cartItems.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-msg" style="text-align:center; padding: 40px 20px;">
                <i data-lucide="shopping-cart" width="48" height="48" style="opacity: 0.4; margin-bottom: 12px;"></i>
                <p style="color: var(--text-muted); font-size: 15px;">Your cart is empty.</p>
                <a href="shop.html" class="btn-hero btn-navy" style="font-size: 13px; padding: 8px 18px; margin-top: 14px; display: inline-block; border-radius: 20px; text-decoration: none;">Explore Shop</a>
            </div>
        `;
        if (totalEl) totalEl.textContent = 'Rp0';
        if (window.lucide) lucide.createIcons();
        return;
    }

    let grandTotal = 0;
    let html = '';

    cartItems.forEach((item, idx) => {
        const p = productsDB.find(prod => prod.id === item.id) || {
            id: item.id,
            name: `Product #${item.id}`,
            priceCurrent: 'Rp0',
            images: ['Assets/Products/prod_1.jpg']
        };

        const qty = clampQty(item.qty);
        const unitPrice = parsePrice(p.priceCurrent);
        const itemTotal = unitPrice * qty;
        grandTotal += itemTotal;

        const img = p.images && p.images[0] ? sanitizeImgPath(p.images[0]) : 'Assets/Products/prod_1.jpg';
        const safeName = escapeHTML(p.name);
        const safePrice = escapeHTML(p.priceCurrent);

        html += `
            <div class="cart-item">
                <img src="${img}" alt="${safeName}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-name" title="${safeName}">${safeName}</div>
                    <div class="cart-item-price">${safePrice}</div>
                    <div class="cart-item-qty">
                        <button data-action="change-qty" data-index="${idx}" data-delta="-1" aria-label="Decrease quantity">-</button>
                        <span>${qty}</span>
                        <button data-action="change-qty" data-index="${idx}" data-delta="1" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" data-action="remove-cart-item" data-index="${idx}" aria-label="Remove item">
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
        let currentQty = cartItems[index].qty || 1;
        let newQty = currentQty + delta;
        if (newQty <= 0) {
            cartItems.splice(index, 1);
        } else {
            cartItems[index].qty = clampQty(newQty);
        }
        localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
        updateCartBadge();
        renderCartSidebar();
        updateAddToCartButtonsState();
    }
}

function removeCartItemAt(index) {
    if (index >= 0 && index < cartItems.length) {
        const item = cartItems[index];
        const p = productsDB.find(prod => prod.id === item.id);
        const name = p ? p.name : `Product #${item.id}`;
        cartItems.splice(index, 1);
        localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
        showToast(`"${name}" removed from cart.`);
        updateCartBadge();
        renderCartSidebar();
        updateAddToCartButtonsState();
    }
}

function toggleCartItem(productIdOrName, btn, qty = 1) {
    let pid = null;
    if (typeof productIdOrName === 'number') {
        pid = productIdOrName;
    } else {
        const found = productsDB.find(p => p.name.toLowerCase() === String(productIdOrName).toLowerCase() || String(p.id) === String(productIdOrName));
        if (found) pid = found.id;
    }

    if (!pid) return;

    const safeQty = clampQty(qty);
    const p = productsDB.find(prod => prod.id === pid);
    const productName = p ? p.name : `Product #${pid}`;

    const index = cartItems.findIndex(item => item.id === pid);

    if (index > -1) {
        cartItems.splice(index, 1);
        showToast(`"${productName}" removed from cart.`);
    } else {
        cartItems.push({ id: pid, qty: safeQty });
        showToast(`${safeQty}x "${productName}" added to cart! 🎉`);
    }

    localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
    updateCartBadge();
    renderCartSidebar();
    updateAddToCartButtonsState();
}

function updateAddToCartButtonsState() {
    document.querySelectorAll('.js-add-to-cart, [data-action="add-to-cart"]').forEach(btn => {
        const rawVal = btn.dataset.product || btn.dataset.id || '1';
        let pid = parseInt(rawVal, 10);
        if (isNaN(pid)) {
            const found = productsDB.find(p => p.name.toLowerCase() === rawVal.toLowerCase());
            if (found) pid = found.id;
        }

        if (pid) {
            const isInCart = cartItems.some(item => item.id === pid);
            if (isInCart) {
                btn.classList.add('in-cart');
                btn.innerHTML = `Remove <i data-lucide="x" width="16" height="16" stroke-width="2.5"></i>`;
            } else {
                btn.classList.remove('in-cart');
                btn.innerHTML = `Add to cart <i data-lucide="plus" width="16" height="16" stroke-width="2.5"></i>`;
            }
        }
    });
    if (window.lucide) lucide.createIcons();
}

/* ---------- Wishlist Manager ---------- */
let wishlistItems = [];
try {
    wishlistItems = JSON.parse(localStorage.getItem('shopease_wishlist_items') || '[]').map(Number).filter(Boolean);
} catch (e) {
    wishlistItems = [];
}

function toggleWishlist(productId, btn) {
    const pid = Number(productId);
    if (!pid) return;

    const p = productsDB.find(prod => prod.id === pid);
    const name = p ? p.name : `Product #${pid}`;
    const index = wishlistItems.indexOf(pid);

    if (index > -1) {
        wishlistItems.splice(index, 1);
        showToast(`Removed "${name}" from Wishlist.`);
    } else {
        wishlistItems.push(pid);
        showToast(`Saved "${name}" to Wishlist! ❤️`);
    }

    localStorage.setItem('shopease_wishlist_items', JSON.stringify(wishlistItems));
    updateWishlistBadges();
}

function updateWishlistBadges() {
    // Update badge numbers
    document.querySelectorAll('#wishlistBadge, .wishlist-badge').forEach(badge => {
        badge.textContent = wishlistItems.length > 99 ? '99+' : wishlistItems.length;
    });

    // Update heart icons state
    document.querySelectorAll('[data-action="toggle-wishlist"], .wishlist-btn-circle').forEach(btn => {
        const rawId = btn.dataset.id || btn.closest('.product-card')?.dataset.id;
        const pid = Number(rawId);
        if (pid && wishlistItems.includes(pid)) {
            btn.classList.add('active');
            btn.setAttribute('aria-label', 'Remove from Wishlist');
        } else if (pid) {
            btn.classList.remove('active');
            btn.setAttribute('aria-label', 'Add to Wishlist');
        }
    });
}

/* ---------- Authentication Modal Manager ---------- */
function initAuthModal() {
    const authModal = document.getElementById('authModal');
    if (!authModal) return;

    const loginTab = document.getElementById('loginTabBtn');
    const regTab = document.getElementById('registerTabBtn');
    const loginForm = document.getElementById('loginForm');
    const regForm = document.getElementById('registerForm');

    function switchTab(mode) {
        if (mode === 'login') {
            if (loginTab) loginTab.classList.add('active');
            if (regTab) regTab.classList.remove('active');
            if (loginForm) loginForm.style.display = 'block';
            if (regForm) regForm.style.display = 'none';
        } else {
            if (regTab) regTab.classList.add('active');
            if (loginTab) loginTab.classList.remove('active');
            if (regForm) regForm.style.display = 'block';
            if (loginForm) loginForm.style.display = 'none';
        }
    }

    if (loginTab) loginTab.addEventListener('click', () => switchTab('login'));
    if (regTab) regTab.addEventListener('click', () => switchTab('register'));

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail')?.value.trim();
            const pass = document.getElementById('loginPassword')?.value;
            if (!email || !pass) {
                showToast('Please enter both email and password.', 'error');
                return;
            }
            const userName = email.split('@')[0];
            localStorage.setItem('shopease_user', JSON.stringify({ email, name: userName }));
            showToast(`Welcome back, ${userName}! 👋`);
            closeAuthModal();
            updateUserUI();
        });
    }

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('regName')?.value.trim();
            const email = document.getElementById('regEmail')?.value.trim();
            const pass = document.getElementById('regPassword')?.value;
            if (!name || !email || !pass) {
                showToast('Please fill in all registration fields.', 'error');
                return;
            }
            localStorage.setItem('shopease_user', JSON.stringify({ email, name }));
            showToast(`Account created successfully! Welcome, ${name}! 🎉`);
            closeAuthModal();
            updateUserUI();
        });
    }
}

function openAuthModal() {
    const modal = document.getElementById('authModal');
    const overlay = document.getElementById('overlay');
    if (modal) modal.style.display = 'flex';
    if (overlay) overlay.classList.add('active');
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    const overlay = document.getElementById('overlay');
    if (modal) modal.style.display = 'none';
    if (overlay) overlay.classList.remove('active');
}

function updateUserUI() {
    const user = JSON.parse(localStorage.getItem('shopease_user') || 'null');
    const loginBtns = document.querySelectorAll('#loginBtn, .user-login-btn');
    loginBtns.forEach(btn => {
        if (user && user.name) {
            btn.innerHTML = `<i data-lucide="user-check" width="18" height="18"></i> <span>Hi, ${escapeHTML(user.name)}</span>`;
            btn.title = "Click to Logout";
        } else {
            btn.innerHTML = `<i data-lucide="user" width="18" height="18"></i> <span>Login</span>`;
            btn.title = "Login or Register";
        }
    });
    if (window.lucide) lucide.createIcons();
}

/* ---------- Privacy Policy & Terms Modal ---------- */
function openPolicyModal(type = 'privacy') {
    const modal = document.getElementById('policyModal');
    const titleEl = document.getElementById('policyTitle');
    const bodyEl = document.getElementById('policyBody');
    const overlay = document.getElementById('overlay');

    if (!modal) return;

    if (type === 'terms') {
        if (titleEl) titleEl.textContent = 'Terms of Service';
        if (bodyEl) {
            bodyEl.innerHTML = `
                <p>Welcome to ShopEase! By shopping on our platform, you agree to the following terms:</p>
                <ul style="margin-left: 20px; line-height: 1.8;">
                    <li><strong>Product Authenticity:</strong> All items displayed are 100% genuine and sourced directly from certified brands.</li>
                    <li><strong>Cart & Pricing:</strong> Prices listed in Indonesian Rupiah (Rp) include standard retail taxes.</li>
                    <li><strong>Returns & Refunds:</strong> Unopened items can be returned within 14 days of purchase.</li>
                    <li><strong>Customer Security:</strong> We prioritize safe shopping. Your data is protected under robust encryption protocols.</li>
                </ul>
            `;
        }
    } else {
        if (titleEl) titleEl.textContent = 'Privacy Policy';
        if (bodyEl) {
            bodyEl.innerHTML = `
                <p>At ShopEase, protecting your personal privacy is our top priority:</p>
                <ul style="margin-left: 20px; line-height: 1.8;">
                    <li><strong>Data Collection:</strong> We only collect necessary shopping preferences to enhance your session.</li>
                    <li><strong>Storage:</strong> Your cart and wishlist preferences are stored locally on your device (localStorage).</li>
                    <li><strong>No Third-Party Sharing:</strong> We never sell or transfer your private personal information to third parties.</li>
                    <li><strong>Security:</strong> All user interactions follow strict browser Content Security Policies (CSP).</li>
                </ul>
            `;
        }
    }

    modal.style.display = 'flex';
    if (overlay) overlay.classList.add('active');
}

function closePolicyModal() {
    const modal = document.getElementById('policyModal');
    const overlay = document.getElementById('overlay');
    if (modal) modal.style.display = 'none';
    if (overlay) overlay.classList.remove('active');
}

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
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    showToast(`Subscribed with ${email}! Welcome to ShopEase. 🎉`);
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

/* ---------- Product Detail Page & 404 Fallback View ---------- */
(function renderProductDetail() {
    if (!window.location.pathname.includes('product-detail.html')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const rawId = urlParams.get('id');
    const productId = parseInt(rawId, 10);
    const detailWrapper = document.querySelector('.product-detail-wrapper') || document.querySelector('.product-detail-section');
    const notFoundEl = document.getElementById('productNotFound');

    const product = productsDB.find(p => p.id === productId);

    if (!product) {
        // Show 404 Fallback View if ID is invalid or not found
        if (detailWrapper) detailWrapper.style.display = 'none';
        if (notFoundEl) {
            notFoundEl.style.display = 'block';
        } else if (detailWrapper) {
            const fallbackDiv = document.createElement('div');
            fallbackDiv.className = 'product-not-found';
            fallbackDiv.style.cssText = 'text-align: center; padding: 80px 20px; margin: 40px auto; max-width: 600px; background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);';
            fallbackDiv.innerHTML = `
                <i data-lucide="package-x" width="64" height="64" style="color: var(--navy); opacity: 0.5; margin-bottom: 16px;"></i>
                <h2 style="font-size: 24px; color: var(--navy); margin-bottom: 8px;">Product Not Found</h2>
                <p style="color: var(--text-muted); margin-bottom: 24px;">The product you are looking for does not exist or has been removed.</p>
                <a href="shop.html" class="btn-hero btn-navy" style="text-decoration: none; padding: 10px 24px; border-radius: 25px; display: inline-block;">Return to Shop Catalog</a>
            `;
            detailWrapper.parentNode.insertBefore(fallbackDiv, detailWrapper);
        }
        if (window.lucide) lucide.createIcons();
        return;
    }

    if (notFoundEl) notFoundEl.style.display = 'none';
    if (detailWrapper) detailWrapper.style.display = 'block';

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

    if (brandEl) brandEl.textContent = product.brand;
    if (titleEl) titleEl.textContent = product.name;
    if (priceEl) priceEl.textContent = product.priceCurrent;
    if (oldPriceEl) oldPriceEl.textContent = product.priceOriginal;
    if (discountEl) discountEl.textContent = product.discount;
    if (reviewEl) reviewEl.textContent = product.reviews;
    if (descEl) descEl.textContent = product.description;

    if (featuresEl && product.features) {
        featuresEl.innerHTML = product.features.map(f => `<li>${escapeHTML(f)}</li>`).join('');
    }

    const tabReviewsEl = document.getElementById('detailTabReviews');
    if (tabReviewsEl) {
        const reviewCountMatch = product.reviews.match(/\d+/);
        const reviewCount = reviewCountMatch ? reviewCountMatch[0] : '0';
        tabReviewsEl.textContent = `Reviews (${reviewCount})`;
        if (reviewCountText) {
            reviewCountText.textContent = `Based on ${reviewCount} customer reviews`;
        }
    }

    if (btnEl) {
        btnEl.dataset.id = product.id;
        btnEl.dataset.product = product.name;
    }

    const isInCart = cartItems.some(item => item.id === product.id);
    if (btnEl) {
        if (isInCart) {
            btnEl.classList.add('in-cart');
            btnEl.innerHTML = `Remove <i data-lucide="x" width="20" height="20"></i>`;
        } else {
            btnEl.classList.remove('in-cart');
            btnEl.innerHTML = `<i data-lucide="shopping-cart" width="20" height="20"></i> Add to cart`;
        }
    }

    const mainImg = document.getElementById('detailMainImg');
    if (mainImg && product.images.length > 0) {
        mainImg.src = product.images[0];
        mainImg.alt = escapeHTML(product.name);
    }
    const thumbnails = document.querySelectorAll('.thumb-img');
    thumbnails.forEach((thumb, i) => {
        const wrap = thumb.closest('.thumb-img-wrap');
        if (product.images[i]) {
            thumb.src = product.images[i];
            if (wrap) wrap.style.display = 'block';
        } else if (wrap && i > 0) {
            wrap.style.display = 'none';
        }
    });

    // Quantity Input logic
    const qtyInput = document.getElementById('qtyInput');
    const qtyMinusBtn = document.getElementById('qtyMinusBtn');
    const qtyPlusBtn = document.getElementById('qtyPlusBtn');

    if (qtyInput && qtyMinusBtn && qtyPlusBtn) {
        qtyMinusBtn.onclick = () => {
            let val = parseInt(qtyInput.value, 10) || 1;
            if (val > 1) qtyInput.value = val - 1;
        };

        qtyPlusBtn.onclick = () => {
            let val = parseInt(qtyInput.value, 10) || 0;
            qtyInput.value = val + 1;
        };
    }

    if (window.lucide) {
        lucide.createIcons();
    }
})();

/* =========================================
   DYNAMIC MEGA MENU CATEGORIES
   ========================================= */
const megaMenuData = {
    "food-beverage": {
        title: "Food & Beverage",
        columns: [
            { title: "Beverages", items: ["Coffee & Tea", "Fresh Juices", "Soft Drinks", "Mineral Water", "Energy Drinks"] },
            { title: "Snacks & Sweets", items: ["Biscuits & Cookies", "Chocolates", "Potato Chips", "Dried Fruits", "Nuts & Seeds"] },
            { title: "Pantry & Cooking", items: ["Cooking Oil", "Spices & Seasoning", "Pasta & Noodles", "Canned Food", "Sauces"] },
            { title: "Fresh & Dairy", items: ["Milk & Butter", "Cheese & Yogurt", "Fresh Bakery", "Breakfast Cereal"] }
        ]
    },
    "beauty-personal-care": {
        title: "Beauty & Personal Care",
        columns: [
            { title: "Skin Care", items: ["Moisturizers", "Serums", "Sunscreen", "Toners", "Face Wash", "Eye Cream"] },
            { title: "Makeup", items: ["Foundation", "Lipstick", "Eyeshadow", "Blush & Bronzer", "Mascara", "Primer"] },
            { title: "Hair Care", items: ["Shampoo", "Conditioner", "Hair Mask", "Hair Oil", "Styling Products"] },
            { title: "Body Care", items: ["Body Lotion", "Body Scrub", "Deodorant", "Hand Cream", "Perfume & Fragrance"] },
            { title: "Fragrance", items: ["Women's Perfume", "Men's Cologne", "Body Mist", "Roll-On Perfume", "Gift Sets"] }
        ]
    },
    "home-living": {
        title: "Home & Living",
        columns: [
            { title: "Bed & Bath", items: ["Sheets & Pillowcases", "Bath Towels", "Blankets & Throws", "Bath Mats", "Duvet Covers"] },
            { title: "Decor & Lighting", items: ["Wall Art", "Candles & Diffusers", "Desk Lamps", "Floor Rugs", "Decorative Vases"] },
            { title: "Kitchen & Dining", items: ["Drinkware & Mugs", "Cookware Sets", "Cutlery & Utensils", "Storage Containers"] },
            { title: "Furniture", items: ["Coffee Tables", "Ergonomic Chairs", "Bookshelves", "Storage Racks"] }
        ]
    },
    "electronics": {
        title: "Electronics",
        columns: [
            { title: "Mobile & Tablets", items: ["Smartphones", "Tablets", "Screen Protectors", "Phone Cases", "Power Banks"] },
            { title: "Computers", items: ["Laptops", "Desktop PCs", "Monitors", "Keyboards & Mice", "External Storage"] },
            { title: "Smart Home", items: ["Smart Speakers", "Security Cameras", "Smart Plugs", "Robot Vacuums"] },
            { title: "Cameras & Drones", items: ["Action Cameras", "DSLR Lenses", "Camera Tripods", "Memory Cards"] }
        ]
    },
    "audio-entertainment": {
        title: "Audio & Entertainment",
        columns: [
            { title: "Headphones", items: ["Wireless Earbuds", "Over-Ear Headphones", "Noise-Canceling", "Sports Earphones"] },
            { title: "Speakers", items: ["Bluetooth Speakers", "Soundbars", "Home Theater", "Portable Speakers"] },
            { title: "Gaming", items: ["Gaming Consoles", "Controllers", "Gaming Headsets", "RGB Accessories"] }
        ]
    },
    "fashion": {
        title: "Fashion",
        columns: [
            { title: "Women's Clothing", items: ["Dresses", "Tops & Blouses", "Pants & Jeans", "Jackets & Coats", "Activewear"] },
            { title: "Men's Clothing", items: ["T-Shirts & Polos", "Shirts", "Denim & Jeans", "Hoodies & Sweatshirts", "Blazers"] },
            { title: "Footwear", items: ["Sneakers", "Running Shoes", "Casual Loafers", "Formal Shoes", "Sandals"] },
            { title: "Watches & Jewelry", items: ["Analog Watches", "Smartwatches", "Necklaces", "Rings & Bracelets"] }
        ]
    },
    "bags-accessories": {
        title: "Bags & Accessories",
        columns: [
            { title: "Bags", items: ["Backpacks", "Tote Bags", "Crossbody Bags", "Luggage & Suitcases", "Leather Wallets"] },
            { title: "Accessories", items: ["Sunglasses", "Leather Belts", "Hats & Caps", "Scarves & Gloves", "Keychains"] }
        ]
    },
    "baby-kids": {
        title: "Baby & Kids",
        columns: [
            { title: "Baby Care", items: ["Diapers & Wipes", "Baby Skincare", "Feeding Bottles", "Baby Strollers"] },
            { title: "Toys & Learning", items: ["Educational Toys", "Building Blocks", "Board Games", "Plush Toys"] },
            { title: "Kids Fashion", items: ["Baby Clothing", "Kids Shoes", "School Backpacks"] }
        ]
    },
    "sport-outdoors": {
        title: "Sport & Outdoors",
        columns: [
            { title: "Exercise & Fitness", items: ["Yoga Mats", "Dumbbells", "Resistance Bands", "Jump Ropes"] },
            { title: "Outdoor Gear", items: ["Camping Tents", "Hiking Backpacks", "Water Bottles", "Flashlights"] },
            { title: "Sportswear", items: ["Athletic Shirts", "Compression Shorts", "Running Socks", "Sports Bras"] }
        ]
    },
    "automotive": {
        title: "Automotive",
        columns: [
            { title: "Car Care", items: ["Car Wash & Wax", "Microfiber Towels", "Tire Care", "Air Fresheners"] },
            { title: "Interior Accessories", items: ["Seat Covers", "Floor Mats", "Phone Mounts", "Steering Wheel Covers"] }
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
                <h4 class="mega-col-title">${escapeHTML(col.title)}</h4>
                ${col.items.map(item => `<a href="shop.html?category=${encodeURIComponent(categoryKey)}&search=${encodeURIComponent(item)}">${escapeHTML(item)}</a>`).join('')}
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

/* =========================================
   SHOP FILTERS & 12-ITEM PAGINATION LOGIC
   ========================================= */
(function initShopFilters() {
    const filterInputs = document.querySelectorAll('.filter-cb');
    const productsContainer = document.querySelector('.shop-products-grid') || document.querySelector('.products-section .product-grid');
    const noProductsMsg = document.getElementById('noProductsMessage');
    const searchInput = document.getElementById('searchInput');
    const paginationContainer = document.getElementById('paginationContainer');

    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    const categoryQuery = urlParams.get('category');

    const normalize = str => (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '');

    if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
    }

    const subcategoryToCategoryMap = {
        'coffee & tea': 'Food & Beverage',
        'fresh juices': 'Food & Beverage',
        'soft drinks': 'Food & Beverage',
        'mineral water': 'Food & Beverage',
        'energy drinks': 'Food & Beverage',
        'biscuits & cookies': 'Food & Beverage',
        'chocolates': 'Food & Beverage',
        'potato chips': 'Food & Beverage',
        'dried fruits': 'Food & Beverage',
        'nuts & seeds': 'Food & Beverage',
        'cooking oil': 'Food & Beverage',
        'spices & seasoning': 'Food & Beverage',
        'pasta & noodles': 'Food & Beverage',
        'canned food': 'Food & Beverage',
        'sauces': 'Food & Beverage',
        'milk & butter': 'Food & Beverage',
        'cheese & yogurt': 'Food & Beverage',
        'fresh bakery': 'Food & Beverage',
        'breakfast cereal': 'Food & Beverage',
        'tea & herbal teas': 'Food & Beverage',
        'honey & syrups': 'Food & Beverage',
        'sunscreen': 'Beauty & Personal Care',
        'sunscreen & skincare': 'Beauty & Personal Care',
        'skincare': 'Beauty & Personal Care',
        'moisturizers': 'Beauty & Personal Care',
        'serums': 'Beauty & Personal Care',
        'cleansers face wash': 'Beauty & Personal Care',
        'face wash': 'Beauty & Personal Care',
        'toners': 'Beauty & Personal Care',
        'body lotion': 'Beauty & Personal Care',
        'body care': 'Beauty & Personal Care',
        'makeup': 'Beauty & Personal Care',
        'hair care': 'Beauty & Personal Care',
        'fragrance': 'Beauty & Personal Care',
        "women's perfume": 'Beauty & Personal Care',
        'desk lamps': 'Home & Living',
        'pillows': 'Home & Living',
        'cookware': 'Home & Living',
        'cookware sets': 'Home & Living',
        'blankets': 'Home & Living',
        'candles & diffusers': 'Home & Living',
        'coffee tables': 'Home & Living',
        'food storage': 'Home & Living',
        'wall art & clocks': 'Home & Living',
        'bath towels': 'Home & Living',
        'headphones': 'Electronics',
        'smartphones': 'Electronics',
        'laptops': 'Electronics',
        'action cameras': 'Electronics',
        'smartwatches': 'Electronics',
        'gaming consoles': 'Electronics',
        'power banks': 'Electronics',
        'wireless earbuds': 'Electronics',
        'tablets': 'Electronics',
        'bluetooth speakers': 'Audio & Entertainment',
        'soundbars': 'Audio & Entertainment',
        'over-ear headphones': 'Audio & Entertainment',
        'home theater systems': 'Audio & Entertainment',
        'microphones': 'Audio & Entertainment'
    };

    let targetCategory = null;

    if (categoryQuery) {
        targetCategory = categoryQuery;
    } else if (searchQuery) {
        const cleanSearch = searchQuery.trim().toLowerCase();
        if (subcategoryToCategoryMap[cleanSearch]) {
            targetCategory = subcategoryToCategoryMap[cleanSearch];
        } else if (typeof productsDB !== 'undefined' && Array.isArray(productsDB)) {
            const found = productsDB.find(p => 
                p.name.toLowerCase().includes(cleanSearch) || 
                p.category.toLowerCase().includes(cleanSearch)
            );
            if (found) {
                targetCategory = found.category;
            }
        }
    }

    if (targetCategory) {
        const cleanTarget = normalize(targetCategory);
        filterInputs.forEach(cb => {
            if (cb.dataset.type === 'category') {
                const cleanVal = normalize(cb.value);
                if (cleanVal === cleanTarget || cleanTarget.includes(cleanVal) || cleanVal.includes(cleanTarget)) {
                    cb.checked = true;
                }
            }
        });
    }

    // Function to update Brand filter options visibility:
    // If NO category selected -> Show ALL Brands!
    // If categories ARE selected -> Show ONLY brands in selected categories!
    function updateBrandFilterVisibility() {
        const categoryCbs = Array.from(document.querySelectorAll('.filter-cb[data-type="category"]:checked'));
        const selectedCategories = categoryCbs.map(cb => cb.value);
        const brandCbs = document.querySelectorAll('.filter-cb[data-type="brand"]');

        if (selectedCategories.length === 0) {
            // NO category selected -> Show ALL brand filters
            brandCbs.forEach(cb => {
                const label = cb.closest('.filter-label');
                if (label) label.style.display = 'flex';
            });
            return;
        }

        // Categories selected -> Collect allowed brands
        const allowedBrands = new Set();
        const cleanSelectedCats = selectedCategories.map(c => normalize(c));

        if (typeof productsDB !== 'undefined' && Array.isArray(productsDB)) {
            productsDB.forEach(p => {
                const cleanCat = normalize(p.category);
                const matchesCat = cleanSelectedCats.some(sc => cleanCat.includes(sc) || sc.includes(cleanCat));
                if (matchesCat && p.brand) {
                    allowedBrands.add(normalize(p.brand));
                }
            });
        }

        brandCbs.forEach(cb => {
            const label = cb.closest('.filter-label');
            const cleanBrandVal = normalize(cb.value);
            if (allowedBrands.has(cleanBrandVal)) {
                if (label) label.style.display = 'flex';
            } else {
                cb.checked = false; // uncheck hidden brand
                if (label) label.style.display = 'none';
            }
        });
    }

    let currentPage = 1;
    const ITEMS_PER_PAGE = 12;

    function applyFilters() {
        updateBrandFilterVisibility();

        const selectedCategories = Array.from(document.querySelectorAll('.filter-cb[data-type="category"]:checked')).map(cb => cb.value);
        const selectedBrands = Array.from(document.querySelectorAll('.filter-cb[data-type="brand"]:checked')).map(cb => cb.value);
        const selectedRatings = Array.from(document.querySelectorAll('.filter-cb[data-type="rating"]:checked')).map(cb => cb.value);
        const priceRadio = document.querySelector('.filter-cb[data-type="price"]:checked');
        const selectedPrice = priceRadio ? priceRadio.value : null;
        const currentSearch = searchInput ? searchInput.value.trim() : '';
        const cleanSearch = normalize(currentSearch);

        // Filter products from DB or existing card list
        const allDOMCards = Array.from(document.querySelectorAll('.shop-product'));

        if (allDOMCards.length > 0) {
            let visibleCards = [];

            allDOMCards.forEach(card => {
                const category = card.dataset.category || '';
                const brand = card.dataset.brand || '';
                const rating = card.dataset.rating;
                const price = parseInt(card.dataset.price, 10);
                const productName = card.querySelector('.product-name')?.textContent || '';

                const matchCategory = selectedCategories.length === 0 || selectedCategories.some(c => {
                    const cleanC = normalize(c);
                    const cleanCat = normalize(category);
                    return cleanCat.includes(cleanC) || cleanC.includes(cleanCat);
                });
                const matchBrand = selectedBrands.length === 0 || selectedBrands.some(b => normalize(b) === normalize(brand));
                const matchRating = selectedRatings.length === 0 || selectedRatings.includes(rating);

                let matchPrice = true;
                if (selectedPrice === 'under-100k') {
                    matchPrice = price < 100000;
                } else if (selectedPrice === '100k-200k') {
                    matchPrice = price >= 100000 && price <= 200000;
                } else if (selectedPrice === 'above-200k') {
                    matchPrice = price > 200000;
                }

                const matchSearch = currentSearch === '' || 
                    normalize(productName).includes(cleanSearch) || 
                    normalize(category).includes(cleanSearch) ||
                    normalize(brand).includes(cleanSearch);

                if (matchCategory && matchBrand && matchRating && matchPrice && matchSearch) {
                    visibleCards.push(card);
                } else {
                    card.style.display = 'none';
                }
            });

            // Pagination calculation
            const totalItems = visibleCards.length;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
            if (currentPage > totalPages) currentPage = 1;

            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;

            visibleCards.forEach((card, index) => {
                if (index >= startIndex && index < endIndex) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            if (noProductsMsg) {
                noProductsMsg.style.display = totalItems === 0 ? 'block' : 'none';
                if (totalItems === 0 && currentSearch !== '') {
                    noProductsMsg.textContent = `No products found matching "${currentSearch}".`;
                } else if (totalItems === 0) {
                    noProductsMsg.textContent = 'No products found matching the selected filters.';
                }
            }

            renderPaginationUI(totalPages, currentPage);
        }
    }

    function renderPaginationUI(totalPages, page) {
        if (!paginationContainer) return;
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            paginationContainer.style.display = 'none';
            return;
        }

        paginationContainer.style.display = 'flex';
        let html = '';

        // Previous button
        html += `<button class="page-btn ${page === 1 ? 'disabled' : ''}" data-page="${page - 1}" ${page === 1 ? 'disabled' : ''}>&laquo; Prev</button>`;

        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${i === page ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }

        // Next button
        html += `<button class="page-btn ${page === totalPages ? 'disabled' : ''}" data-page="${page + 1}" ${page === totalPages ? 'disabled' : ''}>Next &raquo;</button>`;

        paginationContainer.innerHTML = html;
    }

    if (paginationContainer) {
        paginationContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.page-btn');
            if (btn && !btn.classList.contains('disabled') && !btn.classList.contains('active')) {
                const targetPage = parseInt(btn.dataset.page, 10);
                if (targetPage) {
                    currentPage = targetPage;
                    applyFilters();
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                }
            }
        });
    }

    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            currentPage = 1;
            applyFilters();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            currentPage = 1;
            applyFilters();
        });
    }

    applyFilters();
})();

/* =========================================
   DEALS PAGE ROLLING COUNTDOWN & FILTERS
   ========================================= */
(function initDealsCountdown() {
    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMins = document.getElementById('cdMins');
    const cdSecs = document.getElementById('cdSecs');
    if (!cdDays && !cdHours) return;

    let targetTime = localStorage.getItem('shopease_deals_target');
    const now = Date.now();

    // Dynamic rolling 7-day timer target
    if (!targetTime || parseInt(targetTime, 10) <= now) {
        targetTime = now + (7 * 24 * 60 * 60 * 1000);
        localStorage.setItem('shopease_deals_target', targetTime.toString());
    } else {
        targetTime = parseInt(targetTime, 10);
    }

    function updateCountdown() {
        const currentTime = Date.now();
        const distance = targetTime - currentTime;

        if (distance <= 0) {
            // Reset to rolling 7 days if expired
            targetTime = Date.now() + (7 * 24 * 60 * 60 * 1000);
            localStorage.setItem('shopease_deals_target', targetTime.toString());
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (cdDays) cdDays.textContent = days.toString().padStart(2, '0');
        if (cdHours) cdHours.textContent = hours.toString().padStart(2, '0');
        if (cdMins) cdMins.textContent = minutes.toString().padStart(2, '0');
        if (cdSecs) cdSecs.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();

(function initDealsFilters() {
    const filterBtns = document.querySelectorAll('.deal-filter-btn');
    const dealCards = document.querySelectorAll('.products-section .product-card');
    const dealSections = document.querySelectorAll('.deals-main .products-section');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const rawFilter = btn.dataset.filter || btn.textContent.trim();
            const filterVal = rawFilter.toLowerCase().replace(/[^a-z0-9]+/g, '-');

            dealCards.forEach(card => {
                const cardType = (card.dataset.dealType || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
                const cardCat = (card.dataset.category || '').toLowerCase();

                if (filterVal === 'all' || filterVal.includes('all')) {
                    card.style.display = 'flex';
                } else {
                    if (cardType === filterVal || cardType.includes(filterVal) || cardCat.includes(filterVal)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });

            dealSections.forEach(sec => {
                const cardsInSection = Array.from(sec.querySelectorAll('.product-card'));
                const visibleInSec = cardsInSection.filter(c => c.style.display !== 'none');
                
                if (filterVal === 'all' || filterVal.includes('all')) {
                    sec.style.display = 'block';
                } else {
                    sec.style.display = visibleInSec.length > 0 ? 'block' : 'none';
                }
            });

            showToast(`Filtered deals by: ${btn.textContent.trim()}`);
        });
    });
})();

/* =========================================
   CENTRAL EVENT DELEGATION & GLOBAL ACTIONS
   ========================================= */
document.addEventListener('click', (e) => {
    // Action trigger buttons
    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
        const action = actionEl.dataset.action;

        if (action === 'open-cart') {
            e.preventDefault();
            openCartSidebar();
            return;
        }

        if (action === 'close-cart') {
            e.preventDefault();
            closeCartSidebar();
            return;
        }

        if (action === 'open-auth') {
            e.preventDefault();
            openAuthModal();
            return;
        }

        if (action === 'close-auth') {
            e.preventDefault();
            closeAuthModal();
            return;
        }

        if (action === 'open-policy') {
            e.preventDefault();
            const type = actionEl.dataset.policy || 'privacy';
            openPolicyModal(type);
            return;
        }

        if (action === 'close-policy') {
            e.preventDefault();
            closePolicyModal();
            return;
        }

        if (action === 'add-to-cart') {
            e.stopPropagation();
            const rawVal = actionEl.dataset.id || actionEl.dataset.product || '1';
            let pid = parseInt(rawVal, 10);
            if (isNaN(pid)) {
                const found = productsDB.find(p => p.name.toLowerCase() === rawVal.toLowerCase());
                if (found) pid = found.id;
            }
            if (pid) {
                let qty = 1;
                const container = actionEl.closest('.product-detail-wrapper') || actionEl.closest('.product-info-detail');
                if (container) {
                    const qtyInput = container.querySelector('#qtyInput') || document.getElementById('qtyInput');
                    if (qtyInput) qty = parseInt(qtyInput.value, 10) || 1;
                }
                toggleCartItem(pid, actionEl, qty);
            }
            return;
        }

        if (action === 'buy-now') {
            e.stopPropagation();
            const rawVal = actionEl.dataset.id || actionEl.dataset.product || '1';
            let pid = parseInt(rawVal, 10);
            if (isNaN(pid)) {
                const found = productsDB.find(p => p.name.toLowerCase() === rawVal.toLowerCase());
                if (found) pid = found.id;
            }
            if (pid) {
                const isInCart = cartItems.some(item => item.id === pid);
                if (!isInCart) {
                    cartItems.push({ id: pid, qty: 1 });
                    localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
                    updateCartBadge();
                }
                openCartSidebar();
                showToast('Proceeding to Cart Checkout... 🛒');
            }
            return;
        }

        if (action === 'toggle-wishlist') {
            e.stopPropagation();
            e.preventDefault();
            const rawVal = actionEl.dataset.id || actionEl.closest('.product-card')?.dataset.id || '1';
            const pid = parseInt(rawVal, 10);
            if (pid) {
                toggleWishlist(pid, actionEl);
            }
            return;
        }

        if (action === 'change-qty') {
            const idx = parseInt(actionEl.dataset.index, 10);
            const delta = parseInt(actionEl.dataset.delta, 10);
            if (!isNaN(idx) && !isNaN(delta)) {
                changeCartQty(idx, delta);
            }
            return;
        }

        if (action === 'remove-cart-item') {
            const idx = parseInt(actionEl.dataset.index, 10);
            if (!isNaN(idx)) {
                removeCartItemAt(idx);
            }
            return;
        }
    }

    // Header Cart Buttons
    if (e.target.closest('#cartBtn, .cart-icon')) {
        e.preventDefault();
        openCartSidebar();
        return;
    }

    // Detail Tab Buttons
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
        return;
    }

    // Detail Thumbnail Images
    const thumbWrap = e.target.closest('.thumb-img-wrap');
    if (thumbWrap) {
        const thumbImg = thumbWrap.querySelector('.thumb-img');
        const mainImg = document.getElementById('detailMainImg');
        if (thumbImg && mainImg) {
            mainImg.src = thumbImg.src;
            document.querySelectorAll('.thumb-img-wrap').forEach(w => w.classList.remove('active'));
            thumbWrap.classList.add('active');
        }
        return;
    }

    // Product Card Navigation Delegation (No inline onclick needed!)
    const card = e.target.closest('.product-card, .shop-product');
    if (card && !e.target.closest('button, a, input, label, [data-action]')) {
        const rawId = card.dataset.id;
        let pid = parseInt(rawId, 10);
        if (!pid) {
            const addBtn = card.querySelector('[data-product], [data-id], .js-add-to-cart');
            if (addBtn) {
                const val = addBtn.dataset.id || addBtn.dataset.product;
                pid = parseInt(val, 10);
                if (isNaN(pid) && val && typeof productsDB !== 'undefined') {
                    const found = productsDB.find(p => p.name.toLowerCase() === val.toLowerCase());
                    if (found) pid = found.id;
                }
            }
        }
        if (pid) {
            window.location.href = `product-detail.html?id=${encodeURIComponent(pid)}`;
            return;
        }
    }
});

/* =========================================
   MOBILE DRAWERS & OVERLAY INTERACTION
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
        closeAuthModal();
        closePolicyModal();
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

    document.getElementById('closeCartBtn')?.addEventListener('click', closeCartSidebar);

    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if (cartItems.length === 0) {
            showToast('Your cart is empty!', 'error');
        } else {
            showToast('Thank you! Your order has been placed successfully. 🎉');
            cartItems = [];
            localStorage.setItem('shopease_cart_items', JSON.stringify(cartItems));
            updateCartBadge();
            renderCartSidebar();
            updateAddToCartButtonsState();
            setTimeout(closeCartSidebar, 1500);
        }
    });

    document.querySelectorAll('#loginBtn, .user-login-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const user = JSON.parse(localStorage.getItem('shopease_user') || 'null');
            if (user && user.name) {
                localStorage.removeItem('shopease_user');
                showToast('You have logged out.');
                updateUserUI();
            } else {
                openAuthModal();
            }
        });
    });
})();

/* ---------- Dynamic Sidebar Filter Counters ---------- */
function updateFilterCounts() {
    // Categories
    document.querySelectorAll('.filter-cb[data-type="category"]').forEach(cb => {
        const catVal = cb.value.toLowerCase();
        const count = productsDB.filter(p => p.category.toLowerCase().includes(catVal)).length;
        const label = cb.closest('.filter-label');
        if (label) {
            const countSpan = label.querySelector('.filter-count');
            if (countSpan) countSpan.textContent = `(${count})`;
        }
    });

    // Brands
    document.querySelectorAll('.filter-cb[data-type="brand"]').forEach(cb => {
        const brandVal = cb.value.toLowerCase();
        const count = productsDB.filter(p => p.brand.toLowerCase() === brandVal).length;
        const label = cb.closest('.filter-label');
        if (label) {
            const countSpan = label.querySelector('.filter-count');
            if (countSpan) countSpan.textContent = `(${count})`;
        }
    });

    // Ratings
    document.querySelectorAll('.filter-cb[data-type="rating"]').forEach(cb => {
        const ratingVal = parseInt(cb.value, 10);
        const count = productsDB.filter(p => p.rating === ratingVal).length;
        const label = cb.closest('.filter-label');
        if (label) {
            const countSpan = label.querySelector('.filter-count');
            if (countSpan) countSpan.textContent = `(${count})`;
        }
    });
}

/* ---------- Init Application ---------- */
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateWishlistBadges();
    initAuthModal();
    updateUserUI();
    updateAddToCartButtonsState();
    if (typeof updateFilterCounts === 'function') updateFilterCounts();
    if (window.lucide) lucide.createIcons();
});


