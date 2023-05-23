import React, { useState } from "react";
import axios from 'axios';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import toast,{Toaster} from 'react-hot-toast';
import "./detect.scss";
import { upload } from "./controller/helper";

export default function Detect() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [videoUrl,setVideoS] = useState();
    const [completed,setCompleted] = useState(false);
    const [downloadurl, setDownloadUrll] = useState();


    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setFile(file);
    };

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleFormSubmit = async (event) => {
        if(!file){
            toast.error("Please Upload Video File");
        }else
        {event.preventDefault();
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append('video', file);

          let uploadPromise = upload(formData);
          if (uploadPromise.error === 'Failed') {
            setLoading(false);
          }
          toast.promise(uploadPromise,{
            loading: "Detecting",
            success: "Detection Completed",
            error : "Detection Error Occured"
          });

          uploadPromise.then(res => {
            setCompleted(true);
            const videoBlob = new Blob([res.data],);
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoS(videoUrl);
      const downloadUrl = URL.createObjectURL(new Blob([res.data], { type: 'video/mp4' }));
      setDownloadUrll(downloadUrl);
      const link = document.createElement('a');
      link.href = downloadUrl;
            setLoading(false);
          });
      }catch(error){
        console.log(error);
      }}
    }

    const handleDownload = () =>{
      const link = document.createElement('a');
      link.href = downloadurl;
      link.download = 'detected_video.mp4';
      link.click();
    }
    return (
        <div className="homeContainer">
            <Toaster position="top-centere" reverseOrder={false}></Toaster>
            <div className="home3">
                <div className="dropContainer"
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => document.getElementById("fileInput").click()}>
                    <form>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleFileInput}
                    />
                    </form>
                    <span>
                        <SlideshowIcon className="icon" sx={{ stroke: "#000", strokeWidth: 0.4 }}/>
                        {
                          loading ? (
                            <div>
                              This Might Take Few Minutes
                            </div>
                          ) : (
                            <div> Drop file here or click to upload
                            </div>
                          )
                        }
                        {file && <p>Selected file: {file.name}</p>}
                        </span>
                </div>
                <button type="submit" onClick={handleFormSubmit} disabled={loading}>{loading ? <span>Detecting</span> : <span> Detect </span>}</button>
                {completed ? (
                    <button className="downloadbtn" onClick={() => handleDownload()}>Download</button>
                ) : (
                  <div></div>
                )}
            </div>
        </div>
    );
}