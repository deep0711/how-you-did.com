import React, { createRef } from 'react';
import Notlogged from './components/not-logged-in.js';
import Loggedin from './components/Logged-in';
import Login from './components/login';
import {BrowserRouter,Route} from 'react-router-dom'
import axios from 'axios';
import Signup from './components/signup';
import NavBar from './components/Navbar';
import Profile from './components/userProfile';
import Post from './components/post'
import Tag from './components/tag'
import CreatePost from './components/Create'

class App extends React.Component{
    
    state={
        status:null,
        username:null,
        email:null
    }
    
    //When user is currently not login,in future if logged in,then change state by this function
    changestate=(user,e)=>{
        this.setState({
            status:"Logged In",
            username:user,
            email:e
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
                    console.log(res.data);
                    this.setState({
                        status:"Logged_In",
                        username:res.data.id,
                        email:res.data.email
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
                <BrowserRouter>
                <div>
                    <h3>Loading....</h3>
                </div>
                </BrowserRouter>
            )
        }
        else if(this.state.status==="Not_Logged_In")
        {
            return(
                <BrowserRouter>
                    <div className="Home-Content">
                        <Route path='/' render={ (props)=>< NavBar {...props} username={this.state.username} logout={this.logout} />}/>
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
                        <Route path='/' render={ (props)=>< NavBar {...props} username={this.state.username} logout={this.logout} />}/>
                        <Route exact path="/" component={ Loggedin }/>
                        <Route path='/profile' render={ (props)=>< Profile {...props} state={this.state}/>}/>
                        <Route path='/post/:post_id' component={Post}/>
                        <Route path='/tags/:tag_id' component={Tag}/>
                        <Route path='/create' render = { (props)=>< CreatePost {...props} state={this.state}/>}/>    
                    </div>
                </BrowserRouter>
            )
        }
    }
}

export default App;
