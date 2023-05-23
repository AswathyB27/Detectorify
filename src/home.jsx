import React from "react";
import Logo from "./assets/logo2.png";
import "./detect.scss";
import koodo from "./assets/koodo.png";
export default function Home(){

  const handleNav = (index) => {
    console.log(index);
    let home = document.getElementById('app');
    let onePage = home.scrollHeight;
    console.log(onePage);
    home.scrollTop += onePage / index;
  }

    return(
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
            <button onClick={() =>handleNav('4')}>GET STARTED</button>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <Navbar/>
          </div>
          <div className="bottom">
            <img src={koodo}></img>
          </div>
        </div>
      </div>
        </div>
    );
}

export function Navbar(){
  const handleNav = (index) => {
    console.log(index);
    let home = document.getElementById('app');
    let onePage = home.scrollHeight;
    console.log(onePage);
    home.scrollTop += onePage / index;
  }
    return(
      <div className="NavbarContainer">
        <span onClick={() => handleNav('0')}>Home</span>
        <span  onClick={() => handleNav('1')}>Contact</span>
        <span  onClick={() => handleNav('2')}>Help</span>
      </div>
    );
  }