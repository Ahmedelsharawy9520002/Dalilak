import React, { useState } from "react";
import "../styles/login.css";
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
    toast.info(`${provider} login coming soon`);
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

const Login = ({ setCurrentUser }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    const user = data.user;
    const userObj = {
      name: user.user_metadata?.full_name || user.email,
      email: user.email,
      role: user.user_metadata?.role || "user",
    };

    localStorage.setItem("user", JSON.stringify(userObj));
    setCurrentUser(userObj);
    toast.success("Login successful");
    navigate("/Home");
  };

  return (
    <PageWrapper>
      <div className="login-page">
        <div className="app-container">
          <div className="login-container">
            <h1 className="welcome-title">{t('auth.loginTitle')}</h1>
            <p className="welcome-subtitle">{t('auth.loginSub')}</p>

            <form className="login-form" onSubmit={handleSubmit}>
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

              <Link to="/forgot-password" className="forgot-pass-link text-decoration-none">
                {t('auth.forgot')}
              </Link>

              {error && (
                <p style={{ color: "salmon", marginTop: "4px", fontSize: "0.9rem" }}>
                  {error}
                </p>
              )}

              <button className="login-button" type="submit" disabled={loading}>
                {loading ? "Logging in..." : (
                  <>
                    {t('auth.loginBtn')}{" "}
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </>
                )}
              </button>
            </form>

            <p className="separator"><span>{t('auth.orContinue')}</span></p>

            <SocialLogin />

            <p className="signup-text">
              {t('auth.noAccount')}{" "}
              <Link to="/signup">{t('auth.signupBtn')}</Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
