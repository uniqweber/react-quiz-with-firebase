import Account from "./Account";
import classes from '../../assets/css/Navbar.module.css'
import logo from '../../assets/images/logo-bg.png'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
