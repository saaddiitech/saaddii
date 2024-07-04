import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <h1>AI-SUSHI.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum possimus harum dicta tempore quam accusamus, laboriosam vitae quia eaque, sunt in atque maiores consequatur facilis inventore vero, adipisci esse voluptatem!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-333-444</li>
                    <li>contact@AI-SUSHI.com</li>
                </ul>

        </div>
    </div>
  <hr />
  <p className="footer-copyright">copyright 2024 @ AI-SUSHI.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer