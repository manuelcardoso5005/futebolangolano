import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer-area">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a company dedicated to providing high-quality services and
            products.
          </p>
          <p>© 2023 Your Company Name. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Desenvolvido por Manuel Cardoso</p>
      </div>
    </footer>
  );
};

export default Footer;
