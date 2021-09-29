import React from 'react';

//import HeroVideo from '../images/heroVideo.mp4';
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <div className = "heroContainer">
        <div className = "heroVideoContainer">
            <video className = "heroVideo" src = "" width = "400" height = "400" autoplay = "true" loop = "true"/>
        </div>
        <div className = "heroTextContainer">
            <h1 className = "heroHeader">Social media is fun,</h1>
            <h1 className = "heroHeader">Only when its <span className = "blue">simple.</span></h1>
            <p className = "heroIntro">Eliminating the hassle of sharing multiple links to the things that matter to you by providing a single platform to showcase your interests.</p>
            <Link to = "/create" className = "heroButton">Create Now For Free</Link>
        </div>
    </div>
    );
}

export default Hero;