"use client";

import HeroPanel from "@/components/sections/HeroPanel";
import StoryPanel from "@/components/sections/StoryPanel";
import ProductsPanel from "@/components/sections/ProductsPanel";
import ReachPanel from "@/components/sections/ReachPanel";
import ContactPanel from "@/components/sections/ContactPanel";
import styles from "@/components/sections/Panels.module.css";

export default function HomeExperience({ panels, partners, products }) {
  return (
    <main className={styles.experience}>
      <HeroPanel panel={panels[0]} />
      <StoryPanel panel={panels[1]} />
      <StoryPanel panel={panels[2]} />
      <ProductsPanel panel={panels[3]} products={products} />
      <ReachPanel panel={panels[4]} partners={partners} />
      <ContactPanel panel={panels[5]} />
    </main>
  );
}
