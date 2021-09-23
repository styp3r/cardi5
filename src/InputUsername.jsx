import React from 'react';

function InputUsername(){

    return(
    <div className="App">
        <p className = "defaultLink">kardi.com/</p>
        <input className = "enterUsername" type = "text" placeholder = "your username"/>
        <button className = "createLink">Create Link</button>
    </div>
    );
}

export default InputUsername;