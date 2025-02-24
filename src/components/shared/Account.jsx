import { Link } from "react-router";
import classes from "../../assets/css/Navbar.module.css";

const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="signup">Signup</Link>
      {/* <span class="material-icons-outlined" title="Logout">
        logout
      </span> */}
    </div>
  );
};

export default Account;
