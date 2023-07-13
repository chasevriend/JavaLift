import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer__container'>
                <span>
                    <h2 className='footer__logo'>JavaLift</h2>
                </span>
                <span>
                    <p>Home</p>
                    <p>Programs</p>
                    <p>About</p>
                    <p>Exercise Library</p>
                    <p>Join Program</p>
                </span>
                <span>
                    <p>Support</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </span>
            </div>
        </div>    
    </>
  )
}

export default Footer;