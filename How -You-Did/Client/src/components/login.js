import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Login extends React.Component{
    
    handlesubmit = (e) => {
        const username = e.target.username.value;
        e.preventDefault();
        if(e.target.username.value.length === 0 || e.target.password.value.length === 0)
            alert('Field Can\'t be empty' );
        else
        {
            const data = {
                username : e.target.username.value,
                password : e.target.password.value
            }
            
            const url = 'http://localhost:8000/post/gettoken'
            axios.post(url , data)
            .then(res => {
                if(res.data)
                {
                    localStorage.setItem('cool-jwt', res.data);
                    this.props.changestate(username);
                    this.props.history.push('/profile');
                }
                else
                    alert('Wrong Username or Password!');
            })
        }        
    }

    render(){
        return(
                <div className = "container">
                    <h3> Log in </h3>
                
                    <form className = "col s12" onSubmit = {this.handlesubmit}>
                        <div className = "row">
                            <div className = "input-field col s6">
                                <i><PersonIcon/></i>
                                <input id = "username" type = "text" placeholder = "Username"></input>
                            </div>
                        </div>    
                        <div className = "row">    
                            <div className = "input-field col s6">
                                <i><LockIcon/></i>
                                <input id = "password" type = "password" placeholder = "Password"></input>
                            </div>
                        </div>
                        <button className = "btn waves-effect waves-light">Submit</button>
                    </form>
                    <br></br>
                    <Link to = '/create'> <button className = "btn waves-effect waves-light">New To Us</button> </Link>
                </div> 
            )
    }
}

export default Login;