import React from 'react';
import {Link} from 'react-router-dom';

const TopPostList = ({ topposts }) => {

    return topposts.map(data=>(
                <Link to={'/post/'+data.id} style={{fontFamily:"cursive",textDecoration:"none",color:"black"}}>
                    <div className="col s12">
                    <div className="card" style={{width: "18rem",height:"10rem"}}>
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
            ));
};

export default TopPostList;