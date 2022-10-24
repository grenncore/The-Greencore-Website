import React from 'react'
import { Link } from "react-router-dom";
import logo from './assets/images/logo2.png'
import Menu from './Menu';
import Footer from './Footer';

const _404 = () => {
  return (

    <section className='e404'>

        <div className="myNav">
            <div className="myLogo">
                <Link to="/">
                    <img id='myLogo' src={logo} alt="logo" />
                </Link>
            </div>
            <Menu />
        </div>

        <div className="container">
          <h3>Error 404: Page Not Found.</h3> 
        </div>

        <Footer />
    </section>
  )
}

export default _404