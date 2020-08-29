import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Signup=(props)=>{

    const handlesubmit=(e)=>{
        e.preventDefault();
        const url='http://localhost:8000/post';
        
        const data={
            username:e.target.username.value,
            email:e.target.email.value,
            password:e.target.password.value
        }

        axios.post(url,data)
            .then(res=>{
                console.log(res);
                if(res.data!=0)
                {
                    alert('User Already there.Try Again with different username');    
                }
                else{
                    alert('User Added Successfully');
                    props.history.push('/login');
                }
            }).catch(e=>{
                alert('Unexpected Error occured.Try Again :(');
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



