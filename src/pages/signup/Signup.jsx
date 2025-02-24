import SignupIllustration from "../../components/shared/Illustration";
import SignupForm from "./signupComp/SignupForm";
import signupImg from "../../assets/images/signup.svg";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <SignupIllustration img={signupImg} alt="signup illustration" />
        
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
