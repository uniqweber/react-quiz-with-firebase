import PropTypes from "prop-types";
import classes from "../../assets/css/Illustration.module.css";

const Illustration = ({ img, alt }) => {
  return (
    <div className={classes.illustration}>
      <img src={img} alt={alt} />
    </div>
  );
};

Illustration.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Illustration;
