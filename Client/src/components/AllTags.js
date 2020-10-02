import React from 'react';
import {Link} from 'react-router-dom';

const AllTags = ({ tags }) => {

    return tags.map(tag => (
        <Link to={'/tags/'+tag.substring(1,tag.length)}>
            <button 
            className="btn btn-outline-secondary m-2" 
            style={{fontFamily:"cursive",color:"black",border:"2px solid black"}}>
                { tag }
            </button>
        </Link>));
};

export default AllTags;