import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/results/Result";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="result" element={<Result />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
