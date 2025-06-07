import React, { useState } from 'react'
import { Menu,X } from 'lucide-react'
import { Link } from 'react-router'

export default function Header() {
    const [isOpen,setisOpen]=useState(false)
  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between h-16 px-4 md:px-4'>
        <div className='flex'>
            <Link to="/">
            <img src='/Rezukah.png' alt="Rezukah" className='md:pl-30 w-56 md:w-86' />
            </Link>
        </div>
        <div onClick={()=>setisOpen(!isOpen)} className='md:hidden z-50'>
            <button>{isOpen ? <X aria-label="Close main menu" aria-expanded="true" aria-controls="mobile-menu" size={44} className='m-1   text-text-[#15416d]' />:<Menu size={44} aria-label="Open main menu" aria-expanded="false" aria-controls="main-menu" className='m-1 text-black' />}</button>
        </div>
        <div className={`absolute md:static top-16 left-0  w-full md:w-auto bg-[#fb9511] md:mr-40 rounded-b-xl  md:flex z-40 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            <nav role="navigation" aria-label="Main navigation">
            <ul className='flex flex-col md:flex-row md:items-center   md:space-x-10  p-4 md:p-4 text-[#15416d] text-sm font-calibri font-semibold'>
                <li onClick={()=>setisOpen(false)} className='py-2 px-2 active:underline md:hover:bg-[#15416d] md:hover:rounded-md md:hover:text-white md:hover:cursor-pointer'><Link to="/">Home</Link></li>
                <li onClick={()=>setisOpen(false)} className='py-2 px-2 active:underline md:hover:bg-[#15416d] md:hover:rounded-md md:hover:text-white md:hover:cursor-pointer'><Link to="/about">Abouts Us</Link></li>
                <li onClick={()=>setisOpen(false)} className='py-2 px-2 active:underline md:hover:bg-[#15416d] md:hover:rounded-md md:hover:text-white md:hover:cursor-pointer'><Link to="/services">Services</Link></li>
                <li onClick={()=>setisOpen(false)} className='py-2 px-2 active:underline md:hover:bg-[#15416d] md:hover:rounded-md md:hover:text-white md:hover:cursor-pointer'>Blogs</li>
                <li onClick={()=>setisOpen(false)} className='py-2 px-2 active:underline md:hover:bg-[#15416d] md:hover:rounded-md md:hover:text-white md:hover:cursor-pointer'>Contacts</li>
            </ul>
            </nav> 


        </div>
    

      
    </div>
  )
}
