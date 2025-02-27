import { Link } from "react-router";
import classes from "../../../assets/css/Form.module.css";
import { Button, Input } from "../../../components/UI";

const LoginForm = () => {
  return (
    <form className={`login ${classes.form}`}>
      <Input type="email" placeholder="Enter email" icon="alternate_email" />
      <Input type="password" placeholder="Enter password" icon="lock" />
      <Button style={{ height: "44px" }}>Submit Now</Button>
      <div className="info">
        Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
};

export default LoginForm;
