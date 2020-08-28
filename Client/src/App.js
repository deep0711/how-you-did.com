import React from 'react';
//import Logged from './components/Logged-in.js';
import Notlogged from './components/not-logged-in.js';
import Login from './components/login';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import decode from 'jwt-decode';
import axios from 'axios';
import Signup from './components/signup';

class App extends React.Component{
    
    state={
        status:null,
        username:null
    }
    
    //When user is currently not login,in future if logged in,then change state by this function
    changestate=(user)=>{
        this.setState({
            status:"Logged In",
            username:user
        })
    }

    //When user will logout,change state
    logout=()=>{
        localStorage.removeItem('cool-jwt');
        
        this.setState({
            status:"Not_Logged_In",
            username:null
        })
    }
    //Run on mounting.Check wether user is logged in or not
    componentDidMount(){

        const token=localStorage.getItem('cool-jwt');
        
        if(!token)
        {
            this.setState({
                status:"Not_Logged_In",
                username:null
            })
        }
        else
        {
            const url='http://localhost:8000/post/getuser';

            axios.get(url,{ headers: {authorization: 'Bearer '+ token}})
                .then(res=>{
                    this.setState({
                        status:"Logged_In",
                        username:res.data
                    })
                    
                }).catch(e=>{
                    localStorage.removeItem('cool-jwt');
                    this.setState({
                        status:"Not_Logged_In",
                        username:null
                    })
                })
        }    
    }
    
    render(){
        
        if(!this.state.status)
        {
            return(
                <div>
                    <h3>Loading....</h3>
                </div>
            )
        }
        else if(this.state.status==="Not_Logged_In")
        {
            return(
                <BrowserRouter>
                    <div className="Home-Content">
                        <Route exact path="/" component={ Notlogged }/>
                        <Route path='/login' render={ (props)=>< Login {...props} changestate={this.changestate} /> } />
                        <Route path='/create' component={ Signup}/>
                        
                    </div>
                </BrowserRouter>
            )
        }
        else
        {
            return(
                <BrowserRouter>
                    <div className="Home-Content">
                       {// <Logged username={this.state.username} logout={this.logout} />
        }
                    </div>
                </BrowserRouter>
            )
        }
    }
}

export default App;
