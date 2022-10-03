import React from 'react';
const Blog = () =>{
  return (
    <div className ='blog'>
      <div className='blog-section'>
       <div className ='title'>
        <h1 >Our <br/> 
        <span> Green </span>{""}Blogs
        
        </h1>
       </div>
       <div className='blogContent'>
        <div className='first-blog'>
            <div className='firstBlog1'>
                <h2>Why we should produce more off-grid power</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Adipisci praesentium et repellat? Dolorum nobis repellendus adipisci. <br/>Natus reiciendis porro nihil!</p>
                <button className='readMore'>READ MORE</button>
            </div>
            <div className='firstBlog2'>
                <div>
                    <h2>Industry Academia Platform Project</h2>
                </div>
                <div>
                    <h2>Picking the right arduino</h2>
                </div>
            </div>
        </div>
       </div>
       <div className='second-blog'>
            <div>
              <h3>Microsoft Learn Student Ambassador</h3>
            </div>
            <div>
             <h3>Can I use arduino commercially</h3>
            </div>
            <div>
              <h3>Discover internet of things</h3>
            </div>
        </div>
      </div>
      <div className='techBlog'>
        <h2 className='tech-title'>Technology</h2>
        <div className='tech-content'>
          <h2>See More </h2>
          <div className='artificial'>
            <h2 className='artificial-title'>Artificial Intellligence and Machine Learning</h2>
            <p className='artificial-p'>lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Error consequatur ipsa, sed veritatis labore vel beatae numquam <br/>voluptatibus rerum inventore delectus maxime alias, illo et excepturi voluptatem! Vero, alias architecto.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog