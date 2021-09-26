import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className = "navbarContainer">
            <Link to = "/">Home</Link>
            <Link to = "/createlink">Create Link</Link>
        </div>
    );
}

export default Navbar;