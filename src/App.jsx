import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/results/Result";

const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Quiz /> */}
        <Result />
      </Layout>
    </>
  );
};

export default App;
