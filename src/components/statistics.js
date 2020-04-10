import React, { Component } from "react";
import Logo from "../assets/img/logo.png"
import  "../assets/css/navbar.css"
import { Col, Row, Container, Card, Image, Form, Button } from 'react-bootstrap';

class Statistics extends Component {
  render() {
    return (
      <div className="stats-wrapper">
      <div className="stats-container">
          <div className="stats">
              <h1>100+</h1>
              <h5>T-Shirts Printed</h5>
          </div>
          <div className="stats">
              <h1>1000+</h1>
              <h5>Happy Customers</h5>
          </div>
          <div className="stats">
              <h1>10+</h1>
              <h5>Companies</h5>
          </div>
          <div className="stats">
              <h1>10+</h1>
              <h5>Flash Sales</h5>
          </div>
      </div>
      </div>
    )
  }
}
 
export default Statistics;