import React from 'react'
import {AboutData} from "./Data";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
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
        <div className="david__para">
            <p className='person__para-desc'>{AboutData.para1}</p>
        </div>
    </div>
    <div className="person">
        <div className="daniel__head">
            <h2 className='person__header'>{AboutData.name2}</h2>
        </div>
        <div className="daniel__para">
            <p className='person__para-desc'>{AboutData.para2}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs