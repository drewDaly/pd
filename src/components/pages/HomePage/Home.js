import React from 'react'
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjMast} from "./Data";
import Masthead from '../../Masthead';

const Home = () => {
  return (
    <>
        <Masthead {...homeObjMast}/>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo}/>
    </>
  )
}

export default Home;