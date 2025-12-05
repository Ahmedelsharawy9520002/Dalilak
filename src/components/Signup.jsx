import "../styles/signup.css";
import githubLogo from "../assets/github_logo-removebg-preview.png";
import googleLogo from "../assets/google_logo-removebg-preview.png";
import { Link } from "react-router-dom";

const InputField = ({ label, type, placeholder, icon }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <div className="input-container">
        <input
          type={type}
          placeholder={placeholder}
          className="input-field"
          required
        />
        <i className="material-symbols-rounded">{icon}</i>
      </div>
    </div>
  );
};

const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        <img src={githubLogo} alt="Github" className="social-icon" /> GitHub
      </button>

      <button className="social-button">
        <img src={googleLogo} alt="Google" className="social-icon" /> Google
      </button>
    </div>
  );
};

const Signup = () => {
  return (
    <div className="signup-page">
        <div className="app-container">
        <div className="signup-container">
            <h1 className="welcome-title">Create Account</h1>
            <p className="welcome-subtitle">Join thousands learning computer science</p>

            <form action="#" className="signup-form">
            <InputField label="Full Name" type="text" placeholder="John Doe" icon="person" />
            <InputField label="Email Address" type="email" placeholder="you@example.com" icon="mail" />
            <InputField label="Password" type="password" placeholder="********" icon="lock" />
            <InputField label="Confirm Password" type="password" placeholder="********" icon="lock" />

            <button className="signup-button">
                Sign Up <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
            </form>

            <p className="separator"><span>Or sign up with</span></p>

            <SocialLogin />

            <p className="signup-text">
            Already have an account?{" "}
            <Link to="/login">Log in</Link>
            </p>
        </div>
        </div>
    </div>
  );
};

export default Signup;
