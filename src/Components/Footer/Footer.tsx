import { Link } from "react-router-dom";
import FaceBookIcon from "svgs/facebook.svg";
import GoogleIcon from "svgs/google.svg";
import PinterestIcon from "svgs/pinterest.svg";
import TwitterIcon from "svgs/twitter.svg";
import WebflowIcon from "svgs/webflow.svg";
import styles from "./Footer.module.scss";

const links = [
  { to: "/", text: "Phasellus gravida semper nisi" },
  { to: "/", text: "Suspendisse nisl elit" },
  { to: "/", text: "Dellentesque habitant morbi" },
  { to: "/", text: "Etiam sollicitudin ipsum" },
];

const social = [
  { icon: TwitterIcon, iconAlt: "Twitter icon", text: "Twitter", to: "/" },
  { icon: FaceBookIcon, iconAlt: "Facebook icon", text: "Facebook", to: "/" },
  {
    icon: PinterestIcon,
    iconAlt: "Pinterest icon",
    text: "Pinterest",
    to: "/",
  },
  { icon: GoogleIcon, iconAlt: "Google icon", text: "Google", to: "/" },
  { icon: WebflowIcon, iconAlt: "Webflow icon", text: "Webflow", to: "/" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h1>about velocity</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className={styles.links}>
            <h1>useful links</h1>
            <ul>
              {links.map(({ text, to }, index) => {
                return (
                  <li key={index}>
                    <Link to={to}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.social}>
            <h1>social</h1>
            <ul>
              {social.map(({ icon, iconAlt, text, to }, index) => {
                return (
                  <li key={index}>
                    <img src={icon} alt={iconAlt} />
                    <Link to={to}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright Velocity Inc. Made in Webflow.</p>
      </div>
    </footer>
  );
};
