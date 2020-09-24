import React from 'react';
import axios from 'axios';

class Post extends React.Component{
    state={
        title:null,
        tags:null,
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
                    tags:res.data[0].tags,
                    author:res.data[0].author
                });
            })
    }

    render(){
        return(
            <div className="center">
                <h2>{this.state.title}</h2>
                <h6>{this.state.tags}</h6>
                <br></br>
                <h3 dangerouslySetInnerHTML={{__html: this.state.body}}></h3>
                <br></br>
                <h6>Author<br></br>{this.state.author}</h6>
            </div>
        )
    }
}

export default Post;