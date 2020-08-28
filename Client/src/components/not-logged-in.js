import React, { Fragment, useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

const tagsX = ["#demo1" , "#demo1" , "#demo1" , "#demo1" , "#demo1" , "#demo1" , "#demo1" , "#demo1" , "#demo1" , "#demo1" , "#demo1" ];

const Home=()=>{
    
    const [tags, setTags] = useState('');

    useEffect(()=>{
        setTags(tagsX);
    },[]);

    return(
        <div 
        className="container"
        style={ { height: "100%" }}>
        
        
        <div 
        className="d-flex justify-content-center align-items-center"
        style={ { height: "100%" , width: "100%" }}>
            <div 
            className="text-center"
            style={{ width: "100%" }}>
                <br></br>
                <br></br>
                <h3 style={{ fontSize: "4rem" }}><span style={{ fontFamily:"Trattatello, fantasy"}}>"Greatness"</span> is a lot of <span style={{ fontFamily:"Trattatello, fantasy"}}>"small things"</span> <br></br>done well everyday</h3>
                <br></br>
                <h3 style={{ fontSize: "2rem" }}>We know you did something great today.Isn't it?<br></br>Everyone wants to know <span style={{ fontFamily:"Trattatello, fantasy"}}>How you Did</span></h3>

                <br></br>
                
                <br></br>
                
                {//<h3 style={{ fontSize: "2rem" }}>Want to learn today so you can share your success tommorrow</h3>
                }
                
                <br></br>
                <Link to="/login" style={ {textTransform:"lowercase"} }>
                <button type="button" class="btn btn-success px-3 p-0">
                    
                    <h3>Get Started</h3>
                    
                </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Home;

