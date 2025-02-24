import PropTypes from "prop-types";
import elementClasses from "../../assets/css/Element.module.css";

const Button = ({ children, className, ...rest }) => {
  return (
    <div className={`${elementClasses.button} ${className}`} {...rest}>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
