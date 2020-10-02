import React from 'react';
import '../css/Navbar.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

import PostList from './PostList';


class Profile extends React.Component {

    state = {
        username : this.props.state.username ,
        email:this.props.state.email ,
        profileimage:null,
        posts : []
    }    
    
    componentDidMount() {
        axios.get('http://localhost:8000/post').then(res => {

            this.setState({
                posts : res.data.slice(0 , 3)
            })
        })
        const data={
            username:this.props.state.username
        }

        axios.post('http://localhost:8000/post/getimage',data)
            .then(res=>{
                this.setState({
                    profileimage:res.data[0].image
                })
            })
    }
    
    render() {
        
        this.state.posts.map(data=>{
            var date=new Date(data.date);
            var ans=date.toDateString();
            data.date=ans;
        })

        const {posts} = this.state;

        const postList = posts.length ? (
            <PostList
            posts={ posts } />) :
        (<div 
        className="container">
            No Liked Posts
        </div>);

        return (
            
            <div style = {{maxWidth : "1000px" , margin : "0px auto"}}> 
            
                <div style = {{
                    display : "flex" ,
                    justifyContent : "space-around" ,
                    margin : "18px 0px" ,
                    borderBottom : "1px solid grey"
                }}>
                    <div>
                        {
                            this.state.profileimage!=null &&  
                            <img className = "profile-img center" src ={require('../image/'+this.state.username+this.state.profileimage)} alt={"Profile Image"}/>
                        }
                    </div>
                    
                    <div style = {{marginLeft:"-300px"}}> 
                        <h4 style = {{marginTop:"50px"}} > {this.state.username}<br></br><h6>{this.state.email}</h6> </h4>
                        
                        <div style = {{display : "flex" , justifyContent : "space-between" , width : "108%" , marginTop : "0%"}}>
                            <Link to='/editprofile'><button className = "btn waves-effect waves-light">Edit Profile</button></Link>
                            <Link to='/write'><button className = "btn waves-effect waves-light">Write a Post</button></Link>                            
                        </div>
                    
                    </div>
                </div>
                
                <div className = "gallery">
                    <p style={{paddingLeft:"10px"}}>Liked Post</p><br></br>
                    
                    <div className="container d-flex flex-column align-items-center">
                        {postList}
                    </div>
                </div>
             </div>   
        )
        
    }
    
};
export default Profile;