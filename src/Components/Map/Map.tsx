import { YMaps as MapProvider, Map as YMap } from "react-yandex-maps";
import styles from "./Map.module.scss";

export const Map = () => {
  return (
    <section className={styles.section}>
      <MapProvider>
        <YMap
          className={styles.map}
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        />
      </MapProvider>
    </section>
  );
};
