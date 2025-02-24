import LoginIllustration from "../../components/shared/Illustration";
import loginImg from "../../assets/images/login.svg";
import LoginForm from "./loginComp/LoginForm";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <LoginIllustration img={loginImg} alt="login illustration" />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
