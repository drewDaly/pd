import React from 'react'
import {BsInstagram, BsTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {SiGooglestreetview} from "react-icons/si"
import {ContactMast} from "./Data"
import "./ContactUs.scss"
import Masthead from '../../Masthead'
const ContactUs = () => {
  return (
    <> <div className="contact-wrap">
        <Masthead {...ContactMast}/>
    </div>
        <div className="ContactUs">
            <div className="contact-container">
                <div className="instagram">
                <a className="link" id='insta__link' href="https://instagram.com/petersondalyfarms/" target="blank" rel="noopener noreferrer">
                    <BsInstagram className='insta__link' size={60} />
                    </a>
                    <div className="caption">
                        <h3 className ='subtext'>@petersondalyfarms</h3>
                    </div>
                </div>
                <div className="phone">
                <a className="link" href="tel:8159796223" rel="noopener noreferrer" id="phone__link">
                    <BsTelephoneFill size={60} />
                    </a>
                    <div className="caption">
                        <h3 className ='subtext'>815-979-6223</h3>
                    </div>
                </div>
                <div className="email">
                <a className="link" id='email__link' href="mailto:dcdalyfarms@yahoo.com" target="blank" rel="noopener noreferrer">
                    <AiOutlineMail size={60} />
                    </a>
                    <div className="caption">
                        <h3 className ='subtext'>dcdalyfarms@yahoo.com</h3>
                    </div>
                </div>
                <div className="address1">
                <a className="link" id='address__link' href="https://www.google.com/maps/place/Peterson-Daly+Farms/@42.3483261,-89.2542167,17z/data=!3m1!4b1!4m5!3m4!1s0x88088f4a9dbee27d:0x609e2116ae26975e!8m2!3d42.3483285!4d-89.2518311" target="_blank" rel="noopener noreferrer">
                    <SiGooglestreetview size={60} />
                    </a>
                    <div className="caption">
                        <h2 className ='text'>Home</h2>
                        <h3 className ='subtext'>10939 Fish Hatchery Rd Pecatonica, IL 61063</h3>
                    </div>
                </div>
                <div className="address2">
                <a className="link" id='address__link' href="https://www.google.com/search?q=peterson-daly%20farms&rlz=1C1ONGR_enUS999US999&oq=peterson-daly+farms&aqs=chrome..69i57j69i60j69i61j69i60.5638j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsaObgTOaTWiQTwbYDAACuZkNWhMfQ:1655146212919&rflfq=1&num=10&rldimm=208299625320682026&lqi=ChNwZXRlcnNvbi1kYWx5IGZhcm1zSMPti8f1roCACFonEAAQARACGAAYARgCIhNwZXRlcnNvbiBkYWx5IGZhcm1zKgQIAhACkgEEZmFybQ&ved=2ahUKEwiW3MmQjKv4AhUal3IEHdKUAEwQvS56BAgGEAE&sa=X&rlst=f#rlfi=hd:;si:208299625320682026,l,ChNwZXRlcnNvbi1kYWx5IGZhcm1zSMPti8f1roCACFonEAAQARACGAAYARgCIhNwZXRlcnNvbiBkYWx5IGZhcm1zKgQIAhACkgEEZmFybQ;mv:[[42.3486744,-89.2516722],[42.3421727,-89.2583138]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2,lf:1" target="_blank" rel="noopener noreferrer">
                    <SiGooglestreetview size={60} />
                    </a>
                    <div className="caption">
                        <h2 className ='text'>Feedlots</h2>
                        <h3 className ='subtext'>6082 Winnebago Rd Pecatonica, IL 61063</h3>
                    </div>
                </div>
                <div className="blank"></div>
            </div>
        </div>
        <div className="bufferContact"></div>
    </>
  )
}

export default ContactUs