import classes from "../../../assets/css/Result.module.css";
import quizClasses from "../../../assets/css/Quiz.module.css";
import { Checkbox } from "../../../components/UI";

const Question = () => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <div className={quizClasses.answers}>
        <Checkbox className={quizClasses.answer} id={"option-1"}>
          A New Hope 1
        </Checkbox>
      </div>
    </div>
  );
};

export default Question;
