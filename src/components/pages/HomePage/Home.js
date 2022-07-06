import React from 'react'
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo} from "./Data";

const Home = () => {
  return (
    <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo}/>
    </>
  )
}

export default Home;