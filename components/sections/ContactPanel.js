"use client";

import { motion } from "framer-motion";
import ButtonLink from "@/components/shared/ButtonLink";
import Icon from "@/components/shared/Icon";
import { contactDetails } from "@/data/siteContent";
import styles from "@/components/sections/Panels.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ContactPanel({ panel }) {
  return (
    <section className={styles.panel} id={panel.id}>
      <div className={styles.mediaLayer}>
        <div className={`${styles.mediaAsset} ${styles[panel.mediaClass]}`} />
        <div className={styles.contactVeil} />
      </div>
      <div className={`container ${styles.panelInner}`}>
        <motion.div
          className={`${styles.contentCard} ${styles.contactCard}`}
          initial="hidden"
          viewport={{ once: true, amount: 0.35 }}
          whileInView="visible"
          variants={fadeUp}
        >
          <div>
            <span className="eyebrow">{panel.eyebrow}</span>
            <h2 className={`${styles.panelTitle} ${styles.compactTitle} section-title`}>
              {panel.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="section-copy">{panel.copy}</p>
          </div>
          <div className={styles.contactGrid}>
            <a className={`${styles.contactItem} glass-panel`} href={contactDetails.mapsUrl} rel="noreferrer" target="_blank">
              <Icon name="mapPin" size={18} />
              <div>
                <strong>Location</strong>
                <span>{contactDetails.address}</span>
              </div>
            </a>
            <a className={`${styles.contactItem} glass-panel`} href={contactDetails.whatsappUrl} rel="noreferrer" target="_blank">
              <Icon name="phone" size={18} />
              <div>
                <strong>WhatsApp</strong>
                <span>{contactDetails.whatsapp}</span>
              </div>
            </a>
            <a className={`${styles.contactItem} glass-panel`} href={`mailto:${contactDetails.emails[0]}`}>
              <Icon name="mail" size={18} />
              <div>
                <strong>Email</strong>
                <span>{contactDetails.emails[0]}</span>
              </div>
            </a>
            <a className={`${styles.contactItem} glass-panel`} href={`https://${contactDetails.website}`} rel="noreferrer" target="_blank">
              <Icon name="globe" size={18} />
              <div>
                <strong>Website</strong>
                <span>{contactDetails.website}</span>
              </div>
            </a>
          </div>
          <div className={styles.ctaRow}>
            <ButtonLink href={panel.cta.href}>{panel.cta.label}</ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
