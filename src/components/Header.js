import React from 'react'
import {Link} from 'react-router-dom';
import "./Header.scss";
import logo from "./../images/peterson daly lc (3).jpg"

const Header = () => {
  return (
    <header className='navbar'>
        <div className='navbar__container'>
            <Link to='/Home' id='navbar__logo'><img src={logo} alt='logo' id='logo'></img>
          </Link>
            <div className='navbar__toggle' id='mobile-menu'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <ul className='navbar__menu'>
                <li className='navbar__item'>
                    <Link to='/Home' className='navbar__links'>Home
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