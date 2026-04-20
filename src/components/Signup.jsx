import React, { useState } from "react";
import "../styles/signup.css";
import githubLogo from "../assets/github_logo-removebg-preview.png";
import googleLogo from "../assets/google_logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';
import PageWrapper from "./PageWrapper";
import { supabase } from "../supabaseClient";

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
  const handleSocialClick = (provider) => {
    toast.info(`${provider} sign up coming soon`);
  };

  return (
    <div className="social-login">
      <button className="social-button" type="button" onClick={() => handleSocialClick('GitHub')}>
        <img src={githubLogo} alt="Github" className="social-icon" /> GitHub
      </button>
      <button className="social-button" type="button" onClick={() => handleSocialClick('Google')}>
        <img src={googleLogo} alt="Google" className="social-icon" /> Google
      </button>
    </div>
  );
};

const Signup = ({ setCurrentUser }) => {
  const { t } = useTranslation();
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
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const { data, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.fullName,
          role: form.email === "admin@dalilak.com" ? "admin" : "user",
        },
      },
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    toast.success("Account created! Please check your email to confirm your account.");
    navigate("/login");

    setForm({ fullName: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <PageWrapper>
      <div className="signup-page">
        <div className="app-container">
          <div className="signup-container">
            <h1 className="welcome-title">{t('auth.signupTitle')}</h1>
            <p className="welcome-subtitle">{t('auth.signupSub')}</p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <InputField
                label={t('auth.fullName')}
                type="text"
                placeholder="John Doe"
                icon="person"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
              />
              <InputField
                label={t('auth.email')}
                type="email"
                placeholder="you@example.com"
                icon="mail"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <InputField
                label={t('auth.password')}
                type="password"
                placeholder="********"
                icon="lock"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <InputField
                label={t('auth.confirmPass')}
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

            <p className="separator"><span>{t('auth.orSignup')}</span></p>

            <SocialLogin />

            <p className="signup-text">
              {t('auth.haveAccount')}{" "}
              <Link to="/login">{t('auth.loginBtn')}</Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Signup;
