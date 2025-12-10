// import "../styles/signup.css";
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

// const Signup = () => {
//   return (
//     <div className="signup-page">
//         <div className="app-container">
//         <div className="signup-container">
//             <h1 className="welcome-title">Create Account</h1>
//             <p className="welcome-subtitle">Join thousands learning computer science</p>

//             <form action="#" className="signup-form">
//             <InputField label="Full Name" type="text" placeholder="John Doe" icon="person" />
//             <InputField label="Email Address" type="email" placeholder="you@example.com" icon="mail" />
//             <InputField label="Password" type="password" placeholder="********" icon="lock" />
//             <InputField label="Confirm Password" type="password" placeholder="********" icon="lock" />

//             <button className="signup-button">
//                 Sign Up <span className="material-symbols-outlined">arrow_right_alt</span>
//             </button>
//             </form>

//             <p className="separator"><span>Or sign up with</span></p>

//             <SocialLogin />

//             <p className="signup-text">
//             Already have an account?{" "}
//             <Link to="/login">Log in</Link>
//             </p>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/signup.css";
// import githubLogo from "../assets/github_logo-removebg-preview.png";
// import googleLogo from "../assets/google_logo-removebg-preview.png";
// import { Link } from "react-router-dom";

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

// const Signup = () => {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // أي تغيير في أي input
//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     // تأكيد الباسورد
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setLoading(true);

//     // إرسال البيانات لـ json-server على http://localhost:3000/users
//     axios
//       .post("http://localhost:3000/users", {
//         name: form.fullName,
//         email: form.email,
//         password: form.password,
//       })
//       .then((res) => {
//         console.log("Signed up user:", res.data);
//         alert("Account created successfully ✅");

//         // تفضّلي: امسحي الفورم بعد التسجيل
//         setForm({
//           fullName: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//         });
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Error while signing up");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="signup-page">
//       <div className="app-container">
//         <div className="signup-container">
//           <h1 className="welcome-title">Create Account</h1>
//           <p className="welcome-subtitle">Join thousands learning computer science</p>

//           <form className="signup-form" onSubmit={handleSubmit}>
//             <InputField
//               label="Full Name"
//               type="text"
//               placeholder="John Doe"
//               icon="person"
//               name="fullName"
//               value={form.fullName}
//               onChange={handleChange}
//             />
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
//             <InputField
//               label="Confirm Password"
//               type="password"
//               placeholder="********"
//               icon="lock"
//               name="confirmPassword"
//               value={form.confirmPassword}
//               onChange={handleChange}
//             />

//             {error && (
//               <p style={{ color: "salmon", marginTop: "4px", fontSize: "0.9rem" }}>
//                 {error}
//               </p>
//             )}

//             <button className="signup-button" type="submit" disabled={loading}>
//               {loading ? "Signing up..." : (
//                 <>
//                   Sign Up{" "}
//                   <span className="material-symbols-outlined">arrow_right_alt</span>
//                 </>
//               )}
//             </button>
//           </form>

//           <p className="separator"><span>Or sign up with</span></p>

//           <SocialLogin />

//           <p className="signup-text">
//             Already have an account?{" "}
//             <Link to="/login">Log in</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;









import React, { useState } from "react";
import axios from "axios";
import "../styles/signup.css";
import githubLogo from "../assets/github_logo-removebg-preview.png";
import googleLogo from "../assets/google_logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
        <img src={githubLogo} alt="Github" className="social-icon" /> GitHub
      </button>

      <button className="social-button">
        <img src={googleLogo} alt="Google" className="social-icon" /> Google
      </button>
    </div>
  );
};

const Signup = (props) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    axios
      .post("http://localhost:3000/users", {
        name: form.fullName,
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        console.log("Signed up user:", res.data);
        toast.success("Account created successfully");
        navigate("/Dalilak");

        props.setCurrentUser(form.fullName)

        setForm({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        console.error(err);
        setError("Error while signing up");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="signup-page">
      <div className="app-container">
        <div className="signup-container">
          <h1 className="welcome-title">Create Account</h1>
          <p className="welcome-subtitle">Join thousands learning computer science</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              icon="person"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
            />
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
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="********"
              icon="lock"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            {error && (
              <p style={{ color: "salmon", marginTop: "4px", fontSize: "0.9rem" }}>
                {error}
              </p>
            )}

            <button className="signup-button" type="submit" disabled={loading}>
              {loading ? "Signing up..." : (
                <>
                  Sign Up{" "}
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </>
              )}
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

