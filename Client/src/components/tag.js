import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import PostList from './PostList';
import AllTags from './AllTags';

class Tag extends React.Component{
    state={
        tagsX :["#tech" , "#beauty" , "#C++" , "#javascript" , "#python" , "#home" , "#life" , "#motivation" , "#health" , "#love" , "#animal" ],
        post:[]
    }
    
    componentDidMount(){
        const data={
            tag:'%#'+this.props.match.params.tag_id+'%'
        }
        const url='http://localhost:8000/post/tag';

        axios.post(url,data)
            .then(res=>{
                
                this.setState({
                    post:res.data
                })
            })
    }
    
    componentDidUpdate(){
        const data={
            tag:'%#'+this.props.match.params.tag_id+'%'
        }
        const url='http://localhost:8000/post/tag';

        axios.post(url,data)
            .then(res=>{
                
                this.setState({
                    post:res.data
                })
            })
    }

    render(){
        
        this.state.post.map(data=>{
            var date=new Date(data.date);
            var ans=date.toDateString();
            data.date=ans;
        })
       

        return(
            <div className="Tag-data">
                <div className="homeTags d-flex justify-content-center flex-wrap p-3">
                    {
                        <AllTags
                        tags={this.state.tagsX} />
                    }                                 
                </div>
                
                <div className="container d-flex flex-column align-items-center">
                    <PostList
                    posts={this.state.post} />
                </div>
            </div>
        )
    }
}

export default Tag;