import React from 'react'
import './sponsor.css'
import sponsorlogo1 from "../../assets/svg/sponsor-svg/sponsor-logo.svg"
import sponsorlogo2 from "../../assets/svg/sponsor-svg/sponsor.svg"
function Sponsor() {
  return (
    <div id="sponsor">
      <div className="sponsor-container">
        <h1 className='sponsor-heading'>Our Sponsor</h1>
        <hr className="sponsor-hr"/>
        <img src={sponsorlogo1} alt='ICONS8 Logo' className='sponsor-logo'></img>
        <img src={sponsorlogo2} alt='ICONS8 Logo' className='sponsor-logo'></img>
      </div>
    </div>
  )
}

export default Sponsor
