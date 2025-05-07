import React, { useEffect, useState } from 'react';
// import logo from '../assets/Image/logo.jpg';


import { Link, NavLink, useLocation, useParams } from 'react-router-dom';

import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { baseUrl } from '../Api/BaseUrl';


const ThemeNavbar = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(false);
  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState({});

  // Fetch all services
  const getServices = async () => {
    try {
      const resp = await axios.get(`${baseUrl}service`);
      setServices(resp.data.data); // assuming an array of services with id and title
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Fetch service details for all services
  const getAllServiceDetails = async () => {
    try {
      const details = {};
      for (const service of services) {
        const resp = await axios.get(`${baseUrl}service-details/by-service/${service._id}`);
        details[service._id] = resp.data.data; // assuming data is an array of strings or objects with title
      }
      setServiceDetails(details);
    } catch (error) {
      console.error("Error fetching service details:", error);
    }
  };

  // Fetch both on mount
  useEffect(() => {
    // const fetchData = async () => {
    //   await getServices();
    // };
    // fetchData();
    getServices();
  }, []);

  useEffect(() => {
    if (services.length) {
      getAllServiceDetails();
    }
  }, [services]);



  //  old code
  //   const [data, setdata] = useState([]);
  //   const handleget = async () => {
  //     try {
  //       const resp = await axios.get(`${baseUrl}service`);
  //       console.log(resp);
  //       setdata(resp.data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   const handleservicedetail = async () => {
  //     try {
  //       const resp = await axios.get(`${baseUrl}service-details/by-service/68187f1910eebd7425cf7138`);
  //       console.log(resp);
  //       setdata(resp.data.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  // useEffect(() => {
  //   handleget();
  //   handleservicedetail()
  // }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(false)
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
            e.preventDefault();
            setOpenDropdown((prev) => (prev === "Services" ? null : "Services"));
          }}
        >
          SERVICES
        </NavLink>
        {/* oldcode
        {openDropdown === "Services" && (
          <div
            className="absolute  top-[40px] -translate-x-1/2 bg-white shadow-lg p-6 w-[95vw] max-w-[1190px] flex gap-10 z-50 text-sm dropdown max-h-[80vh] overflow-y-auto"
            onMouseEnter={() => setOpenDropdown("Services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            
              <div>
                <h4 className="md:text-[14px] text-[13px] font-[600] mb-2 text-[#00b0a8]">STARTUP REGISTRATION</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li className="">
                    <Link
                      to={`/sub-service/${id}`}
                      onClick={() => {
                        setOpenDropdown(false);
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
        )}  */}
        {openDropdown === "Services" && (
          <div
            className="absolute top-[40px] -translate-x-1/2 bg-white shadow-lg p-6 w-[95vw] max-w-[1190px] flex gap-10 z-50 text-sm dropdown max-h-[80vh] overflow-y-auto"
            onMouseEnter={() => setOpenDropdown("Services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {services.map(service => (
                <div key={service._id}>
                  <h4 className="md:text-[14px] text-[13px] font-[600] mb-2 text-[#00b0a8]">
                    {service.title}
                  </h4>
                  <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                    {(serviceDetails[service._id] || []).map((detail, i) => (
                      <li key={i}>
                        <Link
                          to={`/service_detail_url/${detail.url}`}
                          onClick={() => {
                            setOpenDropdown(false);
                            setIsOpen(false);
                            
                          }}
                        >
                          {detail.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

      </li>
      <li className="relative">
        <NavLink
          to="/sub-service"
          className={({ isActive }) =>
            isActive ? "text-[#00b0a8]" : "hover:text-[#00b0a8]"
          }
          onClick={(e) => {
            e.preventDefault();
            setOpenDropdown((prev) => (prev === "regulatory" ? null : "regulatory"));
          }}
        >
          REGULATORY
        </NavLink>

        {openDropdown === "regulatory" && (
          <div
            className="absolute  top-[40px] -translate-x-1/2 bg-white shadow-lg p-6 w-[95vw] max-w-[1190px] flex gap-10 z-50 text-sm regulatorydropdown max-h-[80vh] overflow-y-auto"
            onMouseEnter={() => setOpenDropdown("regulatory")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">

              <div>
                <h4 className="md:text-[14px] text-[13px] font-[600] mb-2 text-[#00b0a8]">RBI</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li className="">
                    <Link
                      to="/sub-service"
                      onClick={() => {
                        setOpenDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      NBFC Registration
                    </Link>
                  </li>

                  <li>Payment Gateway License</li>
                  <li>NBFC Takeover</li>
                  <li>NBFC Collaboration</li>
                  <li>NBFC Account Aggregator License</li>
                  <li>FFMC License</li>
                  <li>Microfinance Company Registration</li>
                  <li>Housing Finance Company Registration</li>
                  <li>Prepaid Wallet License</li>
                  <li>Peer to Peer Lending License</li>
                  <li>Payment Bank License</li>
                </ul>
              </div>


              <div>
                <h4 className="text-[14px] font-[600] mb-2 text-[#00b0a8]">SEBI</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li>Alternate Investment Fund Registration (AIFs)</li>
                  <li>Mergers and Acquisitions</li>

                </ul>
              </div>
              <div>
                <h4 className="text-[14px] font-[600] mb-2 text-[#00b0a8]">IRDA</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li>Insurance Broker License</li>
                  <li>Insurance Company License</li>
                  <li>Insurance Web Aggregator License</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[14px] font-[600] mb-2 text-[#00b0a8]">FEMA</h4>
                <ul className="space-y-1 *:md:text-[13px] *:text-[11px] *:font-[300]">
                  <li>Project Office Registration</li>
                  <li>Branch Office Registration</li>
                  <li>FEMA Compliance</li>
                  <li>Liaison Office Registration</li>
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
          Licenses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gst"
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
          to="/contact"
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
        <div className="px-[3rem] mx-auto w-full">
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
