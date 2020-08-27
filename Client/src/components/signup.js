import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
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
            
        )
    
}

export default Signup; 