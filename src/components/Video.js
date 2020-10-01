import React from 'react';
import video from '../stylesheets/css/video.css';

const Video = () =>{

    return(
        <div className="videoContainer">
            <div className="videoInnerContainer">
                <video autoPlay muted loop id="video">
                    <source src="https://sitiopruebavero.000webhostapp.com/downloads/Fender%20CP50s%20-%20Cm%20Jam..mp4" type="video/mp4"/>
                    You browser dont support no shit man....
                </video>
                <content className="contentContainer">
                    <h1>Banner</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="ui primary button">Go</button>
                </content>
            </div>
        </div>
    );
}

export default Video;


//More videos
// "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
//"https://sitiopruebavero.000webhostapp.com/downloads/Fender%20CP50s%20-%20Cm%20Jam..mp4"
