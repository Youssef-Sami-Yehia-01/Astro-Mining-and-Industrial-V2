"use client";

import { useState } from "react";
import clsx from "clsx";
import Logo from "@/components/shared/Logo";
import styles from "@/components/layout/SiteHeader.module.css";

export default function SiteHeader({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Logo />
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className={styles.toggle}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={clsx(styles.nav, isOpen && styles.navOpen)}>
          {navigation.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
