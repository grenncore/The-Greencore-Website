import React from 'react';
import { Link } from "react-router-dom";
import logo from './assets/images/logo2.png'
import Menu from './Menu';
import Footer from './Footer';

const Dev = () => {
  return (
    <section className='dev'>
        
        <div className="myNav">
            <div className="myLogo">
                <Link to="/">
                    <img id='myLogo' src={logo} alt="logo" />
                </Link>
            </div>
            <Menu />
        </div>

        <div className="container">
          <h3>Keep Calm, This page is still under development.</h3> 
        </div>

        <Footer />
    </section>
  )
}

export default Dev