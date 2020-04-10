import React, { Component } from "react";
import Logo from "../assets/img/logo.png"
import  "../assets/css/navbar.css"

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
      <div className="footer-container-info">
          <div className="footer-logo">
          <img src={Logo}/>
          </div>
          <div className="footer-store-address">
          <h3>OUR STORE</h3>
          <p>1st Floor, 95/302, West, Mudichur Road, Tambaram, Chennai - 600045</p>
          </div>
          <div className="footer-office-address">
          <h3>OUR STORE</h3>
          <p>No. 1, 2nd Cross Street, 6th Main Road Kurinji Nagar Chennai - 600063</p>
          </div>
          <div className="footer-links">
          <h3>LINKS</h3>
          <ul>
          <li>
          <a>Terms & Conditions</a>
      </li>
              <li>
                  <a>Privacy Policy</a>
              </li>
          </ul>
          </div>
      </div>
            <div className="footer-container">
              <p>Copyright © InkRobe 2020. All Rights Reserved</p>
              <p>Developed by Zevo Corporation</p>
            </div>
      </div>
    )
  }
}
 
export default Footer;