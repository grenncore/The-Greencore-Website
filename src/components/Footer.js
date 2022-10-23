import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram }from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <footer>
        <div className='footerContainer'>
            <div className='footContent'>
                <div className='footerSub'>
                    <h4>QUICK NAV</h4>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/About">About</Link>
                        </li>

                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>

                        <li>
                            <Link to="/Teams">Our Teams</Link>
                        </li>

                        <li>
                            <Link to="/Blog">Our Blogs</Link>
                        </li>

                        <li>
                            <Link to="#contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='footerSub'>
                    <h4>OUR ADDRESS</h4>
                    <ul>
                        <li>P.O BOX 536</li>
                        <li>20115 Nakuru - Kenya</li>
                    </ul>
                </div>
                <div className='footerSub'>
                    <h4>GET IN TOUCH</h4>
                    <ul>
                        <li>+2547 4343 7154</li>
                        <li>+2547 1918 4534</li>
                        <li>greencore@gmail.com</li>
                    </ul>
                    <div className="socials">
                        <FaInstagram className='icons' />
                        <FiTwitter className='icons' />
                        <FiLinkedin className='icons' />
                    </div>
                </div>
                <div className='footerSub'>
                    <h4>YOUR FEEDBACK</h4>
                    <form id='feedbackform'>
                        <input type='text' placeholder='Email'/>
                    </form>
                    <textarea rows={3}  form='feedbackform' placeholder='Message'></textarea><br></br>
                    <button className='feedButton'>SEND</button>

                </div>
            </div>

            <p className='copyrightText'>Copyright © 2022 Greencore</p>
        </div>
        
    </footer>
  )
}

export default Footer