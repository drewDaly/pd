import 'react-slideshow-image/dist/styles.css';
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjMast, beefImages, grainImages, properties} from "./Data";
import {Fade} from "react-slideshow-image";
import Masthead from '../../Masthead';
import background from "./../../../images/videobackground.mp4";
import "./Home.scss";

const Home = () => {
  return (
    <>  
    <div className="mastContain">
      <video className="mast-wrap" src={background} playsinline autoPlay loop muted id="video-background" />
      <div className="content">
          <Masthead {...homeObjMast} />
        </div>
        </div>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo}/>
    <div className="buffer"></div>
    <div className='gallery'>
    <h1 className='gallery__header'>Gallery </h1>
    <div className="gallery-container">
      <div className="column">
        <h1 className='show-header'>Beef</h1>
        <div className="slideshow-container">
          <Fade {...properties} duration={2500} arrows={true} className='slideshow-container' pauseOnHover={false}>
              <div className='each-fade'><img src={beefImages[0]} alt="0" style={{width:'100%'}} /></div>
              <div className='each-fade'><img src={beefImages[1]} alt="1" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={beefImages[2]} alt="2" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={beefImages[3]} alt="3" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={beefImages[4]} alt="4" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={beefImages[5]} alt="5" style={{width:'100%'}}/></div>
          </Fade>
        </div>
      </div>
      <div className="column">
        <h1 className='show-header'>Grain</h1>
        <div className="slideshow-container">
        <Fade {...properties} duration={2500} arrows={true} className='slideshow-container' pauseOnHover={false}>
              <div className='each-fade'><img src={grainImages[0]} alt="0" style={{width:'100%'}} /></div>
              <div className='each-fade'><img src={grainImages[1]} alt="1" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={grainImages[2]} alt="2" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={grainImages[3]} alt="3" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={grainImages[4]} alt="4" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={grainImages[5]} alt="5" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={grainImages[6]} alt="5" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={grainImages[7]} alt="5" style={{width:'100%'}}/></div>
              <div className='each-fade'><img src={grainImages[8]} alt="5" style={{width:'100%'}}/></div>
          </Fade>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home;