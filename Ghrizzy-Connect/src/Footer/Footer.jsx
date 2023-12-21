import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer-div">
      <div className="footer-div-cont">
        <div className="Footer-div-column">
          <p>Use Ghrizzy-Connect</p>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Create Event</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Market Place</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="Footer-div-column">
          <p>Popular Categories</p>
          <ul>
            <li>
              <a href="">Music Event</a>
            </li>
            <li>
              <a href="">Comedy Event</a>
            </li>
            <li>
              <a href="">Social Event</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
          </ul>
        </div>
        <div className="Footer-div-column">
          <p>Connect With Us</p>
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div className="footer-bottom">
        <p>© 2023 Ghrizzy-Connect</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
