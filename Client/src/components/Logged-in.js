import React,{ Fragment, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/style.css';

class Home extends React.Component{
    
    state={
        tagsX :["#tech" , "#beauty" , "#C++" , "#javascript" , "#python" , "#home" , "#life" , "#motivation" , "#health" , "#love" , "#animal" ],
        topposts:[],
        posts:[]
    }
    
    componentDidMount(){
        const url='http://localhost:8000/post';
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

    const toppostlist=this.state.topposts.map(data=>{
        return(
                <Link to={'/post/'+data.id} style={{textDecoration:"none",color:"black"}}>
                    <div className="col s12">
                    <div className="card" style={{width: "18rem",height:"10rem"}}>
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
            )
    })

    const postlist=this.state.posts.map(data=>{
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
    return(
        <div className="Home">
            
            <div className="homeTags d-flex justify-content-center flex-wrap p-3">
                    {
                        this.state.tagsX.map(tag => <Link to={'/tags/'+tag.substring(1,tag.length)}><button className="btn btn-outline-secondary m-2" style={{color:"black",border:"2px solid black"}}>{ tag }</button></Link>)
                    }               
            </div>
            <hr></hr>
            <center><p>Top Picks for you</p></center>
            <React.Fragment>
            <div className="deepak d-flex justify-content-center align-items-center">
                {toppostlist}
            </div>
            </React.Fragment>
            <hr></hr>
            <p style={{paddingLeft:"73px"}}>Worth Reading</p>        
            <div className=" container">
                {postlist}
            </div>
        </div>
    )
    }
}

export default Home;