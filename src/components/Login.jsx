import "../styles/login.css";
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

const Login = () => {
  return (
    <div className="login-page">
        <div className="app-container">
        <div className="login-container">
            <h1 className="welcome-title">Welcome Back</h1>
            <p className="welcome-subtitle">Log in to your Dalilak account</p>

            <form action="#" className="login-form">
            <InputField label="Email Address" type="email" placeholder="you@example.com" icon="mail" />
            <InputField label="Password" type="password" placeholder="********" icon="lock" />

            <a href="#" className="forgot-pass-link">Forgot password</a>

            <button className="login-button">
                Log In <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
            </form>

            <p className="separator"><span>Or continue with</span></p>

            <SocialLogin />

            <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup">Sign up</Link>
            </p>
        </div>
        </div>
    </div>
  );
};

export default Login;
