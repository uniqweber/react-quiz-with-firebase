import LoginIllustration from "../../components/shared/Illustration";
import loginImg from "../../assets/images/login.svg";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <LoginIllustration img={loginImg} alt="login illustration" />
      </div>
    </>
  );
};

export default Login;
