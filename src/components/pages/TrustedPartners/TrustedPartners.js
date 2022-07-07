import React from 'react'
import "./TrustedPartners.scss"
import { PbData, PceData, BurrusData, DekalbData, TrustMast } from './Data';
import Masthead from '../../Masthead';
const TrustedPartners = () => {
  return (
    <>
    <Masthead {...TrustMast} />
    <div class="trust-container" id="trust-section">
        <div class="performance-beef">
            <div class="logo" id="pb__logo">
                <a href="https://www.performancelivestockanalytics.com" target="_blank" rel="noopener noreferrer">
                    <img src={PbData.pb} alt="pb_logo" id="pb_logo"></img>
                </a>
            </div>
            <div class="para" id="pb__para">
                <h3>Performance Beef</h3>
                <h3>--</h3>
                <p>{PbData.pbPara}</p>
            </div>
        </div>
        <div class="pearl-city">
            <div class="logo" id="pce__logo">
                <a href="https://pce-coops.com" target="_blank" rel="noopener noreferrer">
                    <img src={PceData.pce} alt="pce_logo" id="pce_logo"></img>
                </a>
            </div>
            <div class="para" id="pce__para">
                <h3>Pearl City Elevator</h3>
                <h3>--</h3>
                <p>{PceData.pcePara}</p>
            </div>
        </div>
        <div class="burrus">
            <div class="logo" id="burrus__logo">
                <a href="https://burrusseed.com" target="_blank" rel="noopener noreferrer">
                    <img src={BurrusData.burrus} alt="burrus_logo" id="burrus_logo"></img>
                </a>
            </div>
            <div class="para" id="burrus__para">
                <h3>Burrus Seed</h3>
                <h3>--</h3>
                <p>{BurrusData.burrusPara}</p>
            </div>
        </div>
        <div class="dekalb">
            <div class="logo" id="dekalb__logo">
                <a href="https://hueberfeed.com/dekalb-feeds" target="_blank" rel="noopener noreferrer">
                    <img src={DekalbData.dekalb} alt="dekalb_logo" id="dekalb_logo"></img>
                </a>
            </div>
            <div class="para" id="dekalb__para">
                <h3>Dekalb Feeds</h3>
                <h3>--</h3>
                <p>{DekalbData.dekalbPara}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default TrustedPartners