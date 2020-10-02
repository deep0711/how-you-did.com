import React from 'react';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';

import Loading from './Loading';

const PostList = ({ posts }) => {

    return posts.map(data => (<LazyLoad 
        key={ `post-${data.id}` } 
        placeholder={ <Loading /> }>
            <Link to={'/post/'+data.id} style={{fontFamily:"cursive",textDecoration:"none",color:"black"}}>
                <div className="col s12">
                <div className="card" style={{width: "50rem",height:"10rem",border:"2px solid grey"}}>
                    <div className="card-body">
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