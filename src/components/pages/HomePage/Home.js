import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjMast} from "./Data";
import Masthead from '../../Masthead';
import background from "./../../../images/videobackground.mp4";
import "./Home.scss"

const Home = () => {
  return (
    <>  
    <div className="content">
          <Masthead {...homeObjMast} />
        </div>
    <div className="mastContain">
      <video className="mast-wrap" src={background} autoPlay loop muted id="video-background" />
        </div>
        <HeroSection {...homeObjOne} />
        <div className="wrap"></div>
        <HeroSection {...homeObjTwo}/>
    </>
  )
}

export default Home;