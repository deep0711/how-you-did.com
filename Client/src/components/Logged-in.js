import React from 'react';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const Home=(props)=>{

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const largeIcon= {
          color:'black',
          marginTop:13,
          width: 40,
          height: 40,
    }

    const style=  {
        color:'black',
        fontFamily:"cursive"
    }

    return(
        <nav className="nav-wrapper white">
            <div className="container">
                <a style={style} href='/' className="brand-logo">How-You-Did</a>
                    <ul className="right">
                        <li> <AccountCircleIcon style={largeIcon}></AccountCircleIcon></li>
                        <Button style={style} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                            {props.username}
                        </Button>
                        <Menu id="fade-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={props.logout}>Logout</MenuItem>
                        </Menu>
                    </ul>
            </div>
        </nav>    
    )
}

export default Home;