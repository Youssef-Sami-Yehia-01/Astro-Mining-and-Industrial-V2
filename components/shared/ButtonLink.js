import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import styles from "@/components/shared/ButtonLink.module.css";

export default function ButtonLink({ children, href, variant = "solid" }) {
  return (
    <a
      className={clsx(styles.button, {
        [styles.solid]: variant === "solid",
        [styles.ghost]: variant === "ghost"
      })}
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <span>{children}</span>
      <Icon className={styles.icon} name="arrowRight" size={16} />
    </a>
  );
}
