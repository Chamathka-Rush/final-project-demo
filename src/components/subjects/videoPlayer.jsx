import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './videoPlayer.css';

const VideoPlayer = (props) => {
    return ( 
        <div className="video-container">
                <ReactPlayer 
                url={props.videoUrl}
                width="500px"
                height="240px"
                controls
                onReady = { () => console.log('onReady callback')}
                onStart = { () => console.log('onStart callback')}
                onPause = { () => console.log('onPause callback')}
                onEnded = { () => console.log('onEnded callback')}
                onError = { () => console.log('onError callback')}
                style={{ backgroundColor : "grey"}}
                />
            </div>
     );
}

 
export default VideoPlayer;