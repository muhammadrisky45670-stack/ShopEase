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
        images: ["Assets/Coffee.jpg", "Assets/Coffee.jpg"],
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
        images: ["Assets/Product 2.jpg", "Assets/Product 2.jpg"],
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
        images: ["Assets/Product 3.jpg", "Assets/Product 3.jpg"],
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
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
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
        images: ["Assets/Product 5.jpg", "Assets/Product 5.jpg"],
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
        images: ["Assets/Product 6.jpg", "Assets/Product 6.jpg"],
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
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
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
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
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
        name: "Lakm\u00e9 Sun Expert SPF 50 PA+++ Ultramatte Lotion",
        brand: "Lakme",
        category: "Beauty & Personal Care Skin Care Sunscreen",
        priceCurrent: "Rp129.000",
        priceOriginal: "Rp179.000",
        discount: "12% Off",
        rating: 5,
        reviews: "(1250 Reviews)",
        images: ["Assets/Product 1.jpg", "Assets/Product 1 gambar kedua.png"],
        description: "Lakm\u00e9 Sun Expert SPF 50 PA+++ Ultramatte Lotion provides high protection from UVA & UVB rays.",
        features: [
            "\u2022 Provides high protection from UVA & UVB rays",
            "\u2022 Ultramatte finish prevents greasy skin shine",
            "\u2022 Lightweight & quick-absorbing formula",
            "\u2022 Dermatologically tested"
]
    },
    {
        id: 10,
        name: "Ocean Shield Sunscreen SPF 50 PA+++",
        brand: "Ocean Shield",
        category: "Beauty & Personal Care Skin Care Sunscreen",
        priceCurrent: "Rp89.000",
        priceOriginal: "Rp129.000",
        discount: "31% Off",
        rating: 5,
        reviews: "(985 Reviews)",
        images: ["Assets/Product 2.jpg", "Assets/Product 2 gambar kedua.png"],
        description: "Ocean Shield Sunscreen SPF 50 PA+++ is formulated with deep marine minerals to hydrate and shield your skin.",
        features: [
            "\u2022 Marine mineral complex for deep hydration",
            "\u2022 Broad spectrum SPF 50 PA+++ protection",
            "\u2022 Water-resistant for swimming",
            "\u2022 Eco-friendly & reef-safe"
]
    },
    {
        id: 11,
        name: "SUN Protect Cream SPF 50+",
        brand: "SUN",
        category: "Beauty & Personal Care Skin Care Sunscreen",
        priceCurrent: "Rp119.000",
        priceOriginal: "Rp159.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(828 Reviews)",
        images: ["Assets/Product 3.jpg", "Assets/Product 3 gambar kedua.png"],
        description: "SUN Protect Cream SPF 50+ offers comprehensive daily sun defense infused with soothing botanical extracts.",
        features: [
            "\u2022 Soothing botanical extract formula",
            "\u2022 High SPF 50+ UVA/UVB defense",
            "\u2022 Prevents photo-aging",
            "\u2022 Non-comedogenic and gentle"
]
    },
    {
        id: 12,
        name: "TFIT Tone Up Sun Fluid SPF50+ PA++++",
        brand: "TFIT",
        category: "Beauty & Personal Care Skin Care Sunscreen Moisturizers",
        priceCurrent: "Rp149.000",
        priceOriginal: "Rp179.000",
        discount: "16% Off",
        rating: 5,
        reviews: "(721 Reviews)",
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
        description: "TFIT Tone Up Sun Fluid is a lightweight daily sunscreen with SPF50+ PA++++ for a natural tone-up effect.",
        features: [
            "\u2022 Broad spectrum SPF50+ PA++++",
            "\u2022 Instant tone-up for brighter skin",
            "\u2022 Non-greasy quick absorbing formula",
            "\u2022 Suitable for all skin types"
]
    },
    {
        id: 13,
        name: "Biore UV Aqua Rich Watery Essence",
        brand: "Biore",
        category: "Beauty & Personal Care Skin Care Sunscreen Moisturizers",
        priceCurrent: "Rp95.000",
        priceOriginal: "Rp129.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(495 Reviews)",
        images: ["Assets/Product 5.jpg", "Assets/Product 5.jpg"],
        description: "Biore UV Aqua Rich Watery Essence features micro defense technology for a weightless, watery veil.",
        features: [
            "\u2022 Micro Defense formula",
            "\u2022 Infused with Hyaluronic Acid & Royal Jelly",
            "\u2022 Super waterproof up to 80 minutes",
            "\u2022 Ideal primer base"
]
    },
    {
        id: 14,
        name: "TFIT Intensive Repair Serum",
        brand: "TFIT",
        category: "Beauty & Personal Care Skin Care Serums",
        priceCurrent: "Rp210.000",
        priceOriginal: "Rp259.000",
        discount: "18% Off",
        rating: 5,
        reviews: "(828 Reviews)",
        images: ["Assets/Product 6.jpg", "Assets/Product 6.jpg"],
        description: "Concentrated with potent peptides and niacinamide to restore skin barrier health.",
        features: [
            "\u2022 Concentrated peptide complex",
            "\u2022 Niacinamide targets hyperpigmentation",
            "\u2022 Deeply hydrates and plumps skin",
            "\u2022 Fast-absorbing formula"
]
    },
    {
        id: 15,
        name: "Biore Deep Pore Foaming Cleanser",
        brand: "Biore",
        category: "Beauty & Personal Care Skin Care Cleansers Face Wash",
        priceCurrent: "Rp50.000",
        priceOriginal: "Rp79.000",
        discount: "36% Off",
        rating: 3,
        reviews: "(721 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Lifts stubborn dirt, excess oil, and impurities deep within pores without over-drying.",
        features: [
            "\u2022 Rich dense foam penetrates pores",
            "\u2022 Removes excess sebum buildup",
            "\u2022 Leaves skin feeling refreshed",
            "\u2022 Gentle daily formula"
]
    },
    {
        id: 16,
        name: "SUN Refreshing Botanical Toner",
        brand: "SUN",
        category: "Beauty & Personal Care Skin Care Toners",
        priceCurrent: "Rp110.000",
        priceOriginal: "Rp149.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(985 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Balances pH level and preps skin for subsequent moisturizing steps with pure botanical hydrosols.",
        features: [
            "\u2022 Balances natural pH and calms redness",
            "\u2022 Rich in antioxidants and plant extracts",
            "\u2022 Alcohol-free formula",
            "\u2022 Preps skin to absorb serums"
]
    },
    {
        id: 17,
        name: "Minimalist Ceramic Table Lamp",
        brand: "Nordic Light",
        category: "Home & Living Decor & Lighting Desk Lamps",
        priceCurrent: "Rp199.000",
        priceOriginal: "Rp269.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(410 Reviews)",
        images: ["Assets/TableLamp.jpg", "Assets/TableLamp.jpg"],
        description: "Elegant ceramic bedside table lamp with warm ambient LED light perfect for living room or bedroom decor.",
        features: [
            "\u2022 Handcrafted ceramic base with fabric shade",
            "\u2022 Warm 3000K soft eye-care LED lighting",
            "\u2022 Touch control dimmer switch",
            "\u2022 Energy efficient LED"
]
    },
    {
        id: 18,
        name: "Ergonomic Memory Foam Contour Pillow",
        brand: "RestEasy",
        category: "Home & Living Bed & Bath Pillows",
        priceCurrent: "Rp175.000",
        priceOriginal: "Rp239.000",
        discount: "27% Off",
        rating: 4,
        reviews: "(530 Reviews)",
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
        description: "Orthopedic memory foam pillow designed to support neck curve and relieve shoulder pressure during sleep.",
        features: [
            "\u2022 Slow rebound memory foam",
            "\u2022 Breathable bamboo velvet cover",
            "\u2022 Ergonomic contour for back & side sleepers",
            "\u2022 Removable washable zipper cover"
]
    },
    {
        id: 19,
        name: "Stainless Steel Electric Water Kettle 1.8L",
        brand: "TechCook",
        category: "Home & Living Kitchen & Dining Cookware",
        priceCurrent: "Rp220.000",
        priceOriginal: "Rp299.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(670 Reviews)",
        images: ["Assets/Product 5.jpg", "Assets/Product 5.jpg"],
        description: "Fast boiling 1.8 liter stainless steel electric kettle with auto shut-off and boil-dry protection.",
        features: [
            "\u2022 Food grade 304 stainless steel",
            "\u2022 Fast 1500W heating boils in under 5 mins",
            "\u2022 360-degree swivel cordless base",
            "\u2022 Auto shut-off safety protection"
]
    },
    {
        id: 20,
        name: "Non-Stick Ceramic Cookware Frying Pan Set",
        brand: "ChefChoice",
        category: "Home & Living Kitchen & Dining Cookware Sets",
        priceCurrent: "Rp285.000",
        priceOriginal: "Rp379.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(480 Reviews)",
        images: ["Assets/Product 6.jpg", "Assets/Product 6.jpg"],
        description: "Eco-friendly non-stick ceramic skillet pan set suitable for induction, gas, and electric stovetops.",
        features: [
            "\u2022 100% PFOA-free non-stick ceramic coating",
            "\u2022 Induction compatible heavy base",
            "\u2022 Stay-cool ergonomic handle",
            "\u2022 Dishwasher safe"
]
    },
    {
        id: 21,
        name: "Nordic Soft Velvet Throw Blanket 150x200cm",
        brand: "RestEasy",
        category: "Home & Living Bed & Bath Blankets",
        priceCurrent: "Rp139.000",
        priceOriginal: "Rp185.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(360 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Ultra soft fleece velvet throw blanket for sofa, bed, and cozy living room comfort.",
        features: [
            "\u2022 Super soft plush microfiber fleece",
            "\u2022 Lightweight yet warm",
            "\u2022 Anti-pilling and fade resistant",
            "\u2022 Machine washable"
]
    },
    {
        id: 22,
        name: "Aromatherapy Lavender Essential Oil Reed Diffuser 150ml",
        brand: "Nordic Light",
        category: "Home & Living Decor & Lighting Candles & Diffusers",
        priceCurrent: "Rp115.000",
        priceOriginal: "Rp150.000",
        discount: "23% Off",
        rating: 4,
        reviews: "(290 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Long-lasting essential oil reed diffuser releasing relaxing lavender fragrance up to 90 days.",
        features: [
            "\u2022 Pure natural essential oil blend",
            "\u2022 Includes 8 fiber rattan reed sticks",
            "\u2022 Flame-free safe continuous fragrance",
            "\u2022 Elegant amber glass bottle"
]
    },
    {
        id: 23,
        name: "Handcrafted Solid Wood Round Coffee Table",
        brand: "Nordic Light",
        category: "Home & Living Furniture Coffee Tables",
        priceCurrent: "Rp450.000",
        priceOriginal: "Rp620.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(190 Reviews)",
        images: ["Assets/Product 9.jpg", "Assets/Product 9.jpg"],
        description: "Mid-century modern round wooden side table with tripod solid oak legs.",
        features: [
            "\u2022 100% Solid natural oak legs",
            "\u2022 Smooth waterproof matte tabletop finish",
            "\u2022 Quick 5-minute tool-free assembly",
            "\u2022 Compact size for small apartments"
]
    },
    {
        id: 24,
        name: "Vacuum Insulated Stainless Steel Food Flask 800ml",
        brand: "TechCook",
        category: "Home & Living Kitchen & Dining Food Storage",
        priceCurrent: "Rp165.000",
        priceOriginal: "Rp220.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(410 Reviews)",
        images: ["Assets/Product 1.jpg", "Assets/Product 1.jpg"],
        description: "Double wall thermal soup thermo jar keeping meals hot up to 12 hours with folding spoon.",
        features: [
            "\u2022 304 Stainless steel interior",
            "\u2022 Keeps food hot for 12 hours or cold for 24 hours",
            "\u2022 Wide mouth opening for easy cleaning",
            "\u2022 Includes foldable stainless steel spoon"
]
    },
    {
        id: 25,
        name: "Wireless Active Noise-Cancelling Headphones Pro",
        brand: "SoundPro",
        category: "Electronics Audio & Entertainment Headphones",
        priceCurrent: "Rp499.000",
        priceOriginal: "Rp699.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(910 Reviews)",
        images: ["Assets/Headphones.jpg", "Assets/Headphones.jpg"],
        description: "Immersive wireless over-ear headphones with active noise cancellation and up to 40 hours battery life.",
        features: [
            "\u2022 Hybrid active noise cancelling ANC",
            "\u2022 40mm custom audio drivers for deep bass",
            "\u2022 40-hour playback with fast USB-C charge",
            "\u2022 Memory foam earcups"
]
    },
    {
        id: 26,
        name: "Smartwatch Series 7 Waterproof",
        brand: "TechTime",
        category: "Electronics Mobile & Tablets Smartwatches",
        priceCurrent: "Rp389.000",
        priceOriginal: "Rp520.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(780 Reviews)",
        images: ["Assets/Smartwatch.jpg", "Assets/Smartwatch.jpg"],
        description: "Feature-rich smartwatch with heart rate monitoring, sleep tracker, 50+ sports modes, and HD AMOLED display.",
        features: [
            "\u2022 1.85 inch HD full touch screen",
            "\u2022 24/7 Heart Rate & SpO2 Tracker",
            "\u2022 IP68 waterproof rating",
            "\u2022 Long battery life up to 10 days"
]
    },
    {
        id: 27,
        name: "Ultra HD 4K Action Camera Waterproof",
        brand: "GoCam",
        category: "Electronics Cameras & Drones Action Cameras",
        priceCurrent: "Rp599.000",
        priceOriginal: "Rp799.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(340 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Compact 4K 60fps action camera with electronic image stabilization and 30m underwater housing.",
        features: [
            "\u2022 4K Ultra HD video & 20MP photos",
            "\u2022 EIS 6-axis gyro stabilization",
            "\u2022 30m waterproof case",
            "\u2022 Dual color screens"
]
    },
    {
        id: 28,
        name: "Fast Charging 20,000mAh Power Bank",
        brand: "PowerMax",
        category: "Electronics Mobile & Tablets Power Banks",
        priceCurrent: "Rp199.000",
        priceOriginal: "Rp279.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(890 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "High capacity 20,000mAh portable charger with 22.5W fast charging support.",
        features: [
            "\u2022 22.5W Power Delivery PD & QC 3.0",
            "\u2022 Charges 3 devices simultaneously",
            "\u2022 LED digital battery display screen",
            "\u2022 Multi-protect safety defense"
]
    },
    {
        id: 29,
        name: "Portable Mini LED Home Projector 1080P",
        brand: "TechTime",
        category: "Electronics Smart Home Projectors",
        priceCurrent: "Rp620.000",
        priceOriginal: "Rp850.000",
        discount: "27% Off",
        rating: 4,
        reviews: "(270 Reviews)",
        images: ["Assets/Product 1.jpg", "Assets/Product 1.jpg"],
        description: "Compact home cinema projector supporting 1080P Full HD display with built-in speaker.",
        features: [
            "\u2022 Native 720P supports 1080P Full HD",
            "\u2022 4500 Lumens brightness",
            "\u2022 HDMI, USB, and Smartphone screen mirroring",
            "\u2022 Built-in stereo speaker"
]
    },
    {
        id: 30,
        name: "Mechanical RGB Gaming Keyboard Hot-Swappable",
        brand: "GamePro",
        category: "Electronics Computers Keyboards",
        priceCurrent: "Rp345.000",
        priceOriginal: "Rp460.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(610 Reviews)",
        images: ["Assets/Product 2.jpg", "Assets/Product 2.jpg"],
        description: "Compact 60% mechanical gaming keyboard with hot-swappable tactile red switches and RGB backlighting.",
        features: [
            "\u2022 Hot-swappable linear red mechanical switches",
            "\u2022 18 Dynamic RGB backlit modes",
            "\u2022 Anti-ghosting 61 keys layout",
            "\u2022 Detachable Type-C braided cable"
]
    },
    {
        id: 31,
        name: "Wireless Ergonomic Optical Mouse Silent Click",
        brand: "PowerMax",
        category: "Electronics Computers Mice",
        priceCurrent: "Rp85.000",
        priceOriginal: "Rp120.000",
        discount: "29% Off",
        rating: 4,
        reviews: "(520 Reviews)",
        images: ["Assets/Product 3.jpg", "Assets/Product 3.jpg"],
        description: "2.4GHz wireless quiet click mouse with ergonomic contour grip and 1600 DPI adjustable optical sensor.",
        features: [
            "\u2022 90% Noise reduction silent click buttons",
            "\u2022 3 Adjustable DPI levels (800/1200/1600)",
            "\u2022 Ergonomic thumb rest contour",
            "\u2022 Auto sleep power saving mode"
]
    },
    {
        id: 32,
        name: "Full HD 1080P Web Cam with Dual Noise-Cancelling Mic",
        brand: "TechTime",
        category: "Electronics Computers Webcams",
        priceCurrent: "Rp175.000",
        priceOriginal: "Rp235.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
        description: "Plug and play 1080P HD USB webcam ideal for Zoom meetings, online teaching, and live streaming.",
        features: [
            "\u2022 1080P 30fps HD clear video recording",
            "\u2022 Built-in dual noise reduction microphones",
            "\u2022 Auto light balance correction",
            "\u2022 Universal monitor clip & tripod thread"
]
    },
    {
        id: 33,
        name: "Portable Waterproof Bluetooth Party Speaker",
        brand: "SoundPro",
        category: "Audio & Entertainment Speakers Bluetooth Speakers",
        priceCurrent: "Rp350.000",
        priceOriginal: "Rp480.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(610 Reviews)",
        images: ["Assets/Product 1.jpg", "Assets/Product 1.jpg"],
        description: "Rugged IPX7 waterproof wireless speaker delivering punchy bass, RGB light show, and 18-hour playtime.",
        features: [
            "\u2022 Dual drivers with bass radiator subwoofer",
            "\u2022 Dynamic beat-synced RGB LED lighting",
            "\u2022 IPX7 waterproof housing",
            "\u2022 18 hours music playback"
]
    },
    {
        id: 34,
        name: "Wireless RGB Gaming Headset 7.1 Surround",
        brand: "GamePro",
        category: "Audio & Entertainment Gaming Gaming Headsets",
        priceCurrent: "Rp420.000",
        priceOriginal: "Rp550.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(740 Reviews)",
        images: ["Assets/Headphones.jpg", "Assets/Headphones.jpg"],
        description: "Low latency 2.4GHz wireless gaming headset with 7.1 virtual surround sound and detachable mic.",
        features: [
            "\u2022 Ultra low 15ms wireless audio latency",
            "\u2022 7.1 Virtual Surround sound",
            "\u2022 Detachable noise reduction mic",
            "\u2022 Compatible with PC, PS5, Switch"
]
    },
    {
        id: 35,
        name: "Studio Condenser Microphone Kit with Stand",
        brand: "AudioTech",
        category: "Audio & Entertainment Musical Instruments Microphones",
        priceCurrent: "Rp310.000",
        priceOriginal: "Rp420.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(430 Reviews)",
        images: ["Assets/Product 3.jpg", "Assets/Product 3.jpg"],
        description: "Professional USB condenser microphone bundle with adjustable boom arm stand and pop filter.",
        features: [
            "\u2022 192kHz/24bit high sampling rate clarity",
            "\u2022 Cardioid polar pattern reduces background noise",
            "\u2022 Plug and play USB connectivity",
            "\u2022 Complete set with boom arm stand"
]
    },
    {
        id: 36,
        name: "Soundbar TV Speaker System with Subwoofer",
        brand: "SoundPro",
        category: "Audio & Entertainment Speakers Soundbars",
        priceCurrent: "Rp650.000",
        priceOriginal: "Rp899.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(520 Reviews)",
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
        description: "120W home theater soundbar speaker system with wireless subwoofer and Bluetooth 5.0.",
        features: [
            "\u2022 120W peak power for room-shaking audio",
            "\u2022 3D DSP Equalizer modes",
            "\u2022 Optical, HDMI ARC, AUX, & Bluetooth",
            "\u2022 Includes wireless remote control"
]
    },
    {
        id: 37,
        name: "True Wireless Active Noise Cancelling Earbuds",
        brand: "SoundPro",
        category: "Audio & Entertainment Headphones Wireless Earbuds",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(850 Reviews)",
        images: ["Assets/Headphones.jpg", "Assets/Headphones.jpg"],
        description: "TWS bluetooth 5.3 earbuds featuring active noise cancelling and IPX5 sweatproof protection.",
        features: [
            "\u2022 ANC Active noise cancellation up to 30dB",
            "\u2022 Bluetooth 5.3 instant auto pairing",
            "\u2022 32 Hours total battery life with wireless case",
            "\u2022 IPX5 Water and sweat resistant"
]
    },
    {
        id: 38,
        name: "High Fidelity Wooden Desktop Bookshelf Speakers 60W",
        brand: "AudioTech",
        category: "Audio & Entertainment Speakers Studio Monitors",
        priceCurrent: "Rp520.000",
        priceOriginal: "Rp710.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(310 Reviews)",
        images: ["Assets/Product 6.jpg", "Assets/Product 6.jpg"],
        description: "Active wooden powered bookshelf speakers with silk dome tweeters and Bluetooth wireless connectivity.",
        features: [
            "\u2022 60W RMS total power output",
            "\u2022 Handcrafted MDF wooden enclosure",
            "\u2022 Silk dome tweeter & 4-inch bass driver",
            "\u2022 Treble & bass equalizer dials"
]
    },
    {
        id: 39,
        name: "Handheld Wireless Karaoke Microphone Speaker",
        brand: "AudioTech",
        category: "Audio & Entertainment Microphones Karaoke",
        priceCurrent: "Rp135.000",
        priceOriginal: "Rp180.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(490 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "All-in-one handheld bluetooth karaoke mic with echo reverb effects and colorful LED light.",
        features: [
            "\u2022 Built-in loud stereo speaker",
            "\u2022 Fun voice transformer voice changer effects",
            "\u2022 Bluetooth & TF card music playback",
            "\u2022 Rechargeable 2000mAh battery"
]
    },
    {
        id: 40,
        name: "USB Audio Interface Sound Card 24-bit/192kHz",
        brand: "AudioTech",
        category: "Audio & Entertainment Musical Instruments Audio Interfaces",
        priceCurrent: "Rp480.000",
        priceOriginal: "Rp640.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(260 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Professional 2x2 USB audio interface preamp for recording guitars, vocals, and instruments.",
        features: [
            "\u2022 High resolution 24-bit/192kHz studio quality",
            "\u2022 +48V phantom power for condenser mics",
            "\u2022 Zero latency direct monitoring switch",
            "\u2022 Durable metal chassis construction"
]
    },
    {
        id: 41,
        name: "Oversized Premium Cotton Hoodie",
        brand: "UrbanStyle",
        category: "Fashion Men's Clothing Hoodies",
        priceCurrent: "Rp249.000",
        priceOriginal: "Rp329.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(640 Reviews)",
        images: ["Assets/Hoodie.jpg", "Assets/Hoodie.jpg"],
        description: "Cozy heavyweight 100% combed cotton fleece hoodie with relaxed drop shoulder fit.",
        features: [
            "\u2022 380 GSM ultra-soft heavy fleece fabric",
            "\u2022 Double-lined hood with drawstrings",
            "\u2022 Spacious kangaroo pouch pocket",
            "\u2022 Durable double-stitched seams"
]
    },
    {
        id: 42,
        name: "Leather Minimalist Slim RFID Wallet",
        brand: "VogueCraft",
        category: "Fashion Accessories Wallets",
        priceCurrent: "Rp120.000",
        priceOriginal: "Rp165.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(390 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Genuine full-grain leather slim wallet equipped with RFID blocking protection for cards and cash.",
        features: [
            "\u2022 Handcrafted 100% genuine leather",
            "\u2022 Built-in RFID blocking security shield",
            "\u2022 Holds up to 8 cards plus cash clip",
            "\u2022 Ultra slim profile"
]
    },
    {
        id: 43,
        name: "Mens Casual Canvas Low-Top Sneakers",
        brand: "StreetWear",
        category: "Fashion Footwear Sneakers",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(810 Reviews)",
        images: ["Assets/Product 5.jpg", "Assets/Product 5.jpg"],
        description: "Classic unisex low-top canvas sneakers featuring vulcanized rubber outsole for durable grip.",
        features: [
            "\u2022 Breathable double-layer canvas upper",
            "\u2022 Cushioned memory foam insoles",
            "\u2022 Anti-slip rubber outsole",
            "\u2022 Timeless retro urban design"
]
    },
    {
        id: 44,
        name: "Womens Floral Summer Midi Dress",
        brand: "VogueCraft",
        category: "Fashion Women's Clothing Dresses",
        priceCurrent: "Rp215.000",
        priceOriginal: "Rp285.000",
        discount: "24% Off",
        rating: 4,
        reviews: "(470 Reviews)",
        images: ["Assets/Product 6.jpg", "Assets/Product 6.jpg"],
        description: "Flowy chiffon floral printed midi dress with adjustable waist tie and ruffled hem line.",
        features: [
            "\u2022 Lightweight chiffon fabric",
            "\u2022 Elegant floral print pattern",
            "\u2022 Flattering A-line silhouette",
            "\u2022 Soft inner lining"
]
    },
    {
        id: 45,
        name: "Men Classic Vintage Denim Trucker Jacket",
        brand: "UrbanStyle",
        category: "Fashion Men's Clothing Jackets",
        priceCurrent: "Rp320.000",
        priceOriginal: "Rp420.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(530 Reviews)",
        images: ["Assets/Hoodie.jpg", "Assets/Hoodie.jpg"],
        description: "Rugged 100% heavy cotton denim trucker jacket with button-front closure and chest flap pockets.",
        features: [
            "\u2022 Premium 12oz heavy cotton denim",
            "\u2022 Vintage washed blue aesthetic",
            "\u2022 Dual chest pockets & side hand pockets",
            "\u2022 Adjustable waist button tabs"
]
    },
    {
        id: 46,
        name: "Womens Oversized Chunky Knit Cardigan",
        brand: "VogueCraft",
        category: "Fashion Women's Clothing Sweaters",
        priceCurrent: "Rp235.000",
        priceOriginal: "Rp310.000",
        discount: "24% Off",
        rating: 4,
        reviews: "(380 Reviews)",
        images: ["Assets/Hoodie.jpg", "Assets/Hoodie.jpg"],
        description: "Cozy open front cable knit long cardigan sweater with front drop pockets.",
        features: [
            "\u2022 Ultra soft acrylic blend knit yarn",
            "\u2022 Relaxed slouchy oversized fit",
            "\u2022 Ribbed cuff and hem details",
            "\u2022 Perfect for autumn layer style"
]
    },
    {
        id: 47,
        name: "Classic Retro Square Sunglasses UV400",
        brand: "StreetWear",
        category: "Fashion Accessories Sunglasses",
        priceCurrent: "Rp115.000",
        priceOriginal: "Rp160.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(460 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Trendy square thick frame sunglasses with HD polarized UV protection lenses.",
        features: [
            "\u2022 UV400 Protection against harmful rays",
            "\u2022 Lightweight durable acetate frame",
            "\u2022 Scratch-resistant polarized TAC lenses",
            "\u2022 Includes pouch & wiping cloth"
]
    },
    {
        id: 48,
        name: "Men Reversible Genuine Leather Belt",
        brand: "UrbanStyle",
        category: "Fashion Accessories Belts",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp195.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(340 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Dual-sided black and brown reversible leather belt with rotating metal pin buckle.",
        features: [
            "\u2022 100% Full grain top leather",
            "\u2022 Reversible design (Black / Brown)",
            "\u2022 Rotating alloy metal pin buckle",
            "\u2022 3.5cm standard dress belt width"
]
    },
    {
        id: 49,
        name: "Anti-Theft Laptop Backpack 15.6 Inch",
        brand: "UrbanStyle",
        category: "Bags & Accessories Backpacks Laptop Backpacks",
        priceCurrent: "Rp275.000",
        priceOriginal: "Rp360.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(920 Reviews)",
        images: ["Assets/Backpack.jpg", "Assets/Backpack.jpg"],
        description: "Water-resistant travel laptop backpack with TSA combination lock and built-in USB charging port.",
        features: [
            "\u2022 Padded compartment fits up to 15.6\" laptop",
            "\u2022 Integrated TSA anti-theft combination lock",
            "\u2022 External USB charging port",
            "\u2022 Water-repellent Oxford fabric"
]
    },
    {
        id: 50,
        name: "Polarized UV400 Classic Aviator Sunglasses",
        brand: "VogueCraft",
        category: "Bags & Accessories Accessories Sunglasses",
        priceCurrent: "Rp135.000",
        priceOriginal: "Rp189.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(580 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Premium TAC polarized aviator sunglasses eliminating glare while providing 100% UV400 protection.",
        features: [
            "\u2022 TAC polarized lenses",
            "\u2022 Lightweight alloy metal frame",
            "\u2022 100% UV400 glare protection",
            "\u2022 Includes hardshell case"
]
    },
    {
        id: 51,
        name: "Waterproof Travel Duffel & Sports Gym Bag",
        brand: "ActiveGear",
        category: "Bags & Accessories Travel & Luggage Duffel Bags",
        priceCurrent: "Rp189.000",
        priceOriginal: "Rp250.000",
        discount: "24% Off",
        rating: 4,
        reviews: "(640 Reviews)",
        images: ["Assets/Backpack.jpg", "Assets/Backpack.jpg"],
        description: "Multi-compartment gym duffel bag with dedicated shoes pocket and wet/dry separation pouch.",
        features: [
            "\u2022 Ventilated side shoe compartment",
            "\u2022 Waterproof PVC wet clothes pocket",
            "\u2022 Detachable padded shoulder strap",
            "\u2022 Fits airplane carry-on size"
]
    },
    {
        id: 52,
        name: "Womens Canvas Shoulder Tote Bag with Zipper",
        brand: "VogueCraft",
        category: "Bags & Accessories Handbags & Totes Tote Bags",
        priceCurrent: "Rp95.000",
        priceOriginal: "Rp130.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Product 9.jpg", "Assets/Product 9.jpg"],
        description: "Spacious heavy-duty cotton canvas tote bag with inner zippered organizer pockets.",
        features: [
            "\u2022 Thick 16oz durable canvas",
            "\u2022 Main compartment with top zipper",
            "\u2022 Dual reinforced handles",
            "\u2022 Fits iPad, books, and bottle"
]
    },
    {
        id: 53,
        name: "Vintage Leather Crossbody Messenger Bag",
        brand: "VogueCraft",
        category: "Bags & Accessories Handbags & Totes Crossbody Bags",
        priceCurrent: "Rp310.000",
        priceOriginal: "Rp420.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(450 Reviews)",
        images: ["Assets/Backpack.jpg", "Assets/Backpack.jpg"],
        description: "Handcrafted PU leather shoulder crossbody bag with multiple zipper compartments for 11-inch tablet.",
        features: [
            "\u2022 Water-resistant premium PU leather",
            "\u2022 Dedicated padded tablet sleeve",
            "\u2022 Magnetic flap quick access pocket",
            "\u2022 Adjustable nylon shoulder strap"
]
    },
    {
        id: 54,
        name: "Travel Passport Holder RFID Blocking Wallet",
        brand: "UrbanStyle",
        category: "Bags & Accessories Travel & Luggage Passport Holders",
        priceCurrent: "Rp85.000",
        priceOriginal: "Rp115.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(310 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Family travel document organizer case with RFID shielding for passports, tickets, and cards.",
        features: [
            "\u2022 RFID Blocking anti-theft fabric",
            "\u2022 Holds 4 passports, 8 cards, cash, and pen",
            "\u2022 Removable wristlet strap",
            "\u2022 Water-repellent nylon material"
]
    },
    {
        id: 55,
        name: "Hardshell Spinner Suitcase 24-Inch Carry-On",
        brand: "ActiveGear",
        category: "Bags & Accessories Travel & Luggage Suitcases",
        priceCurrent: "Rp750.000",
        priceOriginal: "Rp990.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(520 Reviews)",
        images: ["Assets/Backpack.jpg", "Assets/Backpack.jpg"],
        description: "Durable ABS hardside spinner luggage with 360-degree silent dual wheels and TSA lock.",
        features: [
            "\u2022 Lightweight scratch-resistant ABS shell",
            "\u2022 8 Silent 360-degree spinner wheels",
            "\u2022 Built-in 3-digit TSA lock",
            "\u2022 Telescoping ergonomic handle"
]
    },
    {
        id: 56,
        name: "Slim Pop-Up RFID Blocking Aluminum Card Holder",
        brand: "UrbanStyle",
        category: "Bags & Accessories Wallets Card Holders",
        priceCurrent: "Rp105.000",
        priceOriginal: "Rp145.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(610 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Automatic pop-up trigger metal card wallet holding up to 6 credit cards safely.",
        features: [
            "\u2022 One-click instant pop-up mechanism",
            "\u2022 RFID/NFC blocking aluminum case",
            "\u2022 Fits 6 cards + cash pocket",
            "\u2022 Ultra compact palm size"
]
    },
    {
        id: 57,
        name: "Baby Gentle Skincare Shampoo & Body Wash",
        brand: "BabyGentle",
        category: "Baby & Kids Baby Care Baby Skincare",
        priceCurrent: "Rp75.000",
        priceOriginal: "Rp99.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(460 Reviews)",
        images: ["Assets/Product 9.jpg", "Assets/Product 9.jpg"],
        description: "Tear-free hypoallergenic 2-in-1 baby shampoo and body wash enriched with natural chamomile.",
        features: [
            "\u2022 Tear-free gentle formula",
            "\u2022 100% Free of parabens & sulfates",
            "\u2022 Organic chamomile & oat extract",
            "\u2022 Maintains natural skin pH balance"
]
    },
    {
        id: 58,
        name: "Educational Wooden Building Blocks Toy Set",
        brand: "KiddoPlay",
        category: "Baby & Kids Toys & Games Educational Toys",
        priceCurrent: "Rp125.000",
        priceOriginal: "Rp169.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(590 Reviews)",
        images: ["Assets/Product 1.jpg", "Assets/Product 1.jpg"],
        description: "100-piece natural solid wood geometric block set with non-toxic water-based paints.",
        features: [
            "\u2022 Solid pine wood blocks",
            "\u2022 Non-toxic water-based paint",
            "\u2022 Enhances hand-eye coordination",
            "\u2022 Wooden bucket storage sorter"
]
    },
    {
        id: 59,
        name: "Lightweight Foldable Baby Stroller",
        brand: "BabyGentle",
        category: "Baby & Kids Nursery & Gear Strollers",
        priceCurrent: "Rp680.000",
        priceOriginal: "Rp899.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(310 Reviews)",
        images: ["Assets/Product 2.jpg", "Assets/Product 2.jpg"],
        description: "One-hand quick fold compact airplane cabin approved toddler stroller.",
        features: [
            "\u2022 One-second automatic folding",
            "\u2022 Lightweight aluminum frame (5.8kg)",
            "\u2022 Adjustable reclining backrest",
            "\u2022 5-Point safety harness"
]
    },
    {
        id: 60,
        name: "Soft Organic Cotton Baby Onesies 3-Pack",
        brand: "BabyGentle",
        category: "Baby & Kids Kids Fashion Baby Clothing",
        priceCurrent: "Rp110.000",
        priceOriginal: "Rp149.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(420 Reviews)",
        images: ["Assets/Product 3.jpg", "Assets/Product 3.jpg"],
        description: "Ultra soft 100% organic cotton short sleeve bodysuit onesies for newborns.",
        features: [
            "\u2022 100% Certified organic cotton",
            "\u2022 Expandable lap shoulder neckline",
            "\u2022 Bottom snap closures",
            "\u2022 Gentle on sensitive skin"
]
    },
    {
        id: 61,
        name: "Anti-Colic Baby Feeding Bottle 250ml 2-Pack",
        brand: "BabyGentle",
        category: "Baby & Kids Baby Care Feeding Bottles",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp190.000",
        discount: "24% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
        description: "BPA-free natural latch silicone teat feeding bottle with dual anti-colic air vent valve.",
        features: [
            "\u2022 100% BPA, BPS and Phthalate free",
            "\u2022 Soft natural latch-on silicone teat",
            "\u2022 Air flex anti-colic vent system",
            "\u2022 Easy to clean wide neck design"
]
    },
    {
        id: 62,
        name: "Interactive Musical Toddler Learning Activity Toy",
        brand: "KiddoPlay",
        category: "Baby & Kids Toys & Games Educational Toys",
        priceCurrent: "Rp165.000",
        priceOriginal: "Rp220.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(470 Reviews)",
        images: ["Assets/Product 5.jpg", "Assets/Product 5.jpg"],
        description: "Multifunctional electronic learning cube with drum pads, piano keys, and shape sorters.",
        features: [
            "\u2022 6 Unique play sides (Piano, Gears, Shape Sorter)",
            "\u2022 Gentle LED light show & nursery rhymes",
            "\u2022 Promotes sensory motor skill development",
            "\u2022 Shatterproof non-toxic ABS plastic"
]
    },
    {
        id: 63,
        name: "Kids Ergonomic Lightweight School Backpack",
        brand: "KiddoPlay",
        category: "Baby & Kids Kids Fashion School Backpacks",
        priceCurrent: "Rp185.000",
        priceOriginal: "Rp240.000",
        discount: "23% Off",
        rating: 5,
        reviews: "(510 Reviews)",
        images: ["Assets/Backpack.jpg", "Assets/Backpack.jpg"],
        description: "Water-resistant spine protection school bag with reflective safety strips for young kids.",
        features: [
            "\u2022 Ergonomic S-shaped padded shoulder straps",
            "\u2022 3D Breathable mesh back ventilation",
            "\u2022 360-Degree nighttime safety reflective strips",
            "\u2022 Lightweight & water repellent fabric"
]
    },
    {
        id: 64,
        name: "Waterproof Silicone Baby Bibs 4-Pack",
        brand: "BabyGentle",
        category: "Baby & Kids Baby Care Feeding",
        priceCurrent: "Rp69.000",
        priceOriginal: "Rp95.000",
        discount: "27% Off",
        rating: 4,
        reviews: "(290 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Soft food grade silicone bibs with deep crumb catcher pouch and adjustable neck buttons.",
        features: [
            "\u2022 100% Food grade soft silicone",
            "\u2022 Deep spill catcher pocket",
            "\u2022 Adjustable 4-button neck strap",
            "\u2022 Easy wipe clean & dishwasher safe"
]
    },
    {
        id: 65,
        name: "Non-Slip Thick Eco-Friendly Yoga Mat",
        brand: "ActiveGear",
        category: "Sport & Outdoors Fitness & Gym Yoga Mats",
        priceCurrent: "Rp145.000",
        priceOriginal: "Rp199.000",
        discount: "27% Off",
        rating: 5,
        reviews: "(780 Reviews)",
        images: ["Assets/Product 3.jpg", "Assets/Product 3.jpg"],
        description: "Extra thick 8mm high density TPE yoga mat with alignment guide lines and carrying strap.",
        features: [
            "\u2022 Non-toxic eco-friendly TPE material",
            "\u2022 Double-sided non-slip textured surface",
            "\u2022 Body alignment line grid",
            "\u2022 Free carrying strap included"
]
    },
    {
        id: 66,
        name: "Adjustable Dumbbell Weight Set 10kg with Case",
        brand: "FitGym",
        category: "Sport & Outdoors Fitness & Gym Dumbbells",
        priceCurrent: "Rp320.000",
        priceOriginal: "Rp430.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(650 Reviews)",
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
        description: "Electroplated chrome adjustable dumbbell set with connector bar to convert into a barbell.",
        features: [
            "\u2022 Chrome electroplated steel weight plates",
            "\u2022 Non-slip rubber grip handles",
            "\u2022 Connecting rod converts into barbell",
            "\u2022 Heavy-duty storage box"
]
    },
    {
        id: 67,
        name: "Waterproof 4-Person Outdoor Camping Tent",
        brand: "OutdoorPeak",
        category: "Sport & Outdoors Camping & Hiking Tents",
        priceCurrent: "Rp550.000",
        priceOriginal: "Rp750.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(490 Reviews)",
        images: ["Assets/Product 5.jpg", "Assets/Product 5.jpg"],
        description: "Automatic hydraulic popup dome tent with UV protection flysheet and mesh windows.",
        features: [
            "\u2022 3-Second instant automatic popup",
            "\u2022 3000mm PU waterproof coating",
            "\u2022 Anti-mosquito mesh doors",
            "\u2022 Fits 3-4 adults comfortably"
]
    },
    {
        id: 68,
        name: "Stainless Steel Vacuum Thermal Water Bottle 1L",
        brand: "ActiveGear",
        category: "Sport & Outdoors Camping & Hiking Water Bottles",
        priceCurrent: "Rp89.000",
        priceOriginal: "Rp125.000",
        discount: "28% Off",
        rating: 4,
        reviews: "(610 Reviews)",
        images: ["Assets/Product 6.jpg", "Assets/Product 6.jpg"],
        description: "Double wall vacuum insulated stainless steel canteen keeping drinks cold 24h or hot 12h.",
        features: [
            "\u2022 Double wall 18/8 stainless steel",
            "\u2022 Cold for 24h, Hot for 12h",
            "\u2022 100% Leakproof lid with loop",
            "\u2022 Sweat-free powder coat"
]
    },
    {
        id: 69,
        name: "High Density Muscle Foam Roller for Recovery",
        brand: "FitGym",
        category: "Sport & Outdoors Fitness & Gym Foam Rollers",
        priceCurrent: "Rp95.000",
        priceOriginal: "Rp130.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(430 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Deep tissue trigger point foam roller for back, leg muscle massage and post-workout recovery.",
        features: [
            "\u2022 High density EVA foam construction",
            "\u2022 Dual grid massage zone surface",
            "\u2022 Supports up to 200kg weight",
            "\u2022 Relieves muscle soreness & tightness"
]
    },
    {
        id: 70,
        name: "Heavy-Duty Resistance Exercise Bands 5-Set",
        brand: "FitGym",
        category: "Sport & Outdoors Fitness & Gym Resistance Bands",
        priceCurrent: "Rp115.000",
        priceOriginal: "Rp155.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(680 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "100% Natural latex resistance workout band set with handles, door anchor, and ankle straps.",
        features: [
            "\u2022 5 Color-coded resistance levels (10lbs to 50lbs)",
            "\u2022 100% Eco-friendly natural latex",
            "\u2022 Includes door anchor & foam handles",
            "\u2022 Compact mesh travel bag"
]
    },
    {
        id: 71,
        name: "Ultra Bright Rechargeable LED Camping Lantern",
        brand: "OutdoorPeak",
        category: "Sport & Outdoors Camping & Hiking Lanterns",
        priceCurrent: "Rp125.000",
        priceOriginal: "Rp170.000",
        discount: "26% Off",
        rating: 4,
        reviews: "(390 Reviews)",
        images: ["Assets/Product 1.jpg", "Assets/Product 1.jpg"],
        description: "1000 Lumens 360-degree LED camping light with power bank output for phone emergency charging.",
        features: [
            "\u2022 1000 Lumens 360-degree illumination",
            "\u2022 4 Light modes (Warm, Cool, White, Flash)",
            "\u2022 Built-in 4400mAh power bank charger",
            "\u2022 IPX4 Water resistant"
]
    },
    {
        id: 72,
        name: "Tactical Outdoor Hiking Backpack 40L Waterproof",
        brand: "OutdoorPeak",
        category: "Sport & Outdoors Camping & Hiking Backpacks",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(570 Reviews)",
        images: ["Assets/Backpack.jpg", "Assets/Backpack.jpg"],
        description: "Large capacity 40L trekking hiking pack with rain cover and hydration bladder sleeve.",
        features: [
            "\u2022 40L High capacity with MOLLE system",
            "\u2022 Includes waterproof rain cover",
            "\u2022 Hydration port sleeve for water bladder",
            "\u2022 Padded waist belt & chest strap"
]
    },
    {
        id: 73,
        name: "Premium Car Wash Shampoo & Wax Foam 1L",
        brand: "AutoCare",
        category: "Automotive Car Care Wash & Wax",
        priceCurrent: "Rp68.000",
        priceOriginal: "Rp95.000",
        discount: "28% Off",
        rating: 5,
        reviews: "(730 Reviews)",
        images: ["Assets/Product 6.jpg", "Assets/Product 6.jpg"],
        description: "High foaming car wash soap infused with carnauba wax for a streak-free brilliant shine finish.",
        features: [
            "\u2022 pH neutral safe for clear coats & ceramic wraps",
            "\u2022 Rich snow foam lubricates dirt",
            "\u2022 Infused with real Brazilian carnauba wax",
            "\u2022 Concentrated 1000ml bottle"
]
    },
    {
        id: 74,
        name: "HD 1080P Dual Car Dash Cam Camera",
        brand: "TechTime",
        category: "Automotive Auto Electronics Dash Cams",
        priceCurrent: "Rp399.000",
        priceOriginal: "Rp540.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(580 Reviews)",
        images: ["Assets/Product 7.jpg", "Assets/Product 7.jpg"],
        description: "Front and rear dual recording dash camera with night vision, G-sensor, and parking monitor.",
        features: [
            "\u2022 Full HD 1080P front & rear camera",
            "\u2022 170-degree ultra wide angle lens",
            "\u2022 G-sensor collision lock & loop recording",
            "\u2022 Night vision WDR technology"
]
    },
    {
        id: 75,
        name: "Universal All-Weather Rubber Car Floor Mats 4-Piece",
        brand: "AutoCare",
        category: "Automotive Interior Accessories Floor Mats",
        priceCurrent: "Rp185.000",
        priceOriginal: "Rp249.000",
        discount: "25% Off",
        rating: 4,
        reviews: "(410 Reviews)",
        images: ["Assets/Product 8.jpg", "Assets/Product 8.jpg"],
        description: "Heavy-duty trimmable waterproof rubber floor mats protecting vehicle carpet from mud and spills.",
        features: [
            "\u2022 Odorless heavy-duty flexible rubber",
            "\u2022 Deep dish channels trap water and mud",
            "\u2022 Customizable trim lines fit sedans & SUVs",
            "\u2022 Anti-slip nibbed backing"
]
    },
    {
        id: 76,
        name: "High Pressure Car Washer Snow Foam Lance Gun",
        brand: "AutoCare",
        category: "Automotive Car Care Wash & Wax",
        priceCurrent: "Rp149.000",
        priceOriginal: "Rp199.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(520 Reviews)",
        images: ["Assets/Product 9.jpg", "Assets/Product 9.jpg"],
        description: "Adjustable brass nozzle foam cannon bottle attachment for pressure washers.",
        features: [
            "\u2022 Solid brass core with heavy duty bottle",
            "\u2022 Adjustable spray fan & foam knob",
            "\u2022 1/4 inch quick disconnect fitting",
            "\u2022 Creates thick dense foam blanket"
]
    },
    {
        id: 77,
        name: "Ultra Absorbent Microfiber Car Drying Towels 4-Pack",
        brand: "AutoCare",
        category: "Automotive Car Care Microfiber Towels",
        priceCurrent: "Rp55.000",
        priceOriginal: "Rp75.000",
        discount: "26% Off",
        rating: 5,
        reviews: "(640 Reviews)",
        images: ["Assets/Product 1.jpg", "Assets/Product 1.jpg"],
        description: "800GSM thick plush scratch-free lint-free microfiber detailing towels for car drying and buffing.",
        features: [
            "\u2022 800 GSM high density absorbent plush pile",
            "\u2022 Scratch-free silk band edge",
            "\u2022 Absorbs up to 10x its weight in water",
            "\u2022 Machine washable 40x40cm"
]
    },
    {
        id: 78,
        name: "Bluetooth 5.3 FM Transmitter Dual USB Car Charger",
        brand: "TechTime",
        category: "Automotive Auto Electronics Car Chargers",
        priceCurrent: "Rp79.000",
        priceOriginal: "Rp110.000",
        discount: "28% Off",
        rating: 4,
        reviews: "(490 Reviews)",
        images: ["Assets/Smartwatch.jpg", "Assets/Smartwatch.jpg"],
        description: "Wireless bluetooth in-car FM adapter with hands-free microphone and QC 3.0 fast charging port.",
        features: [
            "\u2022 Bluetooth 5.3 wireless audio streaming",
            "\u2022 Hands-free microphone with noise suppression",
            "\u2022 QC 3.0 + Type-C PD 20W fast charging",
            "\u2022 LED car battery voltage display"
]
    },
    {
        id: 79,
        name: "Portable Digital Cordless Car Tire Inflator 150PSI",
        brand: "AutoCare",
        category: "Automotive Auto Electronics Tire Inflators",
        priceCurrent: "Rp299.000",
        priceOriginal: "Rp399.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(380 Reviews)",
        images: ["Assets/Product 3.jpg", "Assets/Product 3.jpg"],
        description: "Rechargeable 6000mAh electric air pump compressor with LCD screen and auto shutoff preset.",
        features: [
            "\u2022 150 PSI maximum pressure fast inflation",
            "\u2022 Preset target pressure & automatic shutoff",
            "\u2022 Bright emergency LED flashlight",
            "\u2022 Includes nozzle adapters for car, bike, balls"
]
    },
    {
        id: 80,
        name: "Emergency 1200A Car Jump Starter Power Pack",
        brand: "PowerMax",
        category: "Automotive Auto Electronics Jump Starters",
        priceCurrent: "Rp450.000",
        priceOriginal: "Rp599.000",
        discount: "25% Off",
        rating: 5,
        reviews: "(310 Reviews)",
        images: ["Assets/Product 4.jpg", "Assets/Product 4.jpg"],
        description: "1200A peak current portable battery jump starter for 6.0L gas and 4.0L diesel engines.",
        features: [
            "\u2022 1200A Peak current starts 12V dead batteries in seconds",
            "\u2022 Heavy-duty jumper clamps with smart protection",
            "\u2022 Built-in 12,000mAh power bank & LED flashlight",
            "\u2022 Compact shockproof storage case"
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
    
    const normalize = str => (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '');

    if (searchQuery && searchInput) {
        searchInput.value = searchQuery;
    }
    
    if (categoryQuery) {
        const cleanQuery = normalize(categoryQuery);
        filterInputs.forEach(cb => {
            if (cb.dataset.type === 'category') {
                const cleanVal = normalize(cb.value);
                if (cleanVal === cleanQuery || cleanQuery.includes(cleanVal) || cleanVal.includes(cleanQuery)) {
                    cb.checked = true;
                }
            }
        });
    }
    
    if (!products.length) return;

    function applyFilters() {
        const selectedCategories = Array.from(document.querySelectorAll('.filter-cb[data-type="category"]:checked')).map(cb => cb.value);
        const selectedBrands = Array.from(document.querySelectorAll('.filter-cb[data-type="brand"]:checked')).map(cb => cb.value);
        const selectedRatings = Array.from(document.querySelectorAll('.filter-cb[data-type="rating"]:checked')).map(cb => cb.value);
        const priceRadio = document.querySelector('.filter-cb[data-type="price"]:checked');
        const selectedPrice = priceRadio ? priceRadio.value : null;
        const currentSearch = searchInput ? searchInput.value.trim() : '';

        let visibleCount = 0;

        products.forEach(card => {
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
            
            const cleanSearch = normalize(currentSearch);
            const matchSearch = currentSearch === '' || 
                normalize(productName).includes(cleanSearch) || 
                normalize(category).includes(cleanSearch) ||
                normalize(brand).includes(cleanSearch);

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
