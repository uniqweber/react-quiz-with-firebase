import PropTypes from "prop-types";

const Checkbox = ({ children, className, id }) => {
  return (
    <label className={className} htmlFor={id}>
      <input id={id} type="checkbox" /> <span>{children}</span>
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Checkbox;
