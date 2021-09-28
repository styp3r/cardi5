import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){



    return(
        <div className = "navbarContainer">
            <div className = "navbar">
                <Link className = "navItem" to = "/"><i class="fas fa-home"></i></Link>
                <Link className = "navItem" to = "/create"><i class="fas fa-plus-circle"></i></Link>
                <Link className = "navItem" to = "/help"><i class="fas fa-question-circle"></i></Link>
                <Link className = "navItem" to = "/search"><i class="fas fa-search"></i></Link>
            </div>
        </div>
    );
}

export default Navbar;