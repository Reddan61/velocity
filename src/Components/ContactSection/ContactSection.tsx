import { ContactForm } from "@/Components/ContactSection/ContactForm/ContactForm";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Contact Us Today</h1>
        <h2>This is some text inside of a div block</h2>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p>
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
