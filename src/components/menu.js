import {useSpring, animated} from 'react-spring'
import React, { Component } from "react";


const Menu = ({toggled}) => {  
    const {x} = useSpring({
        x: toggled ? 0: 100
   
    })
    return (
    
        <animated.div className="nav-wrapper" style={{transform: x.interpolate(x =>`translate3d (${x * -1}%, 0, 0)`)}}>
            <nav>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>
                <a href="#">Home</a>

            </nav>
        </animated.div>
    )
}


export default Menu;