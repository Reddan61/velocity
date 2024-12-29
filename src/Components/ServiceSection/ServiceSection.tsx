import BridgeImage from "images/bridge.jpg";
import PartyImage from "images/party.jpg";
import { Card } from "@/Components/ServiceSection/Card/Card";
import styles from "./ServiceSection.module.scss";

export const ServiceSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>services</h1>
          <h2>This is some text inside of a div block.</h2>
        </div>
        <div className={styles.cards}>
          <Card
            image={BridgeImage}
            imageAlt="bridge image"
            title="services one"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros elementum tristique.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse varius."
          />
          <Card
            image={PartyImage}
            imageAlt="party image"
            title="services two"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros elementum tristique.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse varius."
          />
        </div>
      </div>
    </section>
  );
};
