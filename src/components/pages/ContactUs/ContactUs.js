import React from 'react'
import {ContactData} from "./Data.js"
import "./ContactUs.scss"
const ContactUs = () => {
  return (
    <>
        <div class="contact-container" id="contact-section">
        <div class="insta">
            <div class="insta__logo"> 
                <a href="https://instagram.com/petersondalyfarms/" target="blank" rel="noopener noreferrer">
                    <img src={ContactData.insta} alt="insta_logo" id="insta_logo"></img>
                </a>
            </div>
            <div class="insta__info">
                <h3>Instagram</h3>
                <h4>--</h4>
                <h2>@petersondalyfarms</h2>
            </div>
        </div>
        <div class="phone">
            <div class="phone__logo">
                <a href="tel:8159796223" rel="noopener noreferrer">
                    <img src={ContactData.phone} alt="phone_logo" id="phone_logo"></img>
                </a>
            </div>
            <div class="phone__info">
                <h3>Phone</h3>
                <h4>--</h4>
                <h2>815-979-6223</h2>
            </div>
        </div>
        <div class="email">
            <div class="email__logo">
                <a href="mailto:dcdalyfarms@yahoo.com" target="_blank" rel="noopener noreferrer">
                    <img src={ContactData.email} alt="email" id="email_logo"></img>
                </a>
            </div>
            <div class="email__info">
                <h3>Email</h3>
                <h4>--</h4>
                <h2>dcdalyfarms@yahoo.com</h2>
            </div>
        </div>
        <div class="address">
            <div class="address__logo">
                <a href="https://www.google.com/maps/place/Peterson-Daly+Farms/@42.3483261,-89.2542167,17z/data=!3m1!4b1!4m5!3m4!1s0x88088f4a9dbee27d:0x609e2116ae26975e!8m2!3d42.3483285!4d-89.2518311" target="_blank" rel="noopener noreferrer">
                    <img src={ContactData.map} alt="address" id="address_logo"></img>
                </a>
            </div>
            <div class="address__info">
                <h3>Home Farm</h3>
                <h4>--</h4>
                <h2>10939 Fish Hatchery Rd Pecatonica, IL 61063</h2>
            </div>
        </div>
        <div class="address">
            <div class="address__logo">
                <a href="https://www.google.com/search?q=peterson-daly%20farms&rlz=1C1ONGR_enUS999US999&oq=peterson-daly+farms&aqs=chrome..69i57j69i60j69i61j69i60.5638j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsaObgTOaTWiQTwbYDAACuZkNWhMfQ:1655146212919&rflfq=1&num=10&rldimm=208299625320682026&lqi=ChNwZXRlcnNvbi1kYWx5IGZhcm1zSMPti8f1roCACFonEAAQARACGAAYARgCIhNwZXRlcnNvbiBkYWx5IGZhcm1zKgQIAhACkgEEZmFybQ&ved=2ahUKEwiW3MmQjKv4AhUal3IEHdKUAEwQvS56BAgGEAE&sa=X&rlst=f#rlfi=hd:;si:208299625320682026,l,ChNwZXRlcnNvbi1kYWx5IGZhcm1zSMPti8f1roCACFonEAAQARACGAAYARgCIhNwZXRlcnNvbiBkYWx5IGZhcm1zKgQIAhACkgEEZmFybQ;mv:[[42.3486744,-89.2516722],[42.3421727,-89.2583138]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!2m1!1e2,lf:1" target="_blank" rel="noopener noreferrer">
                    <img src={ContactData.map} alt="address" id="address_logo"></img>
                </a>
            </div>
            <div class="address__info2">
                <h3>Feedlots</h3>
                <h4>--</h4>
                <h2>6082 Winnebago Rd Pecatonica, IL 61063</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs