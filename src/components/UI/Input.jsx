import elementClasses from "../../assets/css/Element.module.css";
import PropTypes from "prop-types";

const Input = ({ icon, ...rest }) => {
  return (
    <div className={elementClasses.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Input;
