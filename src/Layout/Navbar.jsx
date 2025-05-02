import React, { useEffect, useState } from 'react';
// import logo from '../assets/Image/logo.jpg';


import { NavLink, useLocation } from 'react-router-dom';

import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';


const ThemeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const location = useLocation();




  useEffect(() => {
    // Scroll to the bottom when the page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  }, [location]);




  const navlist = (
    <ul className="flex lg:flex-row flex-col list-none gap-8 font-[500] items-center">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booking"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          Contact Us
        </NavLink>
      </li>





    </ul>
  );


  return (
    <>
      <section className='py-4  absolute w-full z-[10]'>
        <div className="container mx-auto w-full">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <NavLink to='/'>
              {/* <img src={logo} alt='Logo' className='h-[80px]' /> */}
              <h2>
                Logo
              </h2>
            </NavLink>

            {/* Navbar links for larger screens */}
            <div className="hidden lg:flex items-center gap-8">
              {navlist}

              {/* Search and Cart icons for desktop view */}

            </div>

            {/* Sidebar icon for mobile */}
            <div className="lg:hidden">
              <button onClick={toggleMenu}>
                <CiMenuFries className="text-3xl" />
              </button>
            </div>


          </div>
        </div>

        {/* Sidebar menu for mobile */}
        <div
          className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 lg:hidden`}
          style={{ width: '50%' }}
        >

          <div className="p-6">
            {/* Close button inside the sidebar */}
            <div className="flex justify-end mb-6">
              <button onClick={toggleMenu}>
                <IoClose className="text-2xl" />
              </button>
            </div>
            {navlist}
          </div>
        </div>
      </section>
    </>
  );
};

export default ThemeNavbar;
