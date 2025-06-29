
export interface DemoProduct {
  id: string;
  title: string;
  description: string;
  brand: string;
  category: string;
  longDescription: string;
  features: string[];
  images: string[];
  marketingMaterials: MarketingMaterial[];
}

export interface MarketingMaterial {
  type: string;
  content?: string;
  platform?: string;
  size?: string;
  imageUrl?: string;
  videoUrl?: string;
  items?: string[];
}

export const demoProducts: DemoProduct[] = [
  {
    id: 'stanley-tumbler',
    title: 'Stanley IceFlow™ Flip Straw Tumbler 30oz',
    description: 'Durable, stylish water bottle with built-in straw and double-wall vacuum insulation',
    brand: 'Stanley',
    category: 'Drinkware',
    longDescription: `
**Hydration that keeps up with your lifestyle.**

Whether you're conquering a hike, navigating your morning commute, or powering through back-to-back meetings, the **Stanley IceFlow™ Flip Straw Tumbler 30oz** is designed to deliver ice-cold refreshment from sunrise to sundown — and beyond.

---

### 🧊 Built to Keep Things Ice-Cold — Literally

Thanks to **Stanley's signature double-wall vacuum insulation**, this tumbler doesn't just keep water cool — it **preserves chill for up to 12 hours**, and with ice, your drink stays cold for **up to 48 hours**. That's two full days without ever needing a fridge. It's your portable glacier.

---

### 💡 Designed with Real Life in Mind

From the **leak-resistant flip straw lid** to the **ergonomic built-in handle**, every detail is crafted for convenience:

- **One-handed sipping** for workouts, driving, or multitasking
- **30oz capacity** means fewer refills — perfect for all-day hydration
- **Fits most car cup holders** (yes, even the shallow ones)
- **Dishwasher safe** — no annoying hand-washing required
- **Durable stainless steel** that survives drops, dents, and daily chaos

No more plastic bottles. No more lukewarm water. Just crisp, cold hydration when you need it most.

---

### 🌍 Sustainable, Stylish, and Built to Last

Stanley's not new to the game. With **over 100 years of experience in high-performance gear**, they've built a reputation for reliability and eco-conscious design.

- Made from **18/8 recycled stainless steel**
- **BPA-free and eco-safe**
- Comes in a range of modern matte colors to match your vibe
- Designed to last **a lifetime**, not a season

Buying a Stanley isn't just about convenience — it's a choice for better design, lower waste, and long-term performance.

---

### 🧳 Where It Goes, You Go

At 30oz, it's big enough for serious hydration but still portable. Whether you're:

- Hitting the gym or a long hike
- Working long shifts
- Heading to class or co-working
- Traveling, camping, or road-tripping

…the IceFlow goes with you. It's made to **move**, not sit on a shelf.

---

### 🙋‍♀️ Still wondering?

**Will it leak in my bag?**  
Nope — the flip straw locks down securely.

**Will it fit in my cup holder?**  
Yep — even compact ones.

**Can I put smoothies or coffee in it?**  
Cold drinks only. (No hot liquids with the straw lid!)

**How heavy is it?**  
Light enough to carry comfortably — around 0.6kg when full.

**What if I drop it?**  
It's Stanley. It can take it.

---

**Join millions who trust Stanley.**

The IceFlow Flip Straw Tumbler is more than just a trend — it's a lifestyle upgrade. If you're ready for a hydration companion that works as hard as you do, you just found it.
`,
    features: [
      '30oz capacity with leak-resistant flip straw lid',
      'Double-wall vacuum insulation (keeps drinks cold for 12–48 hours)',
      '18/8 recycled stainless steel construction',
      'Built-in handle and ergonomic design',
      'Fits most standard cup holders',
      'Dishwasher safe and BPA-free',
      'Available in a variety of matte finishes'
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500'
    ],
    marketingMaterials: [
      {
        type: 'Email Subject Lines',
        items: [
          '🥤 New Arrival: Stanley IceFlow™ Tumbler - Limited Time 20% Off!',
          '✨ Stay Hydrated in Style - Stanley IceFlow™ Now Available',
          '🔥 Last Chance: Premium Stanley Tumbler - 48Hr Ice Cold Guarantee',
          'Transform Your Hydration Game with Stanley IceFlow™',
          'Stanley IceFlow™: The Tumbler That Changed Everything'
        ]
      },
      {
        type: 'Social Media Captions',
        platform: 'Instagram',
        items: [
          '✨ Introducing the Stanley IceFlow™ Flip Straw Tumbler 💧\n\nKeep your drinks ice-cold for up to 48 hours. Perfect for every adventure.\n\n#Stanley #Hydration #IceCold',
          '🧊 Ready to upgrade your hydration? The Stanley IceFlow™ is here to keep you refreshed all day long.\n\n#StayHydrated #Stanley #PremiumQuality',
          'From sunrise workouts to late-night study sessions, the Stanley IceFlow™ delivers crisp, cold refreshment when you need it most.\n\n#Stanley #Lifestyle #Hydration'
        ]
      },
      {
        type: 'Product Tags',
        content: 'stanley tumbler, insulated water bottle, flip straw tumbler, 30oz water bottle, vacuum insulation, leak resistant, dishwasher safe, BPA free, ice cold drinks, hydration bottle'
      },
      {
        type: 'Story',
        platform: 'Instagram',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        size: '1080x1920',
        content: 'Swipe up for ice-cold hydration'
      },
      {
        type: 'Post',
        platform: 'Instagram',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        size: '1080x1080',
        content: 'Stay hydrated, stay cool'
      }
    ]
  },
  {
    id: 'the-ordinary-niacinamide',
    title: 'Niacinamide 10% + Zinc 1% Serum',
    description: 'Clinical-strength serum designed to visibly reduce blemishes and balance sebum activity',
    brand: 'The Ordinary',
    category: 'Skincare',
    longDescription: `
**Clinical skincare that actually works.**

The Ordinary's **Niacinamide 10% + Zinc 1%** is a high-strength vitamin and mineral blemish formula that targets multiple skin concerns with clinical precision.

---

### 🧪 Science-Backed Formula

- **10% Niacinamide (Vitamin B3)** reduces appearance of skin blemishes and signs of congestion
- **1% Zinc PCA** helps balance visible aspects of sebum activity
- **Water-based serum** absorbs quickly without pilling
- **Vegan and cruelty-free** formulation

---

### ✨ Visible Results

Regular use helps improve:
- Skin texture and smoothness
- Appearance of enlarged pores
- Uneven skin tone
- Excess oil production
- Overall skin clarity

---

### 💧 How to Use

Apply to entire face morning and evening before heavier creams. Can be mixed with other treatments, but avoid vitamin C in the same routine.

Perfect for oily, combination, and acne-prone skin types seeking effective, affordable skincare solutions.
`,
    features: [
      '10% Niacinamide for blemish reduction',
      '1% Zinc PCA for oil control',
      'Water-based, fast-absorbing formula',
      'Suitable for daily use',
      'Vegan and cruelty-free',
      'Fragrance-free formulation',
      'Clinical strength concentration'
    ],
    images: [
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500'
    ],
    marketingMaterials: [
      {
        type: 'Email Subject Lines',
        items: [
          '🧪 Clinical Skincare: The Ordinary Niacinamide - 25% Off Today',
          '✨ Clear Skin Starts Here - Niacinamide 10% + Zinc 1%',
          '🌟 Blemish-Free Skin in 4 Weeks - Science-Backed Results',
          'The Ordinary Niacinamide: Your Skin\'s New Best Friend',
          '💧 Oil Control + Pore Minimizing - One Powerful Serum'
        ]
      },
      {
        type: 'Social Media Captions',
        platform: 'Instagram',
        items: [
          '🧪 Science meets skincare ✨\n\nThe Ordinary Niacinamide 10% + Zinc 1% - clinical strength results without the clinical price.\n\n#TheOrdinary #Niacinamide #Skincare',
          '💧 Oily skin? Large pores? Blemishes? This serum tackles it all.\n\nNiacinamide 10% + Zinc 1% for clearer, balanced skin.\n\n#SkincareRoutine #ClearSkin #TheOrdinary',
          'From congested to clear in weeks, not months. The power of 10% Niacinamide is real.\n\n#SkincareResults #TheOrdinary #GlowUp'
        ]
      }
    ]
  },
  {
    id: 'baltic-candle',
    title: 'Baltic Sea Scented Candle — Hand-Poured in Klaipėda',
    description: 'Locally crafted soy wax candle inspired by sea breeze, pine, and amber resin',
    brand: 'Klaipėda Home',
    category: 'Home Fragrance',
    longDescription: `
**Bring the Baltic coast into your home.**

Hand-poured in the historic port city of Klaipėda, this **Baltic Sea Scented Candle** captures the essence of Lithuania's stunning coastline in every flicker.

---

### 🌊 Inspired by Nature

Our master candle makers blend:
- **Fresh sea breeze** - crisp, oceanic top notes
- **Baltic pine** - warm, woody heart notes  
- **Ancient amber resin** - rich, golden base notes

The result? A complex, sophisticated fragrance that transports you to windswept dunes and pine forests meeting the sea.

---

### 🕯️ Artisan Craftsmanship

- **100% natural soy wax** from sustainable sources
- **Hand-poured in small batches** for quality control
- **Cotton wick** for clean, even burning
- **50+ hour burn time** for lasting enjoyment
- **Recyclable glass vessel** with minimalist design

---

### 🏠 Perfect For

Create ambiance for:
- Cozy evening relaxation
- Meditation and mindfulness
- Dinner parties and gatherings  
- Reading nooks and studies
- Bathroom spa experiences

Each candle comes with a brief history of Klaipėda and the inspiration behind this unique Baltic fragrance blend.
`,
    features: [
      'Hand-poured 100% soy wax construction',
      'Unique Baltic Sea-inspired fragrance blend',
      'Cotton wick for clean burning',
      '50+ hour burn time',
      'Recyclable glass vessel',
      'Made in Klaipėda, Lithuania',
      'Small batch artisan production'
    ],
    images: [
      'https://images.unsplash.com/photo-1602874801883-4c6d0c49c8e8?w=500',
      'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
      'https://images.unsplash.com/photo-1509909756405-be0199881695?w=500'
    ],
    marketingMaterials: [
      {
        type: 'Email Subject Lines',
        items: [
          '🕯️ Baltic Sea Ambiance - Hand-Poured Candles from Lithuania',
          '🌊 New Arrival: Authentic Baltic Coast Fragrance - Limited Stock',
          '✨ Bring Nordic Hygge Home - Baltic Sea Scented Candles',
          'Hand-Crafted in Klaipėda - Baltic Sea Candle Collection',
          '🏠 Transform Your Space with Authentic Baltic Fragrance'
        ]
      },
      {
        type: 'Social Media Captions',
        platform: 'Instagram',
        items: [
          '🌊 Close your eyes and breathe in the Baltic Sea ✨\n\nHand-poured in Klaipėda with love, sea breeze, pine, and amber resin.\n\n#BalticSea #HandPoured #Lithuania',
          '🕯️ Each candle tells a story of the Lithuanian coast. What story will yours tell?\n\n#ArtisanCandles #BalticVibes #KlaipedaHome',
          'From the historic port of Klaipėda to your living room. Authentic Baltic fragrance in every flame.\n\n#Handmade #Lithuania #HomeFragrance'
        ]
      }
    ]
  },
  {
    id: 'keyboard-slime',
    title: 'Anti-Stress Keyboard Cleaner Slime — Blueberry Scented',
    description: 'Novelty slime toy that cleans dust from keyboards while relieving stress',
    brand: 'ZenGadget',
    category: 'Accessories',
    longDescription: `
**Clean your keyboard. Clear your mind.**

This **Anti-Stress Keyboard Cleaner Slime** isn't just a cleaning tool—it's a moment of zen in your busy workday.

---

### 🧹 Dual-Purpose Design

**Keyboard Cleaning Power:**
- Reaches between keys where dust cloths can't
- Picks up crumbs, dust, and debris effortlessly
- Safe for all keyboard types (mechanical, membrane, laptop)
- Reusable hundreds of times before replacement needed

**Stress Relief Benefits:**
- Satisfying tactile experience reduces anxiety
- Perfect fidget tool for meetings and calls
- Helps improve focus and concentration
- Blueberry scent provides aromatherapy benefits

---

### 🫐 Blueberry Bliss

The subtle, sweet blueberry fragrance isn't overpowering—just enough to make cleaning enjoyable and provide a calming sensory experience.

---

### 💼 Office Essential

Perfect for:
- Daily keyboard maintenance
- Desk-side stress relief
- Fidgeting during video calls
- Gift for coworkers and tech enthusiasts
- Anyone who spends hours at a computer

**Pro tip:** Store in the included container to maintain optimal consistency and prevent drying out.

Comes with simple usage instructions and storage container. Replace every 2-3 months with regular use.
`,
    features: [
      'Dual-purpose cleaning and stress relief',
      'Reaches between keyboard keys effectively',
      'Pleasant blueberry scent',
      'Safe for all keyboard types',
      'Reusable hundreds of times',
      'Includes storage container',
      'Perfect desk fidget tool'
    ],
    images: [
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500',
      'https://images.unsplash.com/photo-1616469829581-73993eb86930?w=500',
      'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=500',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500'
    ],
    marketingMaterials: [
      {
        type: 'Email Subject Lines',
        items: [
          '🫐 Weird but Works: Blueberry Slime Cleans Your Keyboard Better',
          '😌 Clean Keyboard + Stress Relief in One Oddly Satisfying Product',
          '⌨️ The Keyboard Cleaner That Went Viral - Now with Blueberry Scent',
          'ZenGadget Slime: Your Desk\'s New Favorite Weird Thing',
          '🧹 Finally, a Fun Way to Clean Your Gross Keyboard'
        ]
      },
      {
        type: 'Social Media Captions',
        platform: 'Instagram',
        items: [
          '🫐 POV: Cleaning your keyboard is actually satisfying now ✨\n\nBlueberry-scented slime that cleans AND destresses. Weird? Yes. Effective? Also yes.\n\n#KeyboardCleaning #OddlySatisfying #DeskAccessories',
          '⌨️ Your keyboard is grosser than you think. This slime makes cleaning it... fun?\n\n#TechCleaning #StressRelief #ZenGadget',
          'Fidget toy meets cleaning tool. The crossover we didn\'t know we needed.\n\n#ProductReview #StressRelief #KeyboardCare'
        ]
      }
    ]
  }
];

export const getProductById = (id: string): DemoProduct | undefined => {
  return demoProducts.find(product => product.id === id);
};

export const getProductMarketingMaterials = (id: string) => {
  const product = getProductById(id);
  return product?.marketingMaterials || [];
};

export const getProductImages = (id: string) => {
  const product = getProductById(id);
  return product?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500'
  ];
};
