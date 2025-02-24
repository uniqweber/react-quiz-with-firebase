import PropTypes from "prop-types";
import elementClasses from "../../assets/css/Element.module.css";

const Button = ({ children, ...rest }) => {
  return (
    <div className={elementClasses.button} {...rest}>
      <span>{children}</span>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
