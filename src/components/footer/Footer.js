import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Hussain
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Basic Details</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/shahadat.hussain.5602" target="blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/i_am_shahadathussain/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/Shahadat757" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shahadat. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;