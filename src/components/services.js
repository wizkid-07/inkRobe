import React, { Component, Fragment } from "react";
import "../assets/css/services.css"
import Wholesale from "../assets/img/wholesale.svg"
import Retail from "../assets/img/retail.svg"
import Custom from "../assets/img/tshirt.svg"


const data = {
  wholesale_desc: "We love nothing more than working on a great design with a fantastic customer.And we take pride in the products we deliver. Fabric quality depends upon the customers requirements."
}



class Services extends Component {
  render() {
    return (
      <React.Fragment >
      <div className="services-wrapper">
      <h1>OUR SERVICES</h1>
      <div className="services-container">
      <div className="services-card">
          <img src={Wholesale}/>
          <h2>Wholesale</h2>
          <p>We love nothing more than working on a great design with a fantastic customer.And we take pride in the products we deliver. Fabric quality depends upon the customers requirements.</p>
      </div>
      <div className="services-card">
      <img src={Retail}/>

          <h2>Retail</h2>
          <p>We love nothing more than working on a great design with a fantastic customer.And we take pride in the products we deliver. Fabric quality depends upon the customers requirements.</p>
      </div>
      <div className="services-card">
      <img src={Custom}/>

          <h2>Customisation</h2>
          <p>We love nothing more than working on a great design with a fantastic customer.And we take pride in the products we deliver. Fabric quality depends upon the customers requirements.</p>
      </div>
  </div>
      </div>
      </React.Fragment>

    )
  }
}

export default Services;