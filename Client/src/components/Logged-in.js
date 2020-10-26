import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import PostList from './PostList';
import TopPostList from './TopPostList';
import AllTags from './AllTags';
import Footer from './footer';

import '../css/style.css';

class Home extends React.Component{
    
    state={
        tagsX :["#tech" , "#beauty" , "#C++" , "#javascript" , "#python" , "#home" , "#life" , "#motivation" , "#health" , "#love"  ],
        topposts:[],
        posts:[]
    }
    
    componentDidMount(){
        const url='post';
        axios.get(url)
            .then(res=>{
                this.setState({
                    topposts:res.data,
                    posts:res.data
                })
            })
    }

    render(){
    
    this.state.posts.map(data=>{
        var date=new Date(data.date);
        var ans=date.toDateString();
        data.date=ans;
    })

    return(
        <div className="Home">
            
            <div className="homeTags d-flex justify-content-center flex-wrap p-3">
                    {
                        <AllTags
                        tags={ this.state.tagsX} />
                    }               
            </div>
            <hr></hr>
            <center><p>Top Picks for you</p></center>
            <React.Fragment>
            <div className="deepak d-flex justify-content-center align-items-center">
                <TopPostList
                topposts={this.state.topposts} />
            </div>
            </React.Fragment>
            <hr></hr>
            <center><p >Worth Reading</p></center>        
            <div className="container d-flex flex-column align-items-center">
                <PostList 
                posts={ this.state.posts } />
            </div>
            <Footer/>
        </div>
    )
    }
}

export default Home;