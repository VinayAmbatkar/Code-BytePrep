import React from 'react'
import './App.css'
import logo from '../src/assets/Images/logo/Logo.png'
import side from '../src/assets/Images/Hero/Side.png'


function App() {

  return (
    <>
<div className="container">
<div className="flex items-center p-4 ">
      <img src={logo} alt="logo" className="h-10 w-auto mr-6" />
      <div className="flex-grow">
        <div className="relative">
          <input type="text" placeholder="Search Hear..." />
        </div>
      </div>
      <div className="nva-right">
        <ol className="flex space-x-20 ml-0 text-gray-700">
        <li><a href="#practice" className="hover:text-gray-900">Practice</a></li>
        <li><a href="#compete" className="hover:text-gray-900">Compete</a></li>
        <li><a href="#explore" className="hover:text-gray-900">Explore</a></li>
        <li><a href="#login" className="text-purple-500 hover:text-purple-700">Login</a></li>
      </ol>
      </div>
      
      <button className="ml-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md ">Sign Up</button>
    </div>
</div>


<img src={side} alt="" className='sidehero' />

   <main>
   <div className='container2'>
      <h2><span1>A</span1> New Way <span>to Learn</span></h2>
      <p>Develop Early Skills in Logic,Problem Solving , <br></br>and Reading Comprehensiton</p>
      <button type="button">Create Account</button>
   </div>
  </main>     


    </>
  );
}


export default App
