import Answers from "./quizComp/Answers";
import MiniPlayer from "./quizComp/MiniPlayer";
import ProgressBar from "./quizComp/ProgressBar";

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
