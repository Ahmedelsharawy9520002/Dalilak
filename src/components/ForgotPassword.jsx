import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageWrapper from './PageWrapper';
import '../styles/login.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock an API request
    setTimeout(() => {
      toast.success("Password reset link sent to your email!");
      setLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <PageWrapper>
      <div className="login-page">
        <div className="app-container">
          <div className="login-container">
            <h1 className="welcome-title">Reset Password</h1>
            <p className="welcome-subtitle">Enter your email to receive a reset link</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label className="input-label">Email Address</label>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="input-field"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i className="material-symbols-rounded">mail</i>
                </div>
              </div>

              <button className="login-button mt-4" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <p className="signup-text mt-4">
              Remembered your password? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ForgotPassword;
