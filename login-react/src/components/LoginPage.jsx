import React, { useState, useEffect } from 'react';
import { FaLayerGroup, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaGithub, FaApple } from 'react-icons/fa';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  useEffect(() => {
    if (touched.email) {
      if (!email) {
        setErrors(prev => ({ ...prev, email: '' }));
      } else if (!validateEmail(email)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }
  }, [email, touched.email]);

  useEffect(() => {
    if (touched.password) {
      if (password.length > 0) {
        setErrors(prev => ({ ...prev, password: '' }));
      }
    }
  }, [password, touched.password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert('Login Successful! (Demo)');
        setEmail('');
        setPassword('');
        setTouched({ email: false, password: false });
      }, 2000);
    }
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <div className="login-page-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="login-container">
        <div className="login-header">
          <div className="logo">
            <FaLayerGroup />
          </div>
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
              required
              autoComplete="off"
            />
            <label htmlFor="email">Email Address</label>
            <FaEnvelope className="input-icon" />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className={`input-group ${errors.password ? 'error' : ''}`}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
              required
            />
            <label htmlFor="password">Password</label>
            <FaLock className="input-icon" />
            <div 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="form-actions">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <a href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', fontSize: '0.9rem' }}>&larr; Back to Home</a>
          </div>

          <button 
            type="submit" 
            className={`btn-login ${isLoading ? 'loading' : ''}`}
            onClick={createRipple}
            disabled={isLoading}
          >
            <span className="btn-text">Sign In</span>
            <span className="loader"></span>
          </button>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn-social google" onClick={createRipple}>
              <FaGoogle />
            </button>
            <button type="button" className="btn-social github" onClick={createRipple}>
              <FaGithub />
            </button>
            <button type="button" className="btn-social apple" onClick={createRipple}>
              <FaApple />
            </button>
          </div>

          <p className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
