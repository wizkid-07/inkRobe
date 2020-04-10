import React, { Component } from "react";
import "../assets/css/hero.css"
import SliderImg from "../assets/img/slider.png"
import SliderIcon from "../assets/img/circle.svg"
import { Carousel } from 'react-bootstrap';

class Hero extends Component {
  render() {
    return (
      <Carousel id="home">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg}
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImg}
            alt="Third slide"
          />

         
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Hero;