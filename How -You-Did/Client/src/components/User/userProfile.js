import React from 'react';
import NavBar from './Sidebar/Navbar';
import './Sidebar/Navbar.css'
import {BrowserRouter , Route , Switch , Link} from 'react-router-dom';
import axios from 'axios';
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'

class Profile extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            username : props.username , 
            posts : []
        }    
    }
    editProfile = () => {
        console.log('hojaegi');
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                posts : res.data.slice(0 , 10)
            })
        })
    }
    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return( 
                    <div className = "post card " key = {post.id} >
                        <div className = "card-content">
                        <Link to = {'/' + post.id}> <span className = "card-title"> {post.title} </span> </Link>
                        <p> {post.body} </p>
                        <p className = "Post-Button">
                            <AiIcons.AiOutlineLike  className = "largeicons"/>
                            <AiIcons.AiOutlineComment className = "largeicons" />
                            <GiIcons.GiRapidshareArrow  className = "largeicons"/>
                        </p>
                        </div>
                    </div>
                )
            })
        ):(<div className = "container">No Posts</div>)

        return (
            <div className = "center" style = {{maxWidth : "1000px" , margin : "0px auto"}}> 
                <div style = {{
                    display : "flex" ,
                    justifyContent : "space-around" ,
                    margin : "18px 0px" ,
                    borderBottom : "1px solid grey"
                }}>
                    <div>
                        <img className = "profile-img center" src = "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div> 
                        <h4> {this.props.username} </h4>
                        <div style = {{display : "flex" , justifyContent : "space-between" , width : "108%" , marginTop : "50%"}}>
                            <button className = "btn waves-effect waves-light">Edit Profile</button>
                            <button className = "btn waves-effect waves-light">Create Post</button>                            
                        </div>
                    </div>
                </div>
                <div style = {{borderBottom : "1px solid grey" }}>
                    <div className = "center" style = {{float : "left" , border : "1px solid black"}}>
                        <AiIcons.AiFillAppstore />
                    </div>
                </div>
                <div className = "gallery">
                    {postList}
                </div>
            </div>
        )
    }
};
export default Profile;