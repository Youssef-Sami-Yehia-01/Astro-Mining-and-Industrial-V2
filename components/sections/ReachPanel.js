"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/components/sections/Panels.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ReachPanel({ panel, partners }) {
  return (
    <section className={styles.panel} id={panel.id}>
      <div className={styles.mediaLayer}>
        <div className={`${styles.mediaAsset} ${styles[panel.mediaClass]}`} />
        <div className={styles.reachVeil} />
      </div>
      <div className={`container ${styles.panelInner}`}>
        <motion.div
          className={`${styles.contentCard} ${styles.reachCard}`}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
          variants={fadeUp}
        >
          <div className={styles.reachCopy}>
            <span className="eyebrow">{panel.eyebrow}</span>
            <h2 className={`${styles.panelTitle} ${styles.compactTitle} section-title`}>
              {panel.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="section-copy">{panel.copy}</p>
            <div className={styles.countryGrid}>
              {panel.countries.map((country) => (
                <span className={styles.countryChip} key={country}>
                  {country}
                </span>
              ))}
            </div>
          </div>
          <div className={`${styles.mapCard} glass-panel`}>
            <div className={styles.mapFrame}>
              <Image
                alt="Astro export reach map"
                className={styles.mapImage}
                fill
                sizes="40vw"
                src="/assets/images/world-map-astro.svg"
              />
            </div>
            <div className={styles.partnerLoop}>
              <div className={styles.partnerRail}>
                {[...partners, ...partners].map((partner, index) => (
                  <div className={styles.partnerBadge} key={`${partner.name}-${index}`}>
                    <Image alt={partner.alt} fill sizes="10rem" src={partner.logo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
