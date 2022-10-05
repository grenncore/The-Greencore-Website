import React from 'react';
import Menu from './Menu';
import windmill from './assets/images/modern-wind-farm-line-a-rolling-hillside.jpg'
import engineers from './assets/images/engs.jpg'
import mastrich from './assets/images/mastr.png'
import egerton from './assets/images/eu.png'
import eutec from './assets/images/eutec.png'
import coelib from './assets/images/coelib.png'
import solar from './assets/images/solarr.jpg'
import fruits from './assets/images/fruits.png'
import crop from './assets/images/cropp.jpg'
import soil from './assets/images/soil.png'
import logo from './assets/images/logo.png'
import image1 from './assets/images/img1.jpg'
import image2 from './assets/images/img2.jpg'
import image3 from './assets/images/img3.jpg'
import { FaInstagram }from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';


const Home = () => {
  return (
    <section className='homePage'>
        <section className="landing">
            <div className="myNav">
                <div className="myLogo">
                    <img id='myLogo' src={logo} alt="logo" />
                </div>
                <Menu />
            </div>
            <div className="container">
                <div className="leftDiv">
                    <h1>Greencore</h1>
                    <div className="textDiv">
                    <p>All about sustainable development and offering solutions to the local communities.</p>
                    </div>
                </div>
                <div className="rightDiv">
                    <img src={windmill} alt="windmill" />
                    <div className="socials">
                        <FaInstagram className="icons" />
                        <FiTwitter  className="icons"/>
                        <FiLinkedin  className="icons"/>
                    </div>
                </div>
            </div>
        </section>
        <section className='intro'>
            <div className="innerSection">
                <p><span id='smallText'>WHO WE ARE</span> A CONSORTIUM EMPOWERING YOUTHS TO FOSTER COLLABORATIVE THINKING AND FURTHER DRIVE LOCAL INNOVATIONS.</p>
                <img src={soil} alt="soil" />
            </div>
        </section>

        <section className="innovations">
            <div className="innerSection2">
                <div className="left">
                    <img src={solar} alt="solar panel" />
                </div>
                <div className="right">
                    <p><span>Our innovations</span> range from Agricultural value addition, Renewable energy generation, Geothermal direct uses, Health and food products, Business and management, Consultancy to Development of technological products.</p>

                    <img src={crop} alt="crop" />
                </div>
            </div>
        </section>

        <section className='projectsSection'>
            <div className="innerSection3">
                <div className="left">
                    <p>Greencore <br />
                        Project <br />
                        Ideas.
                    </p>

                    <div className="box" id='box1'>
                        <img src={image1} alt="" />
                        <a href="./">Aquaponics System <FiArrowRight className='icon'/></a>
                    </div>
                    <a href="./" id="toProjects">ALL PROJECTS <FiArrowRight className='icon'/></a>
                </div>
                <div className="right">
                <div className="box" id='box2'>
                        <img src={image2} alt="" />
                        <a href="./">Mini Hydro Electric Power <FiArrowRight className='icon'/></a>
                    </div>

                    <div className="box" id='box3'>
                        <img src={image3} alt="" />
                        <a href="./">Free Energy Pump <FiArrowRight className='icon'/></a>
                    </div>
                </div>
            </div>
        </section>

        <section className="categories">
            <div className="innerSection">
                <h3>OUR <span>DIVERSE</span></h3>
                <h3 id='lowerH3'><span>TEAM</span> CATEGORIES</h3>
                    <div className="container">
                        <div className="left">
                            <img src={engineers} alt="" />
                        </div>
                        <div className="right">
                           
                            <p>01. Electrical &amp; Control</p>
                            <p>02. Civil &amp; Environment</p>
                            <p>03. Health &amp; Food Science</p>
                            <p>04. Information Technology</p>
                            <p>05. Mechatronics</p>
                            <p>06. Business &amp; Marketing</p>
                            <p>07. Geothermal</p>
                            <p>08. Agriculture</p>
                        </div>
                    </div>

                <a href="./" id='toTeams'>OUR TEAMS <FiArrowRight className='icon'/></a>
            </div>
        </section>

        <section className='partners'>
            <div className="innerSection">
                <div className="left">
                    <h3>Our <br /> Partners</h3>
                    <img src={fruits} alt="" />
                </div>

                <div className="right">
                    <img src={coelib} id='coelib' className='partnersLogo' alt="" />
                    <img src={egerton} id='egerton' className='partnersLogo' alt="" />
                    <img src={eutec} id='eutec' className='partnersLogo' alt="" />
                    <img src={mastrich} id='mastrich' className='partnersLogo' alt="" />
                </div>
            </div>
        </section>
    </section>
  )
}

export default Home