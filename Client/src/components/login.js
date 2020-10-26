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
            
            const url='post/gettoken'
            axios.post(url,data)
            .then(res=>{
                if(res.data)
                {
                    localStorage.setItem('cool-jwt',res.data.token);
                    this.props.changestate(username,res.data.email);
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
                style={ { height: "100%" ,marginTop:"-80px"} }>

                    <div 
                    className="d-flex justify-content-center align-items-center"
                    style={  {width: "100%" , height: "100%" }}>
                        
                        <div className="card" style={ { width: "26rem" }}>
                            <div className="card-header">
                                <center>Login</center>
                            </div>
                            <div className="card-body">
                                <form onSubmit={ this.handlesubmit }>
                                    <div className="form-group">
                                        <label htmlFor="username">User Name</label>
                                        <input type="text" className="form-control" id="username" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block ml-auto mb-4">Login</button>
                                </form>
                                <Link to="/create" className="card-link mt-5"><center>New Here ?</center></Link>
                            </div>
                        </div>
                        </div>
                </div>
                
            )
    }
}

export default Login;