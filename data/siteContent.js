export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Reach", href: "#reach" },
  { label: "Contact", href: "#contact" }
];

export const products = [
  {
    name: "Silica Sand",
    image: "/assets/images/products/silica-sand.png",
    capacity: "30,000 tons monthly",
    uses: "Glass, foundries, and filtration applications.",
    specs: ["SiO2 > 99.7%", "Fe2O3 < 0.015%"]
  },
  {
    name: "Kaolin",
    image: "/assets/images/products/kaolin.png",
    capacity: "5,000 tons monthly",
    uses: "Ceramics, paints, paper, and chemicals.",
    specs: ["Al2O3 up to 38%", "Fe2O3 from 0.2-1.5%"]
  },
  {
    name: "Dolomite",
    image: "/assets/images/products/dolomite.png",
    capacity: "10,000 tons monthly",
    uses: "Glass, refractories, and metallurgical use.",
    specs: ["MgO 20% min", "CaCO3 32% min"]
  },
  {
    name: "Calcium Carbonate",
    image: "/assets/images/products/calcium-carbonate.png",
    capacity: "15,000 tons monthly",
    uses: "Paints, plastics, paper, and filler applications.",
    specs: ["CaCO3 > 99%", "Whiteness > 97%"]
  }
];

export const partners = [
  {
    name: "Duravit",
    logo: "/assets/images/partners/duravit.png",
    alt: "Duravit logo"
  },
  {
    name: "Kandil Glass",
    logo: "/assets/images/partners/kandil.png",
    alt: "Kandil Glass logo"
  },
  {
    name: "Pasabahce",
    logo: "/assets/images/partners/pasabahce.png",
    alt: "Pasabahce logo"
  },
  {
    name: "Sphinx Glass",
    logo: "/assets/images/partners/sphinx-glass.png",
    alt: "Sphinx Glass logo"
  },
  {
    name: "Crystal Glass",
    logo: "/assets/images/partners/crystal-glass.png",
    alt: "Crystal Glass logo"
  },
  {
    name: "Mega Glass",
    logo: "/assets/images/partners/mega-glass.png",
    alt: "Mega Glass logo"
  }
];

export const contactDetails = {
  address: "71 Abdel Hamid Badawi, Sheraton, Heliopolis, Cairo, Egypt",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Astro+Mining+and+Industrial,+71+Abdel+Hamid+Badawi,+Sheraton,+Heliopolis,+Cairo,+Egypt",
  telephones: ["0222667748", "0222667726", "01080040344"],
  whatsapp: "+20 108 004 0388",
  whatsappUrl: "https://wa.me/201080040388",
  emails: ["info@astromining-industrial.com", "sales@astromining-industrial.com"],
  website: "www.astromining-industrial.com"
};

export const panels = [
  {
    id: "home",
    type: "hero",
    mediaType: "video",
    mediaClass: "heroMedia",
    eyebrow: "Astro Mining & Industrial",
    title: ["Extracting", "Treasures", "From The Earth"],
    copy:
      "A cinematic homepage concept for Astro built around Egyptian mining strength, refined mineral supply, and export-ready operations for modern industry.",
    primaryCta: { label: "Explore The Story", href: "#about" },
    secondaryCta: { label: "Get A Quote", href: "#contact" },
    highlights: [
      "Exploration, treatment, and upgrading in one workflow",
      "Industrial minerals prepared for local and global demand",
      "Clean storytelling layers designed for motion-rich presentation"
    ]
  },
  {
    id: "about",
    type: "story",
    mediaType: "image",
    mediaClass: "quarryMedia",
    eyebrow: "About Astro",
    title: ["Egyptian", "Mining", "Expertise"],
    copy:
      "Astro Mining and Industrial is a dynamic Egyptian mining company dedicated to the exploration, treatment, and upgrading of high-quality mining ores for industrial markets.",
    details: [
      "The company works across feldspar, kaolin, glass sand, iron oxides, calcium carbonate, dolomite, and gypsum.",
      "Extracting treasures from the earth is more than a slogan. It is a clear statement about turning natural resources into dependable industrial value."
    ],
    factCards: [
      { value: "7+", label: "Core mineral categories" },
      { value: "Egypt", label: "Operations rooted in quarry resources" },
      { value: "Export", label: "Supply direction shaped for global demand" }
    ]
  },
  {
    id: "services",
    type: "story",
    mediaType: "image",
    mediaClass: "loaderMedia",
    eyebrow: "Our Services",
    title: ["Field To", "Factory", "Flow"],
    copy:
      "Astro supports clients from geological assessment through refinement and supply, using practical industrial methods rather than generic trading language.",
    details: [
      "Exploration with geological surveys and deposit evaluation.",
      "Treatment with modern refining techniques for high purity.",
      "Upgrading raw materials into stronger industrial inputs.",
      "Supplying high-quality materials from mines and quarries."
    ],
    featurePills: ["Exploration", "Treatment", "Upgrading", "Raw Material Supply"]
  },
  {
    id: "products",
    type: "products",
    mediaType: "image",
    mediaClass: "productsMedia",
    eyebrow: "Products",
    title: ["Minerals", "That Catch", "Attention"],
    copy:
      "A brighter, more tactile product presentation where the mineral colors lead the eye first, while technical confidence stays close behind.",
    supportingText:
      "The V2 concept keeps product imagery vivid and uses motion to reveal specs, applications, and production capacity without dulling the minerals themselves."
  },
  {
    id: "reach",
    type: "reach",
    mediaType: "image",
    mediaClass: "mapMedia",
    eyebrow: "Global Reach",
    title: ["Exporting", "Across", "Many Markets"],
    copy:
      "Astro serves Egypt while exporting to clients across the Gulf, Africa, and Asia with an industrial minerals portfolio built for recurring demand.",
    countries: [
      "Gulf Countries",
      "South Africa",
      "India",
      "Bangladesh",
      "Libya",
      "Turkey",
      "Morocco",
      "Tunisia",
      "Algeria"
    ]
  },
  {
    id: "contact",
    type: "contact",
    mediaType: "image",
    mediaClass: "contactMedia",
    eyebrow: "Contact",
    title: ["Start The", "Next", "Shipment"],
    copy:
      "The final panel closes the story with clear contact options, export intent, and a direct route into sales conversations for Astro Mining & Industrial.",
    cta: { label: "Open Company Profile", href: "/assets/docs/astro-company-profile.pdf" }
  }
];
