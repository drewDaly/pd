import React from 'react'
import logo from "./../../images/peterson daly lc (3).jpg"
import {BsInstagram} from "react-icons/bs"
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
            <div className="container" id="footer" >
            <div className="column-one">
                  <div className="logo-wrap">
                  <img src={logo} alt="logo" className='footer__logo'></img>
                  </div>
                  <div className="icon-wrap">
                  <a href="https://instagram.com/petersondalyfarms/" target="blank" rel="noopener noreferrer">
                    <BsInstagram size={40} className='instagram__icon' href='' />
                    </a>
                      </div>
                      </div>
                      <div className="column-two">
                    <div className="copyright">
                        <p>© 2022 Peterson-Daly Farms LLC</p>
                    </div>
                      <div className='credits'>
                        <p>Created and Built by<a href="https://www.linkedin.com/in/drew-daly-uiuc2025/" id="drew" target="_blank" rel="noopener noreferrer"> Drew Daly</a></p>
                    </div>
                    </div>
            </div>    
    </footer>
  )
}

export default Footer