import { Link } from "react-router";
import classes from "../../../assets/css/Form.module.css";
import { Button, Checkbox, Input } from "../../../components/UI";

const SignupForm = () => {
  return (
    <form className={`signup ${classes.form}`}>
      <Input type="text" placeholder="Enter name" icon="person" />
      <Input type="email" placeholder="Enter email" icon="alternate_email" />
      <Input type="password" placeholder="Enter password" icon="lock" />
      <Input type="password" placeholder="Confirm password" icon="lock_clock" />
      <Button style={{ height: "44px" }}>Submit Now</Button>
      <Checkbox>I agree to the Terms & Conditions</Checkbox>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default SignupForm;
