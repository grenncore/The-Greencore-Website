import React from 'react'
import facebook from './assets/icons/icons8-facebook-96.png'
import twitter from './assets/icons/icons8-twitter-96.png'
import instagram from './assets/icons/icons8-instagram-96.png'
import whatsapp from './assets/icons/icons8-whatsapp-96.png'
import gmail from './assets/icons/icons8-envelope-96.png'

function Footer() {
  return (
    <>
        <div className='footercontainer'>
            <div className='footcontent'>
                <div className='footersub'>
                    <h2>QUICK NAV</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Projects</li>
                        <li>Our Teams</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='footersub'>
                    <h2>OUR ADDRESS</h2>
                    <ul>
                        <li>P.O BOX 536</li>
                        <li>20115 Nakuru - Kenya</li>
                    </ul>
                </div>
                <div className='footersub'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+2547 4343 7154</li>
                        <li>+2547 1918 4534</li>
                        <li>greencore@gmail.com</li>
                    </ul>
                </div>
                <div className='footersub'>
                    <h2>YOUR FEEDBACK</h2>
                    <form id='feedbackform'>
                        <input type='text' placeholder='Email'/>
                    </form>
                    <textarea rows={4} cols={30} form='feedbackform' placeholder='Message'></textarea><br></br>
                    <button className='feedbutton'>SEND</button>

                </div>
            </div>
            <div className='socials'>
                <p>Reach out to us and follow us on our socials to stay updated</p>
                <ul>
                    <li><a href='#'><img width={40} src={facebook} alt='Facebook'/></a></li>
                    <li><a href='#'><img width={40} src={twitter} alt='Twitter'/></a></li>
                    <li><a href='#'><img width={40} src={instagram} alt='Instagram'/></a></li>
                    <li><a href='#'><img width={40} src={whatsapp} alt='WhatsApp'/></a></li>
                    <li><a href='#'><img width={40} src={gmail} alt='Gmail'/></a></li>
                </ul>
            </div>
            <h3 className='copyrighttext'>Copywrite© 2022 Greencore</h3>
        </div>
        
    </>
  )
}

export default Footer