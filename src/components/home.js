import React, { Component, Fragment } from "react";
import "../assets/css/main.css"
import Bg from "../assets/img/bg.mp4"
import OBg from "../assets/img/official_bg.mp4"
import ProcessArrow from "../assets/img/process_arrow.png"
import NextArrow from "../assets/img/next.png"
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        

        <div className="home-wrapper">
        <video className="bg-vid" autoplay="autoplay" muted loop="loop" id="myVideo">
        <source src={Bg} type="video/mp4" ></source>
        </video>
        <div className="left-wrapper">
        </div>
        <div className="right-wrapper">
        </div>
          <div className="left-content">
            <div className="container-text-left">
              <h2>premium</h2>
              <h1>fashion</h1>
              <h2>brand</h2>
              <b>#MADE IN INDIA</b>
              <p>CSS grid layout or CSS grid is a technique in Cascading Style Sheets that allows web developers to create complex responsive web design layouts more easily and consistently across browsers. There have been other methods for controlling web page layout methods, such as tables, the box model, and CSS flex box.</p>

            </div>
          </div>
          <div className="right-content">
            <div className="container-text-right">
              <h2>Get Robed</h2>
              <h1>NOW</h1>
              <div className="button-set">
                <button className="button">Get Started</button>
                <b>Our Process</b>
                <img src={ProcessArrow} />
              </div>
            </div>

          </div>

        </div>
        
   
    




      </React.Fragment>
    )
  }
}

export default Home;