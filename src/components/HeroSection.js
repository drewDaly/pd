import React from 'react';
import "./HeroSection.scss";
function HeroSection({
    lightBg, caption, img, alt, imgStart
}) {
  return (
    <>
    <div className={lightBg ? "home__hero-section" : "home__hero-section-dark"}>
        <div className="hero-container">
            <div className='home__hero-row' style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row', justifyContent: imgStart==='start' ? 'left' : 
            'right'}}>
                <div className="col">
                    <div className="home__hero-text-wrapper">
                        <h1 className="captionText">{caption}</h1>
                    </div>
                </div>
                <div className="col">
                    <div className="home__hero-image-wrapper">
                        <img src={img} alt={alt} style={{width:"100%"}} className="home__hero-img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection