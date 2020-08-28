import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Login extends React.Component{
    
    handlesubmit=(e)=>{

        const username=e.target.username.value;
        e.preventDefault();
        if(e.target.username.value.length===0 || e.target.password.value.length===0)
            alert('Field Can\'t be empty' );
        else
        {
            const data={
                username:e.target.username.value,
                password:e.target.password.value
            }
            
            const url='http://localhost:8000/post/gettoken'
            axios.post(url,data)
            .then(res=>{
                if(res.data)
                {
                    localStorage.setItem('cool-jwt',res.data);
                    this.props.changestate(username);
                    this.props.history.push('/');
                }
                else
                    alert('Wrong Username or Password!');
            })
        }        
    }

    render(){
        return(
            
                <div 
                className="container"
                style={ { height: "100%" } }>

                    <div 
                    className="d-flex justify-content-center align-items-center"
                    style={  {width: "100%" , height: "100%" }}>
                        
                        <div class="card" style={ { width: "26rem" }}>
                            <div class="card-header">
                                Login
                            </div>
                            <div class="card-body">
                                <form onSubmit={ this.handlesubmit }>
                                    <div class="form-group">
                                        <label for="username">User Name</label>
                                        <input type="text" class="form-control" id="username" required/>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" required/>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block ml-auto mb-4">Submit</button>
                                </form>
                                <Link to="/create" className="card-link mt-5">New Here ?</Link>
                            </div>
                        </div>
                        </div>
                </div>
                
            )
    }
}

export default Login;