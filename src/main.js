import React, { Component, Fragment } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import CTA from "./components/cta";
import Showcase from "./components/showcase";
import Clients from "./components/clients";
import Why from "./components/roadmap";
import Team from "./components/team";
import Roadmap from "./components/roadmap";
import Statistics from "./components/statistics";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials"
import Home from "./components/home"




import  "./assets/css/main.css"



class Main extends Component {
  render() {
    return (
        <React.Fragment>
        <Navbar/>
        <Home/>
        <Clients/>
        <Testimonials/>
        <Services/>
        <Showcase/>
        <Roadmap/>
        <Statistics/>
        <Team/>
        <CTA/>
        <Footer/>
        </React.Fragment>
    )
  }
}
 
export default Main;