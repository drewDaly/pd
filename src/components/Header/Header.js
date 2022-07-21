import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Header.scss";
import logo from "./../../images/peterson daly lc (3).jpg"

function Header() {
    const [navbar, setNavbar] = useState(true);
    const listenScrollOrSizeEvent = (event) => {
        if (window.scrollY < 75) return setNavbar(false);
        else return setNavbar(true);
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollOrSizeEvent);
        return () =>
        window.removeEventListener('scroll', listenScrollOrSizeEvent);
    }, []);
    
  return (
    <header className='navbar' style={{visibility: navbar ? "hidden" : "visible", transition: 'visibility 0s, opacity 0.5s linear'}}>
        <div className='navbar__container'>
            <Link to='/' id='navbar__logo'><img src={logo} alt='logo' id='logo'></img>
          </Link>
            <ul className='navbar__menu'>
                <li className='navbar__item'>
                    <Link to='/' className='navbar__links'>Home
                    </Link>
                </li>
                <li className='navbar__item'>
                 <Link to='/AboutUs' className='navbar__links'>
                     About Us
                 </Link>
             </li>
             <li className='navbar__item'>
                 <Link to='/TrustedPartners' className='navbar__links'>
                     Trusted Partners
                 </Link>
             </li>
             <li className='navbar__item'>
                 <Link to='/ContactUs' className='navbar__links'>
                     Contact Us
                 </Link>
             </li>
            </ul>
        </div>
    </header>
  )
}


export default Header;