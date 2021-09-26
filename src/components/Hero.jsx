import React from 'react';
import heroImage from '../images/heroImage.jpg';

function Hero(){
    return(
        <div className = "heroContainer">
            <img className = "heroImage" src = {heroImage} width = "600" height= "400"/>
            <div className = "heroText">
                <h1 className = "heroPrimary">Simplifying how you socialize.</h1>
                <p className = "heroSecondary">One link at a time.</p>
                <div className = "heroInput">
                    <p className = "linkPrefix">www.kardi.com/</p>
                    <input className = "createLinkInput" placeholder = "your username"/>
                    <button className = "createLinkBtn">Create</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;