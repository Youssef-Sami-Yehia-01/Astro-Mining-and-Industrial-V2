"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/components/sections/Panels.module.css";

export default function ProductsScene({ isActive, panel, products }) {
  return (
    <article className={`${styles.scene} ${isActive ? styles.sceneActive : ""}`} data-scene={panel.id}>
      <div className={styles.mediaLayer}>
        <div className={`${styles.mediaAsset} ${styles[panel.mediaClass]}`} />
        <div className={styles.productsVeil} />
      </div>
      <div className={`container ${styles.sceneInner}`}>
        <motion.div
          animate={isActive ? "visible" : "hidden"}
          className={`${styles.contentCard} ${styles.productsCard}`}
          initial="hidden"
          variants={sceneMotion}
        >
          <div className={styles.productsHeader}>
            <div>
              <span className="eyebrow">{panel.eyebrow}</span>
              <h2 className={`${styles.panelTitle} ${styles.compactTitle} section-title`}>
                {panel.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
            </div>
            <div className={styles.productsText}>
              <p className="section-copy">{panel.copy}</p>
              <p className={styles.detailLine}>{panel.supportingText}</p>
            </div>
          </div>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <article className={`${styles.productCard} glass-panel`} key={product.name}>
                <div className={styles.productImageWrap}>
                  <Image alt={product.name} className={styles.productImage} fill sizes="25vw" src={product.image} />
                </div>
                <div className={styles.productBody}>
                  <h3>{product.name}</h3>
                  <p>{product.uses}</p>
                  <span>{product.capacity}</span>
                  <ul>
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
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
