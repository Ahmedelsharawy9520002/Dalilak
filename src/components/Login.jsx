// import "../styles/login.css";
// import githubLogo from "../assets/github_logo-removebg-preview.png";
// import googleLogo from "../assets/google_logo-removebg-preview.png";
// import { Link } from "react-router-dom";

// const InputField = ({ label, type, placeholder, icon }) => {
//   return (
//     <div className="input-wrapper">
//       <label className="input-label">{label}</label>
//       <div className="input-container">
//         <input
//           type={type}
//           placeholder={placeholder}
//           className="input-field"
//           required
//         />
//         <i className="material-symbols-rounded">{icon}</i>
//       </div>
//     </div>
//   );
// };

// const SocialLogin = () => {
//   return (
//     <div className="social-login">
//       <button className="social-button">
//         <img src={githubLogo} alt="Github" className="social-icon" /> GitHub
//       </button>

//       <button className="social-button">
//         <img src={googleLogo} alt="Google" className="social-icon" /> Google
//       </button>
//     </div>
//   );
// };

// const Login = () => {
//   return (
//     <div className="login-page">
//         <div className="app-container">
//         <div className="login-container">
//             <h1 className="welcome-title">Welcome Back</h1>
//             <p className="welcome-subtitle">Log in to your Dalilak account</p>

//             <form action="#" className="login-form">
//             <InputField label="Email Address" type="email" placeholder="you@example.com" icon="mail" />
//             <InputField label="Password" type="password" placeholder="********" icon="lock" />

//             <a href="#" className="forgot-pass-link">Forgot password</a>

//             <button className="login-button">
//                 Log In <span className="material-symbols-outlined">arrow_right_alt</span>
//             </button>
//             </form>

//             <p className="separator"><span>Or continue with</span></p>

//             <SocialLogin />

//             <p className="signup-text">
//             Don't have an account?{" "}
//             <Link to="/signup">Sign up</Link>
//             </p>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/login.css";
// import githubLogo from "../assets/github_logo-removebg-preview.png";
// import googleLogo from "../assets/google_logo-removebg-preview.png";
// import { Link, useNavigate } from "react-router-dom";

// const InputField = ({ label, type, placeholder, icon, name, value, onChange }) => {
//   return (
//     <div className="input-wrapper">
//       <label className="input-label">{label}</label>
//       <div className="input-container">
//         <input
//           type={type}
//           placeholder={placeholder}
//           className="input-field"
//           required
//           name={name}
//           value={value}
//           onChange={onChange}
//         />
//         <i className="material-symbols-rounded">{icon}</i>
//       </div>
//     </div>
//   );
// };

// const SocialLogin = () => {
//   return (
//     <div className="social-login">
//       <button className="social-button">
//         <img src={githubLogo} alt="Github" className="social-icon" /> GitHub
//       </button>

//       <button className="social-button">
//         <img src={googleLogo} alt="Google" className="social-icon" /> Google
//       </button>
//     </div>
//   );
// };

// const Login = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     axios
//       .get("http://localhost:3000/users")
//       .then((res) => {
//         const users = res.data;

//         const foundUser = users.find(
//           (user) =>
//             user.email === form.email &&
//             user.password === form.password
//         );

//         if (!foundUser) {
//           setError("Invalid email or password");
//         } else {
//           alert("Login successful ");
//           localStorage.setItem("user", JSON.stringify(foundUser)); // 👈 نحتفظ باليوزر
//           navigate("/Dalilak"); // 👈 التحويل لصفحة Home
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Error while logging in");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="login-page">
//       <div className="app-container">
//         <div className="login-container">
//           <h1 className="welcome-title">Welcome Back</h1>
//           <p className="welcome-subtitle">Log in to your Dalilak account</p>

//           <form className="login-form" onSubmit={handleSubmit}>
//             <InputField
//               label="Email Address"
//               type="email"
//               placeholder="you@example.com"
//               icon="mail"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//             />
//             <InputField
//               label="Password"
//               type="password"
//               placeholder="********"
//               icon="lock"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//             />

//             <a href="#" className="forgot-pass-link">Forgot password</a>

//             {error && (
//               <p style={{ color: "salmon", marginTop: "4px", fontSize: "0.9rem" }}>
//                 {error}
//               </p>
//             )}

//             <button className="login-button" type="submit" disabled={loading}>
//               {loading ? "Logging in..." : (
//                 <>
//                   Log In{" "}
//                   <span className="material-symbols-outlined">arrow_right_alt</span>
//                 </>
//               )}
//             </button>
//           </form>

//           <p className="separator"><span>Or continue with</span></p>

//           <SocialLogin />

//           <p className="signup-text">
//             Don't have an account?{" "}
//             <Link to="/signup">Sign up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;








import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import githubLogo from "../assets/github_logo-removebg-preview.png";
import googleLogo from "../assets/google_logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InputField = ({ label, type, placeholder, icon, name, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <div className="input-container">
        <input
          type={type}
          placeholder={placeholder}
          className="input-field"
          required
          name={name}
          value={value}
          onChange={onChange}
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
        <img src={githubLogo} alt="Github" className="social-icon" /> Github
      </button>

      <button className="social-button">
        <img src={googleLogo} alt="Google" className="social-icon" /> Google
      </button>
    </div>
  );
};

const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        const users = res.data;

        const foundUser = users.find(
          (user) =>
            user.email === form.email &&
            user.password === form.password    
        );

        if (!foundUser) {
          setError("Invalid email or password");
        } else {
          toast.success("Login successful");

          localStorage.setItem("user", JSON.stringify(foundUser));
          navigate("/Dalilak");
          props.setCurrentUser(foundUser.name)
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error while logging in");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-page">
      <div className="app-container">
        <div className="login-container">
          <h1 className="welcome-title">Welcome Back</h1>
          <p className="welcome-subtitle">Log in to your Dalilak account</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <InputField
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              icon="mail"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="********"
              icon="lock"
              name="password"
              value={form.password}
              onChange={handleChange}
            />

            <a href="#" className="forgot-pass-link">Forgot password</a>

            {error && (
              <p style={{ color: "salmon", marginTop: "4px", fontSize: "0.9rem" }}>
                {error}
              </p>
            )}

            <button className="login-button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : (
                <>
                  Log In{" "}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </>
              )}
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
