import React from "react";

export default function FooterM() {
  return (
    <div className="promo">
      <div className="title">
        <div className="footer-container">
          <div className="footer-box">
            <h3>Exclusive Car Rental</h3>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <h3>(+123) - 456 - 789</h3>
            <h3>carrental@gmail.com</h3>
            <h3>Design by xPrimoStudio</h3>
          </div>
          <div className="footer-box links">
            <h3>COMPANY</h3>
            <h3>London, UK</h3>
            <h3>Carrers</h3>
            <h3>Mobile</h3>
            <h3>Blog</h3>
            <h3>How we work</h3>
          </div>
          <div className="footer-box">
            <h3>WORKING HOURS</h3>
            <h3>Mon - Fri: 9:00AM - 9:00PM</h3>
            <h3>Sat: 9:00AM - 19:00PM</h3>
            <h3>Sun: 9:00AM - 16:00PM</h3>
          </div>
          <div className="footer-box">
            <h3>SUBSCRIPTION</h3>
            <p>Subscribe your Email address for latest news & updates.</p>
            <input placeholder="Enter your email" />
            <button className="btn ">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
