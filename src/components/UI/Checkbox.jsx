import PropTypes from "prop-types";

const Checkbox = ({ children }) => {
  return (
    <label>
      <input type="checkbox" /> <span>{children}</span>
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Checkbox;
