import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Signup=(props)=>{

    const handlesubmit=(e)=>{
        e.preventDefault();
        const url='http://localhost:8000/post';
        
        const data={
            username:e.target.username.value,
            email:e.target.Email.value,
            password:e.target.password.value
        }

        axios.post(url,data)
            .then(res=>{
                alert('User Added Successfully');
                props.history.push('/login');
            }).catch(e=>{
                console.log('Error',e);
            })
    }

    
    return(


        <div 
                className="container"
                style={ { height: "100%" } }>

                    <div 
                    className="d-flex justify-content-center align-items-center"
                    style={  {width: "100%" , height: "100%" }}>
                        
                        <div class="card" style={ { width: "26rem" }}>
                            <div class="card-header">
                                SignUp
                            </div>
                            <div class="card-body">
                                <form onSubmit={ handlesubmit }>
                                    <div class="form-group">
                                        <label for="username">User Name</label>
                                        <input type="text" class="form-control" id="username" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" required/>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block ml-auto mb-4">Submit</button>
                                </form>
                                <Link to="/login" className="card-link mt-5">Already Have an account ?</Link>
                            </div>
                        </div>
                        </div>
                </div>
        )
    
}

export default Signup; 



/*

<div className="container">
                <h3>Sign-Up</h3>
                
                    <form className="col s12" onSubmit={handlesubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <i><PersonIcon/></i>
                                <input id="username" type="text" placeholder="Username"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <i><AlternateEmailIcon/></i>
                                <input id="Email" type="email" placeholder="Email"></input>
                            </div>
                        </div> 
                        <div className="row">    
                            <div className="input-field col s6">
                                <i><LockIcon/></i>
                                <input id="password" type="password" placeholder="Password"></input>
                            </div>
                        </div>
                        <button>Submit</button>
                    </form>
            </div>
            

*/
