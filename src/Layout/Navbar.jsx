import React, { useEffect, useState } from 'react';
// import logo from '../assets/Image/logo.jpg';


import { Link, NavLink, useLocation } from 'react-router-dom';

import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';


const ThemeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


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
      <li className="relative">
        <NavLink
          to="/sub-service"
          className={({ isActive }) =>
            isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"
          }
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            setIsServicesOpen((prev) => !prev);
          }}
        >
          SERVICES
        </NavLink>

        {isServicesOpen && (
          <div
            className="absolute  top-[40px] -translate-x-1/2 bg-white shadow-lg p-6 w-[95vw] max-w-[1190px] flex gap-10 z-50 text-sm dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {/* STARTUP REGISTRATION */}
              <div>
                <h4 className="md:text-[14px] text-[13px] font-[600] mb-2 text-[#00b0a8]">STARTUP REGISTRATION</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li className="">
                    <Link
                      to="/sub-service"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      Proprietorship
                    </Link>
                  </li>

                  <li>Partnership</li>
                  <li>One Person Company</li>
                  <li>Limited Liability Partnership</li>
                  <li>Private Limited Company</li>
                  <li>Public Limited Company</li>
                  <li>Nidhi Company</li>
                  <li>Producer Company</li>
                  <li>Section 8 Company</li>
                  <li>Trust Registration</li>
                  <li>Society Registration</li>
                </ul>
              </div>

              {/* DIRECT TAXATION */}
              <div>
                <h4 className="text-[14px] font-[600] mb-2 text-[#00b0a8]">DIRECT TAXATION</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li>Corporate tax advisory & compliance</li>
                  <li>International tax advisory & compliance</li>
                  <li>Transfer pricing study & documentation</li>
                  <li>Litigation & representation assistance</li>
                  <li>Personal tax advisory</li>
                </ul>
              </div>

              {/* GOODS & SERVICE TAX */}
              <div>
                <h4 className="text-[14px] font-[600] mb-2 text-[#00b0a8]">GOODS & SERVICE TAX</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li>GST Advisory and Compliance</li>
                  <li>GST Litigation Services</li>
                  <li>GST Registration</li>
                  <li>GST Returns</li>
                  <li>GST Annual Return</li>
                  <li>GST Eway Bill</li>
                  <li>LUT in GST</li>
                </ul>
              </div>

              {/* ROC COMPLIANCES */}
              <div>
                <h4 className="text-[14px] font-[600] mb-2 text-[#00b0a8]">ROC COMPLIANCES</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li>Annual Compliance for Private Limited</li>
                  <li>Annual Compliance of LLP</li>
                  <li>Nidhi Company Compliance</li>
                  <li>Section 8 Company Compliance</li>
                  <li>NBFC Compliance</li>
                  <li>Winding Private Limited Company</li>
                  <li>Closure of LLP</li>
                  <li>Revival of Struck Off Companies</li>
                </ul>
              </div>

              {/* AUDIT & ASSURANCE */}
              <div>
                <h4 className="text-[14px] font-[600] mb-2 text-[#00b0a8]">AUDIT & ASSURANCE</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li>Tax Audit</li>
                  <li>Due Diligence</li>
                  <li>Management Audits</li>
                  <li>Certification Services</li>
                  <li>Agreed upon procedures</li>
                  <li>Other Audits</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </li>

      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          Regulatory
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          Licenses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          GST
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          Knowledge Base
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"}
        >
          Utilities
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
      {/* <section className={`py-4 ${location.pathname === '/sub-service' ? 'absolute z-[10] w-full' : 'relative'}`}> */}
      <section className="py-6 absolute z-[10] w-full">
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
