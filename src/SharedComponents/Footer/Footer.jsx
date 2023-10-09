import React from "react";
import "./Footer.scss";
import socialsFooter from "../../assets/socialsFooter.svg";

const Contacts = ["Request a Test Drive", "Book Car", "Career", "Contact Us"];

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-sub-container" id="section-contact">
        <div className="footer-subheading">Contact</div>
        {Contacts.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>

      <div className="footer-sub-container" id="section-address">
        <div className="footer-subheading">Xtremecars</div>
        <div>
          12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai -
          400705. Maharashtra, India. Phone: +91 (22) 612 800000
        </div>
      </div>

      <div className="footer-sub-container" id="section-legal">
        <div className="footer-subheading">Legal</div>
        <div>Legal Disclaimer/Imprint Privacy Policy Cookie Policy</div>
      </div>

      <div className="footer-sub-container" id="section-social">
        <div className="footer-subheading">Connect with us</div>
        <div>
          <img src={socialsFooter} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
