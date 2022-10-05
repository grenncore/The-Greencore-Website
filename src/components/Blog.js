import React from 'react';
import '../styles/blog.css';
import { FiArrowUpRight } from 'react-icons/fi';
import lifestyle from './assets/images/gogreen.jpg';
import arduinoNano from './assets/images/Arduino-Nano.jpg';
import arduinoUno from './assets/images/2-15.jpg';
import artificial from './assets/images/AdobeStock_110840362-Converted-1200x849.jpg';
import BlockChain from './assets/images/Blockchain-for-Financial-Sector.jpg';
import industry from './assets/images/download.jpg';
import microsoft from './assets/images/How-to-Redeem-Your-Benefits-as-Alpha-Microsoft-Learn-Student-Ambassador.png';
import Business from './assets/images/dd.jpg';
import iot from './assets/images/hacking.jpg';
import power from './assets/images/QWQ.jpg';
const Blog = () =>{
  return (
    <div className ='blog'>
      <div className='blog-section'>
       <div className ='title'>
        <h1 >Our <br/> 
        <span> Green</span> Blogs
        </h1>
       </div>
       <div className='blogContent'>
        <div className='first-blog'>
            <div className='firstBlog1'>
                <div className='image'>
                <img src={power}alt=""/>
                <span>
                      18 Aug 2022 - Mike Olang
                </span>
                </div>
                <div>
                <h2>Why we should produce more off-grid power</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Adipisci praesentium et repellat? Dolorum nobis repellendus adipisci. <br/>Natus reiciendis porro nihil!</p>
                <button className='readMore'>READ ARTICLE <span><FiArrowUpRight/></span></button>
                </div>
            </div>
            <div className='firstBlog2'>
                <div>
                  <div className='image'>
                  <img src={industry}alt="" />
                  <span>
                      18 Aug 2022 - Mike Olang
                  </span>
                  </div>
                  <h2>Industry Academia Platform Project</h2>
                  <a href='./'>READ ARTICLE <span><FiArrowUpRight/></span></a>
                </div>
                <div>
                  <div className='image'>
                  <img src={arduinoNano}alt=""/>
                  <span>
                      18 Aug 2022 - Mike Olang
                  </span>
                  </div>
                  <h2>Picking the right arduino</h2>
                  <a href='./'>READ ARTICLE <span><FiArrowUpRight/></span></a>
                </div>
            </div>
        </div>
       </div>
       <div className='second-blog'>
            <div>
            <img src={microsoft}alt=""/>
              <h3>Microsoft Learn Student Ambassador</h3>
            </div>
            <div>
            <img src={arduinoUno}alt=""/>
             <h3>Can I use arduino commercially</h3>
            </div>
            <div>
              <img src={iot}alt=""/>
              <h3>Discover internet of things</h3>
            </div>
       </div>
      </div>
      <div className='techBlog'>
        <h2 className='tech-title'>Technology</h2>
        <div className='tech-content'>
          <a href='./'>SEE ALL <span><FiArrowUpRight/></span></a>
          <div className='artificial'>
           <img src={artificial}alt=""/>
            <div>
            <h2 className='artificial-title'>Artificial Intellligence and Machine Learning</h2>
            <p className='artificial-p'>lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Error consequatur ipsa, sed veritatis labore vel beatae numquam <br/>voluptatibus rerum inventore delectus maxime alias, illo et excepturi voluptatem! Vero, alias architecto.</p>
            <a href='./'>READ ARTICLE <span><FiArrowUpRight/></span></a>
            </div>
          </div>
        </div>
        <h2 className='tech-title'>LifeStyle</h2>
        <div className='tech-content'>
        <a href='./'>SEE ALL<span><FiArrowUpRight/></span></a>
          <div className='artificial'>
            <img src={lifestyle}alt=""/>
            <div>
            <h2 className='artificial-title'>Artificial Intellligence and Machine Learning</h2>
            <p className='artificial-p'>lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Error consequatur ipsa, sed veritatis labore vel beatae numquam <br/>voluptatibus rerum inventore delectus maxime alias, illo et excepturi voluptatem! Vero, alias architecto.</p>
            <a href='./'>READ ARTICLE <span><FiArrowUpRight/></span></a>
            </div>
          </div>
        </div>
        <h2 className='tech-title'>Business</h2>
        <div className='tech-content'>
        <a href='./'>SEE ALL<span><FiArrowUpRight/></span></a>
          <div className='artificial'>
          <img src={Business}alt=""/>
            <div>
            <h2 className='artificial-title'>Artificial Intellligence and Machine Learning</h2>
            <p className='artificial-p'>lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Error consequatur ipsa, sed veritatis labore vel beatae numquam <br/>voluptatibus rerum inventore delectus maxime alias, illo et excepturi voluptatem! Vero, alias architecto.</p>
            <a href='./'>READ ARTICLE <span><FiArrowUpRight/></span></a>
            </div>
          </div>
        </div>
        <h2 className='tech-title'>Trending</h2>
        <div className='tech-content'>
        <a href='./'>SEE ALL<span><FiArrowUpRight/></span></a>
          <div className='artificial'>
            <img src={BlockChain}alt=""/>
            <div>
            <h2 className='artificial-title'>What's is Web3?Wha is the future of internet?</h2>
            <p className='artificial-p'></p>
            <a href='./'>READ ARTICLE <span><FiArrowUpRight/></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog