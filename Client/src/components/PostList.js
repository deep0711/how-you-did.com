import React from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import '../css/style.css';
import Img from '../image/C++.jpg';

import Loading from './Loading';

const PostList = ({ posts }) => {

    return posts.map(data => (<LazyLoad 
        key={ `post-${data.id}` } 
        placeholder={ <Loading /> }>
            <Link to={'/post/'+data.id} style={{fontFamily:"cursive",textDecoration:"none",color:"black"}}>
                <div className="col s12">
                <div className="card flex-row flex-wrap" style={{width: "50rem",height:"10rem",border:"2px solid #42c8f5"}}>
                    <div class="card-header border-0">
                        <img  src={Img} alt="Card image cap" width="130px" height="123px"></img>
                    </div>
                    <div className="card-block px-2">
                        <div className="card-title">
                            {data.title}
                            <br></br>
                            <h6>{data.tags}</h6>
                        </div>
                        <p className="card-text" style={{textDecoration:"none",color:"black"}}>
                            {data.author}<br></br>
                            {data.date}
                        </p>
                    </div>
                </div>
                </div>
        </Link>
        </LazyLoad>    
    ));
};

export default PostList;