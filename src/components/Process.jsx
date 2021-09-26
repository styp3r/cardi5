import React from 'react';
import processBanner from '../images/processBanner.png';
function Process(){

    return(
        <div className = "processContainer">
            <img className = "process" src = {processBanner} width = "550" height = "500"/>
            <div className = "processText"> 
                <h2>How it works</h2>
                <ul>
                    <li>Create your personalized link with your own username.</li>
                    <li>Add your social media links that you want to share.</li>
                    <li>Customize and add your own themes.</li>
                    <li>Share.</li>
                </ul>
            </div>
        </div>
    );
}

export default Process;