import React from 'react'

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
            <h3>Copywrite© 2022 Greencore</h3>
        </div>
        
    </>
  )
}

export default Footer