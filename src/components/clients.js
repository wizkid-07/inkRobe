import React, { Component } from "react";
import Client1 from "../assets/img/client1.png"
import Client2 from "../assets/img/client2.png"
import Client3 from "../assets/img/client3.png"
import Client4 from "../assets/img/client4.png"
import Client5 from "../assets/img/client5.png"
import Client6 from "../assets/img/client6.png"
import Client7 from "../assets/img/client7.png"
import Client8 from "../assets/img/client8.png"
import Client9 from "../assets/img/client9.png"

class Clients extends Component {
  render() {
    return (
      <div className="clients-wrapper">
        <div className="clients-title">
          <h2>our</h2>
          <h1>clients</h1>
        </div>
        <div className="clients-logo">
          <div className="clients-logo-scroll">
            <marquee behavior="scroll" direction="left">
            <div className="clients-logo-container">
              <img src={Client1} />
              <img src={Client2} />
              <img src={Client3} />
              <img src={Client4} />
              <img src={Client5} />
              <img src={Client6} />
              <img src={Client7} />
              <img src={Client8} />
              <img src={Client9} />
            </div>
            </marquee>
          </div>
        </div>
      </div>
    )
  }
}

export default Clients;