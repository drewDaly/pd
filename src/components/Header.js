import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Header.scss";
import {TiTimes} from "react-icons/ti"
import {FaBars} from "react-icons/fa"
import logo from "./../images/peterson daly lc (3).jpg"

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => { 
        setClick(false);
        window.scrollTo(0, 0);
    }
    const [navbar, setNavbar] = useState("navbar");
    const listenScrollOrSizeEvent = (event) => {
        if (window.scrollY === 0) return setNavbar('navbar');
        else return setNavbar('navbar2');
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollOrSizeEvent);
        return () =>
        window.removeEventListener('scroll', listenScrollOrSizeEvent);
    }, []);
    
  return (
    <header className={navbar}>
        <div className='navbar__container'>
            <Link to='/' id='navbar__logo'><img src={logo} alt='logo' id='logo'></img>
          </Link>
            <div className='navbar__toggle' id='mobile-menu' onClick={handleClick}>
                {click ? <TiTimes size={30}/> : <FaBars size={30}/>}
            </div>
            <ul className={click ? 'navbar__menu active' : 'navbar__menu'} >
                <li className='navbar__item'>
                    <Link to='/' className='navbar__links' onClick={closeMobileMenu}>Home
                    </Link>
                </li>
                <li className='navbar__item'>
                 <Link to='/AboutUs' className='navbar__links' onClick={closeMobileMenu}>
                     About Us
                 </Link>
             </li>
             <li className='navbar__item'>
                 <Link to='/TrustedPartners' className='navbar__links' onClick={closeMobileMenu}>
                     Trusted Partners
                 </Link>
             </li>
             <li className='navbar__item'>
                 <Link to='/ContactUs' className='navbar__links' onClick={closeMobileMenu}>
                     Contact Us
                 </Link>
             </li>
            </ul>
        </div>
    </header>
  )
}


export default Header;