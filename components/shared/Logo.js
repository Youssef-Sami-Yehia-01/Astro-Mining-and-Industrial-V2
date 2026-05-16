import Image from "next/image";
import clsx from "clsx";
import styles from "@/components/shared/Logo.module.css";

export default function Logo({ className = "", footer = false }) {
  return (
    <a aria-label="Astro Mining and Industrial" className={clsx(styles.logo, className)} href="#home">
      <Image
        alt="Astro Mining and Industrial logo"
        className={clsx(styles.image, footer && styles.footerImage)}
        height={footer ? 108 : 72}
        priority
        src={footer ? "/assets/brand/astro-footer-logo.png" : "/assets/brand/astro-logo.png"}
        width={footer ? 96 : 118}
      />
    </a>
  );
}
