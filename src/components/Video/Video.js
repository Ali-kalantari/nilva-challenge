import React from 'react';
import './../VideoContainer/Video.css'
const Video = () => {
    return ( <div className='video'>
        <video  controls>
            <source />
        </video>
    </div> );
}
 
export default Video;