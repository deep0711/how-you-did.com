import React from 'react';
import Notlogged from './components/not-logged-in.js';
import Loggedin from './components/Logged-in';
import Login from './components/login';
import {BrowserRouter,Route} from 'react-router-dom'
import axios from 'axios';
import Signup from './components/signup';
import NavBar from './components/Navbar';
import Profile from './components/userProfile';
import Post from './components/post';
import Tag from './components/tag';
import EditProfile from './components/EditProfile';
import CreatePost from './components/Create';
import Loading from './components/Loading';
import Footer from './components/footer';

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
            const url='post/getuser';

            axios.get(url,{ headers: {authorization: 'Bearer '+ token}})
                .then(res=>{
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
                <div className="d-flex justify-content-center align-items-center">
                    <Loading />
                </div>
                    <Footer/>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <Footer/>
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
                        <Route path='/post/:post_id' render={ (props)=>< Post {...props} state={this.state}/>}/>
                        <Route path='/tags/:tag_id' component={Tag}/>
                        <Route path='/editprofile' render={ (props)=>< EditProfile {...props} state={this.state} logout={this.logout} />}/>
                        <Route path='/write' render={ (props)=>< CreatePost {...props} state={this.state}/> }/>
                    </div>
                
                </BrowserRouter>
            )
        }
    }
}

export default App;
