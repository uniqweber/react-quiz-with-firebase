import thumb from "../../../assets/images/3.jpg";
import classes from "../../../assets/css/video.module.css";
import { Link } from "react-router";

const Video = () => {
  return (
    <Link to="/quiz">
      <div className={classes.video}>
        <img src={thumb} alt="Thumb" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
