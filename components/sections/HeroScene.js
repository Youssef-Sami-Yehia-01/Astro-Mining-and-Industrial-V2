"use client";

import { motion } from "framer-motion";
import ButtonLink from "@/components/shared/ButtonLink";
import styles from "@/components/sections/Panels.module.css";

export default function HeroScene({ isActive, panel }) {
  return (
    <article className={`${styles.scene} ${isActive ? styles.sceneActive : ""}`} data-scene={panel.id}>
      <div className={styles.mediaLayer}>
        <video
          autoPlay
          className={`${styles.mediaAsset} ${styles[panel.mediaClass]}`}
          loop
          muted
          playsInline
        >
          <source src="/assets/video/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroVeil} />
      </div>
      <div className={`container ${styles.sceneInner}`}>
        <motion.div
          animate={isActive ? "visible" : "hidden"}
          className={`${styles.contentCard} ${styles.heroCard}`}
          initial="hidden"
          variants={sceneMotion}
        >
          <span className="eyebrow">{panel.eyebrow}</span>
          <h1 className={`${styles.panelTitle} section-title`}>
            {panel.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="section-copy">{panel.copy}</p>
          <div className={styles.ctaRow}>
            <ButtonLink href={panel.primaryCta.href}>{panel.primaryCta.label}</ButtonLink>
            <ButtonLink href={panel.secondaryCta.href} variant="ghost">
              {panel.secondaryCta.label}
            </ButtonLink>
          </div>
          <ul className={styles.highlightList}>
            {panel.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </article>
  );
}

const sceneMotion = {
  hidden: {
    opacity: 0,
    y: 36
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
