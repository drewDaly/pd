import React from 'react'
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const images = [
    'images\family corn.jpg',
    'IMG_1262.jpg',
    'emma calf.jpg',
    'IMG_2519.jpg',
    'snow overhead 2.png',
    'white cow.JPG',
    'entire farm.png',
    'snow overhead.png',
    'dave carrie 2.jpg',
    'beandrill.png',
    'fam walk.jpg',
    'harvest.png',
    'hay mower.png',
    'calf.png',
    'combine 2.png',
    'holly calf (2).jpg',
    'combine.png',
    'cowcalf.png',
    'dave carrie.jpg',
    'November 2011 001 (1).jpg',
    'baler.png',
    'Header.png',
    'IMG_2504.jpg'
];

const Home = () => {
  return (
    <div className="slideshow-container" id="slides">
        <Fade>
            {images.map((image, index) =>
            <div className="each-fade" key={index}>
                <div className="image-container">
                    <img src={image} alt="slide" style={{width: "100%"}} />
                </div>
            </div>
            )}
        </Fade>
    </div>
  )
}

export default Home;