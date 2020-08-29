import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    const style =  {
        color : 'black',
        fontFamily : "cursive"
    }
    
    return(
        <nav className = "nav-wrapper white">
            <div className = "container">
                <a style = {style} href = '/' className = "brand-logo"> How-You-Did </a>
                    <ul className = "right">
                        <li><Link to = '/login' style = {style} > Get Started </Link> </li>
                    </ul>
            </div>
        </nav>    
    )
}

export default Home;