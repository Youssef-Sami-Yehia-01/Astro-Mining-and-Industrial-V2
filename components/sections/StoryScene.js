"use client";

import { motion } from "framer-motion";
import styles from "@/components/sections/Panels.module.css";

export default function StoryScene({ isActive, panel }) {
  return (
    <article className={`${styles.scene} ${isActive ? styles.sceneActive : ""}`} data-scene={panel.id}>
      <div className={styles.mediaLayer}>
        <div className={`${styles.mediaAsset} ${styles[panel.mediaClass]}`} />
        <div className={styles.storyVeil} />
      </div>
      <div className={`container ${styles.sceneInner}`}>
        <motion.div
          animate={isActive ? "visible" : "hidden"}
          className={`${styles.contentCard} ${styles.storyCard}`}
          initial="hidden"
          variants={sceneMotion}
        >
          <span className="eyebrow">{panel.eyebrow}</span>
          <h2 className={`${styles.panelTitle} section-title`}>
            {panel.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="section-copy">{panel.copy}</p>
          <div className={styles.detailStack}>
            {panel.details.map((detail) => (
              <p className={styles.detailLine} key={detail}>
                {detail}
              </p>
            ))}
          </div>
          {panel.factCards ? (
            <div className={styles.factGrid}>
              {panel.factCards.map((item) => (
                <article className={`${styles.factCard} glass-panel`} key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          ) : null}
          {panel.featurePills ? (
            <div className={styles.pillRow}>
              {panel.featurePills.map((item) => (
                <span className={styles.featurePill} key={item}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
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
