import React from 'react'
import {AboutData, AboutMast} from "./Data";
import "./AboutUs.scss";
import Masthead from '../../Masthead/Masthead';

const AboutUs = () => {
  return (
    <>
    <div className="about-mast-wrap">
    <Masthead {...AboutMast}/>
    </div>
    <div class = "about-container" id="about-section">
        <div className="header"> <h1> About Us </h1></div>
        <div className="beef"> 
            <h2 className='about__head'>Beef</h2>
            <h3>___</h3>
            <p className='about__desc'>{AboutData.Beef}</p></div>
        <div className="grain">
            <h2 className='about__head'> Grain </h2>
            <h3>___</h3>
            <p className='about__desc'>{AboutData.Grain}</p></div>
    </div>
    <div className="people-container" id="people">
        <div className="person"> 
        <div className="david__head">
            <h2 className='person__header'>{AboutData.name1}</h2>
        </div>
            <p className='david__para'>{AboutData.para1}</p>
    </div>
    <div className="person">
        <div className="daniel__head">
            <h2 className='person__header'>{AboutData.name2}</h2>
        </div>
            <p className='daniel__para'>{AboutData.para2}</p>
    </div>
    </div>
    </>
  )
}

export default AboutUs