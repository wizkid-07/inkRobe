import React, { Component } from "react";
import CTAad from "../assets/img/CTA.png"
import  "../assets/css/navbar.css"
import { Col, Row, Container, Card, Image } from 'react-bootstrap';

class CTA extends Component {
  render() {
    return (
      <div className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-left-text">
        <h1>Customize your clothing now</h1>
        <p>Explore our variety of customisation options and design on your own</p>
        </div>
        <div className="cta-right-buttons">
        <button className="button">Customize Now</button>
        </div>
      </div>
      </div>
    )
  }
}
 
export default CTA;