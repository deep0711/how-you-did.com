import React from 'react';
import {Link} from 'react-router-dom';
import '../css/style.css';

const BlackBg = {
    backgroundColor : "black",
    color : "white",
    width:"200px"
};


const footer=()=>{
    return(
        <div>
            <footer class="deep page-footer font-small pt-4" style={{backgroundColor:"#6d32a8"}}>
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase">
                            <Link 
                                className="card p-2  mr-sm-2 mr-md-4" 
                                to='/'
                                style={ BlackBg }>
                                <span className="font-weight-bold h4 mb-0">How You Did</span>
                            </Link>
                            </h5>
                            <p>Share something Special !!</p>
                            
                            <p>
                            <a href="#"><i class="fa fa-facebook-square" style={{fontSize:"30px",marginRight:"10px"}}></i></a>
                            <a href="#"><i class="fa fa-github" style={{fontSize:"30px",marginRight:"10px"}}></i></a>
                            <a href="#"><i class="fa fa-twitter" style={{fontSize:"30px",marginRight:"10px"}}></i></a>
                            <a href="#"><i class="fa fa-twitch" style={{fontSize:"30px",marginRight:"10px"}}></i></a>
                            <a href="#"><i class="fa fa-instagram" style={{fontSize:"30px",marginRight:"10px"}}></i></a>
                            </p>
                            <p style={{fontSize:"12px",color:"white"}}>How-You-Did Community Copyright 2020</p>
                        </div>
                        <hr class="clearfix w-100 d-md-none pb-3"></hr>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Home</a>
                                </li>
                                <li>
                                    <a href="#!">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#!">Login</a>
                                </li>
                                <li>
                                    <a href="#!">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">

                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Code of Conduct</a>
                                </li>
                                <li>
                                    <a href="#!">Tags</a>
                                </li>
                                <li>
                                    <a href="#!">About Us</a>
                                </li>
                                <li>
                                    <a href="#!">Privacy Policy</a>
                                </li>
                            </ul>

                        </div>
                    
                    </div>
                    
                </div>
                
            </footer>
        </div>
        )
    }

export default footer;