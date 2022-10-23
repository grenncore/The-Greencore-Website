import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import logo from './assets/images/logo.png'
import windmilll from './assets/images/windmilll.jpg'
import zolar from './assets/images/zolar.jpg'
import tawi from './assets/images/tawi.png'
import fieldStudy from './assets/images/river.jpg'


const About = () => {
  return (
    <section className='about'>
        <section className="landing">
            <div className="myNav">
                <div className="myLogo">
                    <img id='myLogo' src={logo} alt="logo" />
                </div>
                <Menu />
            </div>

            <div className="textBox">
                <h1 className='myTitle'>About Us.</h1>
                <p className='txt'>We are a consortium of over 200 students with multidisciplinary teams from over 15 universities. We embrace a quadra helix model in our innovations in lieu of the academia. All about sustainable development and offering solutions to the local communities.</p>
            </div>
        </section>

        <div className="subSection">
            <div className="left">
                <img src={zolar} alt="" />
                <p>At Greencore, we empower students and youths to foster collaborative thinking to further drive local innovations. We believe that a consortium should act as a community and use the quadra helix mesh to communicate quickly and efficiently, and to create opportunities for the communities at large.</p>
            </div>
            <div className="right">
                <img src={windmilll} alt="" />
            </div>
        </div>

        <section className='why'>
            <div className="container1">
                <div className="whyTxt">
                    <h2>Why Greencore?</h2>
                    <ul>
                        <li>Be our partner in conserving the environment.</li>
                        <li>We customize our service to fit your demands.</li>
                        <li>We are a long term investment.</li>
                        <li>Harness clean, renewable and reliable energy.</li>
                        <li>A platform to transform your life through opportunities.</li>
                        <li>Grow your own business with us.</li>
                    </ul>
                </div>

                <div className="leafDiv">
                    <img id='leaf' src={tawi} alt="" />
                </div>
            </div>

            <div className="container2">
                <h2>Our <span>key</span> <br /> Activities.</h2>

                <div className="innerContainer">
                    <div className="left">
                        <img src={fieldStudy} alt="" />
                    </div>

                    <div className="right">
                       <div className="activity">
                        <p className='number'>01. </p><p>Research &#38; Development.</p>
                       </div>
                       <div className="activity">
                        <p className='number'>02. </p><p>Business &#38; Marketing.</p>
                       </div>
                       <div className="activity">
                        <p className='number'>03. </p><p>Software Development.</p>
                       </div>
                       <div className="activity">
                        <p className='number'>04. </p><p>Hardware &#38; Engineering.</p>
                       </div>                     
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </section>
  )
}

export default About