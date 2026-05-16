import Logo from "@/components/shared/Logo";
import Icon from "@/components/shared/Icon";
import styles from "@/components/layout/SiteFooter.module.css";

export default function SiteFooter({ contact, navigation }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandBlock}>
            <Logo footer />
            <p>
              A separate V2 concept built to explore a more cinematic direction for Astro Mining & Industrial while preserving the approved V1 project.
            </p>
          </div>
          <div className={styles.column}>
            <h3>Quick Links</h3>
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <div className={styles.column}>
            <h3>Contact</h3>
            <a href={contact.mapsUrl} rel="noreferrer" target="_blank">
              <Icon name="mapPin" size={16} /> {contact.address}
            </a>
            <p><Icon name="phone" size={16} /> {contact.whatsapp}</p>
            <p><Icon name="mail" size={16} /> {contact.emails[0]}</p>
            <a href={`https://${contact.website}`} rel="noreferrer" target="_blank">
              <Icon name="globe" size={16} /> {contact.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
