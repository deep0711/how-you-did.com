import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons';
import './Navbar.css';

function Navbar(props) {
    const [sidebar , setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
            <IconContext.Provider value = { {color : '#ffffff' } }>
                <div className = "navbar">
                    <Link to = "#" className = "menu-bars">
                        <FaIcons.FaBars onClick = {showSidebar} />
                    </Link>
                </div>
                <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className = "nav-menu-items" onClick = {showSidebar}>
                        <li className = 'navbar-toggle'>
                            <Link to = "#" className = "menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        <h4 style = {{margin : "30px"}}> Hi ! {props.username} </h4>
                        {SidebarData.map( (item , index) => {
                            return(
                                <li key = {index} className = {item.cName}>
                                    <Link to = {item.path}>
                                        {item.icon}
                                        <span>  {item.title} </span>
                                    </Link>
                                </li>
                            )
                        })}
                        <li className = "navbar-toggle" onClick = {props.logout}>
                            <Link to = "#" className = "nav-text">
                                <FiIcons.FiLogOut className = "largeicon"/>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
export default Navbar;