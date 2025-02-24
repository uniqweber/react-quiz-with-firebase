import Layout from "./components/layout/Layout";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";

const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <Signup />
        {/* <Login /> */}
      </Layout>
    </>
  );
};

export default App;
