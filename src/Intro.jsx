import React from 'react';
import PhoneView from './images/phoneView.png';

function Intro(){
    return(
        <div className = "introContainer">
            <img src = {PhoneView} width = "450" height= "880"/>
        </div>
    );
}

export default Intro;