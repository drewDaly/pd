import React, {useState, useEffect} from 'react'
import {BsArrowUpCircleFill} from "react-icons/bs"
import "./ScrollButton.scss"

function ScrollButton() {
    const [visible, setVisible] = useState(false)
    const toggleVisible = (event) => {
        if (window.scrollY > 300) return setVisible(true);
        else return setVisible(false);
    }
    const scrollTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () =>
        window.removeEventListener('scroll', toggleVisible);
    }, []);
  return (
    <>
        <>
            <BsArrowUpCircleFill className='scrollButton' onClick={scrollTop}
            style={{visibility : visible ? 'visible' : 'hidden'}} size={35}/>
        </>
    </>
  )
}

export default ScrollButton