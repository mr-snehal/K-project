import React from 'react';

function App() {
  return (
    <div className='parent mx-4'>
      <nav className="navbar">
        <a href="#" className="logo"><img className='w-36' src="/images/bookstore.png" alt="" /></a>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="bi bi-menu-up text-2xl"></i>
        </label>
        <ul className="">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Our Service</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><button className='btn bg-purple-900 text-white p-1 rounded-full px-3'>Sign in</button></li>
          
        </ul>
      </nav>
      <div className=' lg:m-32 md:m-20  mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div className='div1 md:m-10 text-lg'>
          {/* <img src="/images/Group 327.png" alt="" /> */}
          <h1 className='text-5xl font-bold pt-8'>The <small className='text-5xl text-orange-500'>Smart</small></h1>
          <h2 className='text-5xl font-bold pt-4'>Choice For <small className='text-5xl text-orange-500'>Future</small></h2>
          <p className='pt-2 text-md'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Quis laborum reprehenderit delectus <br />  eaque est!</p>
          <div className='bg-#FDF8EE rounded-full flex items-center'>
            <i className="bi bi-search text-purple-900 mr-2"></i>
            <input type="text" id="search" placeholder='Search for a location...  ' className='bg-transparent outline-none border-none font-semibold' />
            <button className='btn2 bg-purple-900 text-sm text-white p-2 rounded-full px-3'>Continue</button>
          </div>
        </div>
        <div className='div2'>
          <img className='' src="/images/ob1.png" alt="" />
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}


      <div className='bg-violet-950 mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:mx-32 md:mx-20 text-white'>
        <div className='flex m-2'>
          <div >
            <img className='bg-zinc-700 p-3  border-black rounded-2xl w-32' src="/images/online-test 1.png" alt="" />
          </div>
          <div className='px-2'>
            <h2 className='text-lg'>Learn The Latest Skill</h2>
            <p className='text-xs py-2 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis rem assumenda voluptatum, qui consequatur.</p>
          </div>
        </div>
        <div className='flex m-2'>
          <div>
            <img className='bg-zinc-700 p-3  border-black rounded-2xl w-32' src="/images/exam 1.png" alt="" />
          </div>
          <div className='px-2'>
            <h2 className='text-lg'>Get Ready For a Career</h2>
            <p className='text-xs py-2 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis rem assumenda voluptatum, qui consequatur.</p>
          </div>
        </div>
        <div className='flex m-2'>
          <div>
            <img className='bg-zinc-700 p-3  border-black rounded-2xl w-32' src="/images/certification 1.png" alt="" />
          </div>
          <div className='px-2'>
            <h2 className='text-lg'>Earn a Certificate</h2>
            <p className='text-xs py-2 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis rem assumenda voluptatum, qui consequatur.</p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------- */}

      <div className='mt-8'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl'>Our Tracks</h1>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, nemo.</small>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:mx-32 md:mx-20'>
          <div className='rounded-lg p-2 shadow-md'>
            <img src="/images/p1.png" alt="" />
            <div className='flex justify-between'> 
              <div className=''>
                <small className='text-xs opacity-65'>UI/UX Design</small>
              </div>
              <div>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div>
              <h1>UI/UX Design for Beginners</h1>
              <small>$98</small>
              <hr />
              <p className='text-xs space-x-2'>
                <i class="bi bi-stopwatch"></i> 22hr 30min 
                <i class="bi bi-camera-video"></i> 34 Courses 
                <i class="bi bi-download"></i> 250 Sales 
              </p>
              <div className="flex justify-center items-center mt-4 "> 
                <button className='bg-orange-500 text-white p-1 rounded-full px-3 '>Join Course</button>
              </div> 
            </div>
          </div>
          
          <div className='rounded-lg p-2 shadow-md'>
            <img src="/images/p2.png" alt="" />
            <div className='flex justify-between'> 
              <div className=''>
                <small className='text-xs opacity-65'>UI/UX Design</small>
              </div>
              <div>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div>
              <h1>UI/UX Design for Beginners</h1>
              <small>$98</small>
              <hr />
              <p className='text-xs space-x-2'>
              <i class="bi bi-stopwatch"></i> 22hr 30min 
              <i class="bi bi-camera-video"></i> 34 Courses 
              <i class="bi bi-download"></i> 250 Sales 
              </p>
              <div className="flex justify-center items-center mt-4 "> 
                <button className='bg-orange-500 text-white p-1 rounded-full px-3 '>Join Course</button>
              </div> 
            </div>
          </div>
          <div className='rounded-lg p-2 shadow-md'>
            <img src="/images/p3.png" alt="" />
            <div className='flex justify-between'> 
              <div className=''>
                <small className='text-xs opacity-65'>UI/UX Design</small>
              </div>
              <div>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star-fill text-orange-500"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div>
              <h1>UI/UX Design for Beginners</h1>
              <small>$98</small>
              <hr />
              <p className='text-xs space-x-2'>
                <i class="bi bi-stopwatch"></i> 22hr 30min 
                <i class="bi bi-camera-video"></i> 34 Courses 
                <i class="bi bi-download"></i> 250 Sales 
              </p>
              <div className="flex justify-center items-center mt-4 "> 
                <button className='bg-orange-500 text-white p-1 rounded-full px-3 '>Join Course</button>
              </div>            
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------- */}

      <div className=' lg:m-32 md:m-16 mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <div>
          <img className='w-96' src="/images/ob2.png" alt="" />
        </div>
        <div>
        <h1 className='text-5xl font-bold pt-9'>Premium <small className='text-5xl text-orange-500'>Learning</small > </h1>
        <h2 className='text-5xl font-bold pt-4'>Experience</h2>
        <div className='flex mt-12'>
          <div className='space-y-5'>
            <img className='bg-violet-950 p-3  border-black rounded-2xl w-16' src="/images/hearts 1.png" alt="" />
            <img className='bg-violet-950 p-3  border-black rounded-2xl w-16' src="/images/jigsaw 1.png" alt="" />
          </div>
          <div className='px-4'>
            <h1 className='font-bold'>Easily Accessible</h1>
            <small>Learning will fell Very Comfortable With CoursLab</small>
            <h1 className='mt-10 font-bold'>Fun Learning Expe</h1>
            <small>Learning will fell Very Comfortable With CoursLab</small>
          </div>
        </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------- */}

      <div className='mt-8'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl'>What Students Say</h1>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, nemo.</small>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:mx-32 md:mx-20'>
          <div className='rounded-lg p-4 shadow-md'>
            <p className='text-sm opacity-65'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat non odio dolorem libero dignissimos, dolores fugit modi voluptatibus asperiores aliquid"</p>
            <div className='flex space-x-4 pt-4'>
              <div>
                <img src="/images/m1.png" alt="" />
              </div>
              <div>
                <h1>John Doe</h1>
                <h2 className='text-sm opacity-65'>Web Designer</h2>
              </div>
            </div>
             
            
          </div>
          <div className='rounded-lg p-4 shadow-md'>
            <p className='text-sm opacity-65'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat non odio dolorem libero dignissimos, dolores fugit modi voluptatibus asperiores aliquid"</p>
            <div className='flex space-x-4 pt-4'>
              <div>
                <img src="/images/m1.png" alt="" />
              </div>
              <div>
                <h1>John Doe</h1>
                <h2 className='text-sm opacity-65'>Web Developer</h2>
              </div>
            </div>
             
            
          </div>
          <div className='rounded-lg p-4 shadow-md'>
            <p className='text-sm opacity-65'>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat non odio dolorem libero dignissimos, dolores fugit modi voluptatibus asperiores aliquid"</p>
            <div className='flex space-x-4 pt-4'>
              <div>
                <img src="/images/m1.png" alt="" />
              </div>
              <div>
                <h1>John Doe</h1>
                <h2 className='text-sm opacity-65'>UI/UX Designer</h2>
              </div>
            </div>
             
            
          </div>
          
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}

      <div className='mt-8'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl'>Our Tracks</h1>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, nemo.</small>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:mx-32 md:mx-20 '>
          <div className='rounded-lg p-2 shadow-md'>
            <img src="/images/p1.png" alt="" />
            <h1 className='mt-2'>John Doe</h1>
            <h2 className='text-sm opacity-70'>Professor @George college</h2>
            <h3 className='mt-4 text-sm opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsam!</h3>
            <div className='flex justify-between'> 
              <div>
                <h1 className='text-sm text-red-600 mt-4'>Engineering Physics</h1>
              </div>
              <div className='mt-4 space-x-3'>
              <i className="bi bi-instagram text-pink-600"></i>
              <i className="bi bi-linkedin text-blue-700"></i>
              </div>
            </div>
          </div>
          <div className='rounded-lg p-2 shadow-md'>
            <img src="/images/p2.png" alt="" />
            <h1 className='mt-2'>John Doe</h1>
            <h2 className='text-sm opacity-70'>Professor @George college</h2>
            <h3 className='mt-4 text-sm opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsam!</h3>
            <div className='flex justify-between'> 
              <div>
                <h1 className='text-sm text-red-600 mt-4'>Engineering Physics</h1>
              </div>
              <div className='mt-4 space-x-3'>
              <i className="bi bi-instagram text-pink-600"></i>
              <i className="bi bi-linkedin text-blue-700"></i>
              </div>
            </div>
          </div>
          <div className='rounded-lg p-2 shadow-md'>
            <img src="/images/p3.png" alt="" />
            <h1 className='mt-2'>John Doe</h1>
            <h2 className='text-sm opacity-70'>Professor @George college</h2>
            <h3 className='mt-4 text-sm opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsam!</h3>
            <div className='flex justify-between'> 
              <div>
                <h1 className='text-sm text-red-600 mt-4'>Engineering Physics</h1>
              </div>
              <div className='mt-4 space-x-3'>
              <i className="bi bi-instagram text-pink-600"></i>
              <i className="bi bi-linkedin text-blue-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------------- */}

      <div className='bg-violet-950   text-white lg:mx-32 md:mx-20 rounded-lg mt-20 text-center p-10'>
        <h1 className='text-3xl font-bold'>Subsribe to our newsletter</h1>
        <small className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small><br />
        <input type="text" name="" id="" placeholder='email address' className='bg-white rounded-full p-2 '/>
        <button className='btn2 bg-orange-500 text-sm text-white p-2 rounded-full mt-6'>Continue</button>

      </div>

      {/* ------------------------------------------------------------------------------- */}

      <div className='bg-pink-100 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 lg:mx-32 md:mx-20 text-black'>
        <div>
          <img className='w-32' src="/images/bookstore.png" alt="" />
          <p className='text-xs opacity-65'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium illo voluptatum? Quisquam beatae et repudiandae iusto, commodi labore quidem saepe earum perferendis reprehenderit impedit, dolore inventore? Consectetur, et consequuntur?</p>
        </div>
        <div className='space-y-3 '>
          <h1 className='text-black'>Company</h1>
          <h1 className='text-sm opacity-70'>About us</h1>
          <h1 className='text-sm opacity-70'>How to work</h1>
          <h1 className='text-sm opacity-70'>Popular courses</h1>
          <h1 className='text-sm opacity-70'>Service</h1>
        </div>
        <div  className='space-y-3'>
          <h1 className='text-black'>Courses</h1>
          <h1 className='text-sm opacity-70'>Categories</h1>
          <h1 className='text-sm opacity-70'>Video Course</h1>
          <h1 className='text-sm opacity-70'>Offline courses</h1>
          <h1 className='text-sm opacity-70'>Service</h1>
        </div>
        <div>
         <h1 className='text-black'>Support</h1>
          <h1 className='text-sm opacity-70'>Categories</h1>
          <h1 className='text-sm opacity-70'>Video Course</h1>
          <h1 className='text-sm opacity-70'>Offline courses</h1>
          <h1 className='text-sm opacity-70'>Service</h1>
        </div>  
        <div>
        <h1 className='text-black'>Contact info</h1>
        <h1 className='text-sm opacity-70'>Video Course</h1>
          <h1 className='text-sm opacity-70'>Offline courses</h1>
          <h1 className='text-sm opacity-70'>Service</h1>
        </div>
        
      </div>
      <h1 className='text-center'>Bookstore All right Preserved,2024</h1>

    </div>
  );
}

export default App;

