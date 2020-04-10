import React, { Component } from "react";
import Logo from "../assets/img/logo.png"
import MenuIcon from "../assets/img/menu_icon.svg"
import MenuIconRed from "../assets/img/menu_red.svg"

import Menu from "./menu.js"

import  "../assets/css/navbar.css"



class Navbar extends Component {
  render() {
    return (
      <div className="nav-wrapper">
          <div className="navbar">
              <div className="logo">
              <img src={Logo} />
              </div>
              
              <ul className="navlinks">
                  <li>
                      <a>Home</a>
                  </li>
                  <li>
                      <a href="#services">Services</a>
                  </li>
                  <li>
                  <a>Showcase</a>
              </li>
              <li>
                  <a>Our Clients</a>
              </li>
              <li>
              <a>Our Team</a>
          </li>
          <li>
          <a>Roadmap</a>
      </li>
              </ul>
              
              <div className="menu">
             
              <button className="button">Get Quote</button>
              <img src={MenuIconRed} />
              </div>
          </div>
      </div>
    )
  }
}

export default Navbar;