import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        
        const postlist=this.state.post.map(data=>{
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
            <div className="Tag-data">
                <div className="homeTags d-flex justify-content-center flex-wrap p-3">
                    {
                        this.state.tagsX.map(tag => <Link to={'/tags/'+tag.substring(1,tag.length)}><button className="btn btn-outline-secondary m-2" style={{color:"black",border:"2px solid black"}}>{ tag }</button></Link>)
                    }               
                </div>
                
                <div className="container">
                    {postlist}
                </div>
            </div>
        )
    }
}

export default Tag;