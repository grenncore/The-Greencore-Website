import React from 'react'

const Menu = () => {
  return (
    <section className='myMenu'>
          	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label HTMLfor="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a href="./">Home</a></li>
  			<li><a href="./">About Us</a></li>
  			<li><a href="./">Projects</a></li>
  			<li><a href="./">Our Teams</a></li>
			<li><a href="./">Our Blogs</a></li>	
			<li><a href="./">Contact Us</a></li>
  		</ul>
  	</nav>
    </section>
  )
}

export default Menu