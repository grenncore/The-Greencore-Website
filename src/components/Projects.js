import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import logo from './assets/images/logo2.png';
import session from './assets/images/daro.jpg';
import river from './assets/images/img2.jpg';
import industry from './assets/images/industry.jpg';
import heater from './assets/images/heater.jpg';
import greenhouse from './assets/images/img1.jpg';
import leafy from './assets/images/leafy.png';

const Projects = () => {
  return (
    <section className='projects'>
        <div className="landingProjects">
            <div className="myNav">
                <div className="myLogo">
                    <img id='myLogo' src={logo} alt="logo" />
                </div>
                <Menu />
            </div>

            <div className="container">
                <h1>Greencore <br /> Project <br /> Ideas.</h1>
                <img src={session} alt="" />
            </div>

            <div className="project1">
                <div className="left">
                    <img src={river} alt="" />
                </div>
                <div className="right">
                    <h5>01. Mini Hydro Electric Power </h5>
                    <p>
                    Aims at creating cheap, reliable, off-grid renewable electricity from low head rivers in Kenya.
                    The generated power will be monitored and run autonomously with sensors and switches to balance loads and notify users in case of breakouts and automated billing.
                    We hope to empower local communities to do value addition, create more jobs, improve network and room for adoption of zero emission facilities.
                    </p>
                </div>
            </div>
        </div>

        <div className="project2">
                <div className="left">
                    <h5>02. Micro Geothermal Power </h5>
                    <p>
                    Aims at creating cheap, reliable, off-grid renewable electricity from abandoned wells that cannot be connected to the main grid.
                    The generated power will be monitored and run autonomously with sensors and switches to balance loads, PVT and notify users in case of breakouts and automated billing.
                    We hope to empower local communities to do value addition, create more jobs, improve network and room for adoption of zero emission facilities at the same time create environmental awareness towards climate change.
                    </p>
                </div>
                <div className="right">
                    <img src={industry} alt="" />
                </div>
        </div>

        <div className="project3">
                <div className="left">
                    <img src={heater} alt="" />
                </div>
                <div className="right">
                    <h5>03. Geothermal Heater</h5>
                    <p>
                    A heat exchanger is used to transfer heat from one medium to another.
                    Our idea is controlling the temperature of the second medium by regulating the heating fluids disregarding all other design models. A user can therefore use the exchanger in various scenarios by using the use case from the menu.
                    The system will have sensors to monitor everything remotely.
                    The heat capacity will also be monitored to hint the machine operators on how much, for instance, they can charge for the operation using volume, time and heat capacity as determinants.
                    </p>
                </div>
        </div>

        <div className="project4" id="aqua">
                <div className="left">
                    <h5>04. Aquaponics System.</h5>
                    <p>
                    This system is based entirely around the nitrogen cycle. When the fish produce waste (ammonia), bacteria break it down into nitrates. A pump then carries this water, which is high in nitrates, to the grow bed where plants are growing. The plants draw nitrogen from the water, which both feeds the plants and cleans the water, making it safe to return to the fish tank.
                    This cycle repeats over and over, with the fish providing nutrition for the bacteria, the bacteria breaking down the fish waste and feeding the plants, and the plants cleaning the water to return back to the fish. Simple!
                    </p>
                </div>
                <div className="right">
                    <img src={greenhouse} alt="" />
                </div>
        </div>

        <div className="moreIdeas">
            <div className="container">
                <div className="left">
                    <h2>More <br /> <span>Green</span> Ideas.</h2>
                    <p>05. Free Energy Pumps.</p>
                    <p>06. Geothermal Drier.</p>
                    <p>07. Animal Disease Surveillance.</p>
                    <p>08. Geothermal Incubator.</p>
                    <p>09. Crop Surveillance System.</p>
                </div>
                <div className="right">
                    <img src={leafy} alt="" />
                </div>
            </div>
        </div>

        <Footer />
    </section>
  )
}

export default Projects