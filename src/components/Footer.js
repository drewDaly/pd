import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
            <div className="container" id="footer" >
                <div className="row">
                    <div className="credits">
                        <p>© 2022 Peterson-Daly Farms LLC</p>
                        <p>Built by <a href="https://www.linkedin.com/in/drew-daly-uiuc2025/" id="drew" target="_blank" rel="noopener noreferrer"> Drew Daly</a></p>
                    </div>
                </div>
            </div>    
    </footer>
  )
}

export default Footer