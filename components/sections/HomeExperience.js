"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import HeroScene from "@/components/sections/HeroScene";
import StoryScene from "@/components/sections/StoryScene";
import ProductsScene from "@/components/sections/ProductsScene";
import ReachScene from "@/components/sections/ReachScene";
import ContactScene from "@/components/sections/ContactScene";
import styles from "@/components/sections/Panels.module.css";

export default function HomeExperience({ panels, partners, products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const markerRefs = useRef([]);

  const scenes = useMemo(
    () => [
      <HeroScene isActive={activeIndex === 0} key={panels[0].id} panel={panels[0]} />,
      <StoryScene isActive={activeIndex === 1} key={panels[1].id} panel={panels[1]} />,
      <StoryScene isActive={activeIndex === 2} key={panels[2].id} panel={panels[2]} />,
      <ProductsScene isActive={activeIndex === 3} key={panels[3].id} panel={panels[3]} products={products} />,
      <ReachScene isActive={activeIndex === 4} key={panels[4].id} panel={panels[4]} partners={partners} />,
      <ContactScene isActive={activeIndex === 5} key={panels[5].id} panel={panels[5]} />
    ],
    [activeIndex, panels, partners, products]
  );

  useEffect(() => {
    const markers = markerRefs.current.filter(Boolean);

    if (!markers.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Number(a.target.dataset.index) - Number(b.target.dataset.index));

        if (!visibleEntries.length) {
          return;
        }

        const nextIndex = Number(visibleEntries[0].target.dataset.index);
        setActiveIndex(nextIndex);
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0.15
      }
    );

    markers.forEach((marker) => observer.observe(marker));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styles.experience}>
      <div className={styles.stage}>
        <div className={styles.stageViewport}>{scenes}</div>
      </div>
      <div className={styles.scrollRail}>
        {panels.map((panel, index) => (
          <section
            className={styles.marker}
            data-index={index}
            id={panel.id}
            key={panel.id}
            ref={(node) => {
              markerRefs.current[index] = node;
            }}
          >
            <div className="screen-reader-text">{panel.eyebrow}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
