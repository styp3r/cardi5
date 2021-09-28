import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className = "navbarContainer">
            <Link to = "/">Home</Link>
            <Link to = "/create">Create</Link>
            <Link to = "/help">Help</Link>
            <Link to = "/search">Search</Link>
        </div>
    );
}

export default Navbar;