import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className='myMenu'>
          	<input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label htmlFor="menu-icon"></label>
  	<nav className="nav"> 		
  		<ul className="pt-5">


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
          		<Link to="/Dev">Our Teams</Link>
        	</li>

			<li>
          		<Link to="/Dev">Our Blogs</Link>
        	</li>

			<li>
          		<Link to="/Contact">Contact Us</Link>
        	</li>

  		</ul>
  	</nav>
    </section>
  )
}

export default Menu