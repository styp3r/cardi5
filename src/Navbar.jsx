import React from 'react';
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <div className = "navbar">
            <div className = "leftSection">
                <Link className = "createlink" to = "/createlink">Create Link</Link>
                <Link className = "pricing" to = "/pricing">Pricing</Link>
            </div>
            <div className = "rightSection">
                <Link className = "login" to = "/login">Log In</Link>
                <Link className = "signup" to = "/signup">Sign Up</Link>
            </div>
        </div>
    );
}

export default Navbar;