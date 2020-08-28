import React, { Fragment, useState, useEffect } from 'react';
import NavBar from './NavBar';
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
        <NavBar/>
        
        <div 
        className="d-flex justify-content-center align-items-center"
        style={ { height: "100%" , width: "100%" }}>
            <div 
            className="text-center"
            style={{ width: "100%" }}>
                <h1 style={{ fontSize: "4rem" }}>Dive deeper on topics that matter to you</h1>

                <div className="homeTags d-flex justify-content-center flex-wrap p-3">
                    {
                        tagsX.map(tag => <button className="btn btn-outline-secondary m-2">{ tag }</button>)
                    }               
                </div>

                <button type="button" class="btn btn-success px-3">
                    <Link to="/login" style={ { color: "inherit"} }>
                    <h3>Get Started</h3>
                    </Link>
                </button>
            </div>
        </div>
        </div>
    );
};

export default Home;

/*
varinat="h1" variantMapping={ {h1: "h1"} }>
<a style={style} href='/' className="brand-logo">How-You-Did</a>
                    <ul className="right">
                        <li><Link to='/login' style={style}>Get Started</Link></li>
                    </ul>

                    */

                    /*
<Fragment>
            <NavBar/>
        <Container maxWidth="md" >
        <Box 
        width="100%" 
        minHeight="100vh"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        >
            <Typography align="center" >
            <h1>Dive deeper on topics that matter to you.</h1>
            </Typography>
        </Box>
        </Container>
        </Fragment>
                    */