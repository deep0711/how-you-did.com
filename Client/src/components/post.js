import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as BiIcons from 'react-icons/bi';
import { FaLessThanEqual } from 'react-icons/fa';
import '../css/post.css';

class Post extends React.Component{
    state={
        id:null,
        title:null,
        tags:null,
        body:null,
        author:null,
        likes:null,
        likedornot:false
    }

    componentDidMount(){
        let id=this.props.match.params.post_id;

        var data={
            username:id
        }

        var url='post/search/';
        
        axios.post(url,data)
            .then(res=>{
                
                this.setState({
                    id:res.data[0].id,
                    title:res.data[0].title,
                    body:res.data[0].body,
                    tags:res.data[0].tags,
                    author:res.data[0].author,
                    likes:res.data[0].Likes
                });
            })
    }

    handleclick=(e)=>{

        e.preventDefault();
        
        if( !this.state.likedornot )
        {
            const data={
                id:this.state.id,
                username:'%'+this.props.state.username+'%'
            }
            
            const url='post/hasliked'
            
            axios.post(url,data)
                .then(res=>{
                    if(res.data==='not_liked')
                    {
                        const likes=this.state.likes

                        this.setState({
                            likedornot:true,
                            likes:likes+1
                        })
                        
                        const url='post/like'
                        
                        const data={
                            id:this.state.id,
                            username:this.props.state.username
                        }

                        axios.post(url,data)
                            .then(res=>{
                                console.log('We are glad you liked the post');
                            })

                    }
                    else if(res.data==='liked')
                    {
                        console.log('Already Liked');
                        this.setState({
                            likedornot:true
                        })
                    }    
                })
        }
    }

    render(){
        return(
            <div className="center">
                <h2>{this.state.title}</h2>
                <h6>{this.state.tags}</h6>
                <Link to = "#" className = "menu-bars" onClick={this.handleclick} style={{textDecoration:"none",marginLeft:"-14px"}} >
                    <BiIcons.BiHeart />
                    {this.state.likes}
                </Link>
                <br></br>
                <div dangerouslySetInnerHTML={{__html:this.state.body}}></div>
                <br></br>
                <h6>Author<br></br>{this.state.author}</h6>
            </div>
        )
    }
}

export default Post;