import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#raiNavbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <Link to='/' style={{textDecoration:"none"}}><h3>How-You-Did</h3></Link>

            <div class="collapse navbar-collapse" id="raiNavbar">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <Link to="/login" style={{textDecoration:"none",color:"white"}} class="nav-link" data-toggle="modal" data-target="#LoginModal">Login</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;
