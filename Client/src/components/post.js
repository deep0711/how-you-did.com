import React from 'react';
import axios from 'axios';

class Post extends React.Component{
    state={
        title:null,
        
        body:null,
        author:null
    }

    componentDidMount(){
        let id=this.props.match.params.post_id;
        const data={
            username:id
        }

        let url='http://localhost:8000/post/search/';
        axios.post(url,data)
            .then(res=>{
                this.setState({
                    title:res.data[0].title,
                    body:res.data[0].body,
                    author:res.data[0].author
                });
            })
            
    }

    render(){
        return(
            <div className="center">
                <u><h2>{this.state.title}</h2></u>
                <h6>By -{this.state.author}</h6>
                <h3>{this.state.body}</h3>
                
            </div>
        )
    }
}

export default Post;