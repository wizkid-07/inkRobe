import React, { Component } from "react";
import Client from "../assets/img/profile-pic.jpg"
import Quote from "../assets/img/quote.png"

import "../assets/css/navbar.css"
import { Col, Row, Container, Card, Image } from 'react-bootstrap';

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials-wrapper">
       <div className="showcase-scroll">
       <div className="testimonials-container">
       <div className="testimonials-card">
         <div className="testimonials-client">
           <div className="team-img">
           <img src={Client} />
           </div>
           <div className="testimonials-client-info">
             <h2>Lea Dork</h2>
             <p>Manager, Maersk</p>
           </div>
         </div>
         <i>"Competently disintermediate goal-oriented interfaces after cross-unit action items. Compellingly fabricate accurate architectures via timely products. Credibly administrate prospective paradigms vis-a-vis virtual manufactured products. Conveniently redefine premium supply chains before cross-platform meta-services"</i>
         <img src={Quote} />
       </div>
       <div className="testimonials-card">
         <div className="testimonials-client">
         <div className="team-img">
         <img src={Client} />
         </div>
           <div className="testimonials-client-info">
           <h2>Lea Dork</h2>
           <p>Manager, Maersk</p>
           </div>
         </div>
         <i>"Competently disintermediate goal-oriented interfaces after cross-unit action items. Compellingly fabricate accurate architectures via timely products. Credibly administrate prospective paradigms vis-a-vis virtual manufactured products. Conveniently redefine premium supply chains before cross-platform meta-services"</i>
         <img src={Quote} />
       </div>
       <div className="testimonials-card">
         <div className="testimonials-client">
         <div className="team-img">
         <img src={Client} />
         </div>
           <div className="testimonials-client-info">
           <h2>Lea Dork</h2>
           <p>Manager, Maersk</p>
           </div>
         </div>
         <i>"Competently disintermediate goal-oriented interfaces after cross-unit action items. Compellingly fabricate accurate architectures via timely products. Credibly administrate prospective paradigms vis-a-vis virtual manufactured products. Conveniently redefine premium supply chains before cross-platform meta-services"</i>
         <img src={Quote} />
       </div>
     </div>
       </div>
      </div>
    )
  }
}

export default Testimonials;