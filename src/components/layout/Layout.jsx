import Navbar from "../shared/Navbar";
import PropTypes from "prop-types";
import classes from "../../assets/css/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
