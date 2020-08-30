import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';


const NavBar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleprofile=()=>{
        props.history.push('/profile');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#raiNavbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">How-You-Did</a>

            <div className="collapse navbar-collapse" id="raiNavbar">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                
                <li className="nav-item">
                    <a className="nav-link"><Link to='/'>Home</Link><span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link to='/create'>Write</Link><span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleClick}>{props.username}<span className="sr-only">(current)</span></a>
                    
                    <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                        <MenuItem onClick={handleprofile}>Profile</MenuItem>
                        <MenuItem onClick={props.logout}>Logout</MenuItem>
                    </Menu>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

export default NavBar;
