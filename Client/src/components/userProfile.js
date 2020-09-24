import React from 'react';
import '../css/Navbar.css'
import {Link} from 'react-router-dom';
import axios from 'axios';


class Profile extends React.Component {

    state = {
        username : this.props.state.username ,
        email:this.props.state.email ,
        posts : []
    }    
    
    editProfile = () => {
        
    }

    componentDidMount() {
        axios.get('http://localhost:8000/post').then(res => {
            this.setState({
                posts : res.data.slice(0 , 3)
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
            posts.map(data => {
                return( 
                    <div className="row">
                        <Link to={'/post/'+data.id} style={{textDecoration:"none",color:"black"}}>
                            <div className="col s12">
                                <div className="card" style={{width: "50rem",height:"10rem",border:"2px solid grey"}}>
                                    <div className="card-body">
                                        <div className="card-title">
                                            {data.title}
                                            <br></br>
                                            <h6>{data.tags}</h6>
                                        </div>
                                        <p className="card-text" style={{textDecoration:"none",color:"grey"}}>
                                            {data.author}<br></br>
                                            {data.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        ):(<div className = "container">No Liked Posts</div>)

        return (
            
            <div style = {{maxWidth : "1000px" , margin : "0px auto"}}> 
            
                <div style = {{
                    display : "flex" ,
                    justifyContent : "space-around" ,
                    margin : "18px 0px" ,
                    borderBottom : "1px solid grey"
                }}>
                    <div>
                        <img className = "profile-img center" src = "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                    
                    <div style = {{marginLeft:"-300px"}}> 
                        <h4 style = {{marginTop:"50px"}} > {this.state.username}<br></br><h6>{this.state.email}</h6> </h4>
                        
                        <div style = {{display : "flex" , justifyContent : "space-between" , width : "108%" , marginTop : "0%"}}>
                            <Link to='/editprofile'><button className = "btn waves-effect waves-light">Edit Profile</button></Link>
                            <Link to='/create'><button className = "btn waves-effect waves-light">Write a Post</button></Link>                            
                        </div>
                    
                    </div>
                </div>
                
                <div className = "gallery">
                    <p style={{paddingLeft:"10px"}}>Liked Post</p><br></br>
                    
                    <div className=" container">
                        {postList}
                    </div>
                </div>
             </div>   
        )
    }
};
export default Profile;