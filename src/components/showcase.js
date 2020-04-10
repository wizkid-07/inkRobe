import React, { Component } from "react";
import Member from "../assets/img/logo.png"
import DemoImg from "../assets/img/demo_shirt.jpg"


class Showcase extends Component {
  render() {
    return (
      <div className="showcase-wrapper">
      <h1>S H O W C A S E</h1>
        <div className="showcase-scroll">
          <div className="showcase-container">
            <div className="showcase-card">
              <img src={DemoImg} />
              <div className="showcase-info">
                <h3>Casual Tee</h3>
                <p>Enhance your look with this Multi colour Tee</p>
                <button className="button">BUY NOW</button>

              </div>
            </div>
            <div className="showcase-card">
              <img src={DemoImg} />
              <div className="showcase-info">
              <h3>Casual Tee</h3>
              <p>Enhance your look with this Multi colour Tee</p>
                <button className="button">BUY NOW</button>
              </div>
            </div>
            
            <div className="showcase-card">
              <img src={DemoImg} />
              <div className="showcase-info">
              <h3>Casual Tee</h3>
              <p>Enhance your look with this Multi colour Tee</p>
                <button className="button">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Showcase;