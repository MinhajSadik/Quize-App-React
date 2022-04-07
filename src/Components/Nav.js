import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={Logo} alt="Minhaj Sadik Logo" />
            <h3>Minhaj Sadik</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
