import React, {useState, useEffect} from 'react'
import {BsArrowUpCircleFill} from "react-icons/bs"

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
            style={{display : visible ? 'inline' : 'none'}} />
        </>
    </>
  )
}

export default ScrollButton