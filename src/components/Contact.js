import { React, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import Menu from './Menu';
import Footer from './Footer';
import logo from './assets/images/logo2.png'

const Contact = () => {
    const location = useLocation()

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])

  return (
    <section className='contactPage'>
        <div className="landing">
            <div className="myNav">
                <div className="myLogo">
                    <Link to="/">
                        <img id='myLogo' src={logo} alt="logo" />
                    </Link>
                </div>
                <Menu />
            </div>

            <div className="container">
                <h2>Contact Us</h2>
                <form action="">
                    <input type="text" placeholder='Name'/>
                    <input type="email" name="email" id="email"  placeholder='Email'/>
                    <textarea name="textarea" id="" cols="30" rows="3"  placeholder='Your Message'></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>

        <Footer />
    </section>
  )
}

export default Contact