import Logo from "../assets/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/" className={classes.brand}>
            <img src={Logo} alt="Minhaj Sadik Logo" />
            <h3>Minhaj Sadik</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
