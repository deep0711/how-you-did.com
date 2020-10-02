import React from 'react';
import loadgif from '../image/loading_gif.gif';

const height = {
    height : "4rem"
};

const Loading = () => {

    return <div className="mb-4">
        <img 
        style={height}
        src={ loadgif } 
        alt="loading gif" /> 
    </div>
};

export default Loading;