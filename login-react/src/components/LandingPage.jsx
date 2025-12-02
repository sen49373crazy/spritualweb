import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <FaGraduationCap className="logo-icon" />
          <span>Manthan</span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-actions">
          <Link to="/login" className="btn-login-nav">Login</Link>
          <Link to="/login" className="btn-signup-nav">Get Started</Link>
        </div>
      </nav>

      <header className="hero-section" id="home">
        <div className="hero-content">
          <h1>Unlock Your Potential with <span className="highlight">Manthan</span></h1>
          <p>The ultimate Learning Management System designed to empower students and educators alike. Experience seamless learning today.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Start Learning <FaArrowRight /></Link>
            <button className="btn-secondary">View Courses</button>
          </div>
        </div>
        <div className="hero-image">
           {/* Abstract shapes or illustration placeholder */}
           <div className="hero-shape shape-1"></div>
           <div className="hero-shape shape-2"></div>
           <div className="floating-card card-1">
              <FaChalkboardTeacher />
              <span>Expert Tutors</span>
           </div>
           <div className="floating-card card-2">
              <FaChartLine />
              <span>Track Progress</span>
           </div>
        </div>
      </header>

      <section className="features-section" id="features">
        <h2>Why Choose Manthan?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <FaChalkboardTeacher />
            </div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry experts and experienced educators who are passionate about teaching.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <FaGraduationCap />
            </div>
            <h3>Interactive Learning</h3>
            <p>Engage with interactive content, quizzes, and assignments to reinforce your knowledge.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <FaChartLine />
            </div>
            <h3>Progress Tracking</h3>
            <p>Monitor your progress with detailed analytics and personalized feedback.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <FaGraduationCap />
              <span>Manthan</span>
            </div>
            <p>Empowering education for everyone, everywhere.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Manthan LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
