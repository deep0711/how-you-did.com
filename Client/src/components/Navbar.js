import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi';
import {IconContext} from 'react-icons';
import '../css/Navbar.css';

function Navbar(props) {
    const [sidebar , setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    if(!props.username)
    {
        return(
            <IconContext.Provider value = { {color : '#00b300' } }>
                <div className = "navbar">
                    <Link to = "#" className = "menu-bars" style={{marginTop:"-14px"}} >
                        <FaIcons.FaBars onClick = {showSidebar} />
                    </Link>
                    <ul class="navbar-nav mr-auto" style={{marginLeft:"5px",marginTop:"0px"}}>
                        <li class="nav-item active">
                            <h3>How-You-Did</h3>
                        </li>
                        
                    </ul>
                    
                </div>
                <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className = "nav-menu-items" onClick = {showSidebar}>
                        <li className = 'navbar-toggle'>
                            <Link to = "#" className = "menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        <li className = "navbar-toggle" onClick = {props.logout}>
                            <Link to = "/login" className = "nav-text" style={{textDecoration:"none"}}>
                                <FiIcons.FiLogIn className = "largeicon"/>
                                <span>Login</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
             </IconContext.Provider>           
        )
    }
    else
        return(
        <>
            <IconContext.Provider value = { {color : '#00b300' } }>
                <div className = "navbar">
                    <Link to = "#" className = "menu-bars" style={{marginTop:"-14px"}}>
                        <FaIcons.FaBars onClick = {showSidebar} />
                    </Link>
                    <ul class="navbar-nav mr-auto" style={{marginLeft:"5px",marginTop:"0px"}}>
                        <li class="nav-item active">
                            <h3>How-You-Did</h3>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <Link to = "/" className = "nav-text" style={{textDecoration:"none"}}>
                            <BiIcons.BiHomeHeart className = "largeicon"/>
                            
                        </Link>
                        
                    </ul>
                </div>
                <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className = "nav-menu-items" onClick = {showSidebar}>
                        <li className = 'navbar-toggle'>
                            <Link to = "#" className = "menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>

                        
                        <h4 style = {{margin : "30px"}}> Hi ! {props.username} </h4>
                        
                        <div className="side-data" style={{marginLeft:"13px"}}>
                        <li className = "navbar-toggle">
                            <Link to = "/profile" className = "nav-text" style={{textDecoration:"none"}}>
                                <CgIcons.CgProfile className = "largeicon"/>
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className = "navbar-toggle" >
                            <Link to = "/create" className = "nav-text" style={{textDecoration:"none"}}>
                                <IoIcons.IoIosCreate className = "largeicon"/>
                                <span>Write a Post</span>
                            </Link>
                        </li>
                        <li className = "navbar-toggle" >
                            <Link to = "/trending" className = "nav-text" style={{textDecoration:"none"}}>
                                <RiIcons.RiFireLine className = "largeicon"/>
                                <span>Trending</span>
                            </Link>
                        </li>
                        
                        <li className = "navbar-toggle" onClick = {props.logout}>
                            <Link to = "#" className = "nav-text" style={{textDecoration:"none"}}>
                                <FiIcons.FiLogOut className = "largeicon"/>
                                <span>Logout</span>
                            </Link>
                        </li>
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
        )
}
export default Navbar;