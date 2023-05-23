
import React, { useState } from 'react';
import axios from 'axios';
import Logo from "./assets/logo2.png";
import koodo from "./assets/koodo.png";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import './home.scss';

export function VideoUploader() {
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [videoUrl,setVideoS] = useState();


  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e.dataTransfer);
    // const file = e.target.files[0];
    // setVideoFile(file);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('video', videoFile);

      const response = await axios.post('http://127.0.0.1:8085/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'blob'
      });
      const videoBlob = new Blob([response.data],);
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoS(videoUrl);
      const downloadUrl = URL.createObjectURL(new Blob([response.data], { type: 'video/mp4' }));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'detected_video.mp4';
      link.click();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
   return (
    <div className="homeContainer">
      <div className="home1">
        <div className="left">
          <div className="top">
            <div className="logO">
              <img src={Logo}></img>
              <span>detectorify</span>
            </div>
          </div>
          <div className="bottom">
            <span className='titleText'>Analyze Your Video for Cigarette and Alcohol Consumption.</span>
            <span className='captionText'>Easily upload and analyze your video for instances of cigarette and alcohol consumption.</span>
            <button>GET STARTED</button>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <Navbar/>
          </div>
          <div className="bottom">
            <img src={Logo}></img>
          </div>
        </div>
      </div>
      <div className="home2">
      <div className="home2Container"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => document.getElementById('fileinput').click()}>
        <SlideshowIcon className='loho'sx={{ stroke: "#000", strokeWidth: 0.4 }}/>
       <div className='content'>
       <form className="bb" onSubmit={handleFormSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} id='fileinput'/>
        <button  className="button" type="submit" disabled={!videoFile || loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form> 
        {videoUrl && (<video preload='auto' controls width="640" height="360" autoPlay>
        <source src={videoUrl} type='video/mp4'/>
        </video>)}
    </div>
    </div>
      </div>

    </div>
    
  );
}

export function Navbar(){
  return(
    <div className="NavbarContainer">
      <span>Home</span>
      <span>Contact</span>
      <span>Help</span>
    </div>
  );
}
