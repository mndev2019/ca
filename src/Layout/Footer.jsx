import React from 'react'
// import logo from '../assets/Image/logo.jpg'

// import logo from '../assets/Image/logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <section className='lg:py-15 py-10 bg-[#212529]' >
                <div className="container mx-auto md:px-20 px-5">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1">
                        <div className="col-span-5">
                            <div className="w-full">
                                <h2 className='text-white fw-bold '>
                                    Logo
                                </h2>
                                {/* <img src={logo} alt='image' className=' rounded-[5px] lg:h-[100px] h-[80px] bg-white p-2' /> */}
                                <p className='text-white lg:text-[16px] text-[12px] lg:pt-4 pt-2 hover:text-[#00b0a8]'>
                                    Progressive, multifaceted Indian Chartered Accountant firm with domestic & international experience in assurance, tax, systems and transaction advisory, with a strategic consulting approach to deliver value to clients small to large, start-up to matured businesses
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3 lg:p-0 pt-3">
                            <h3 className='text-[#00b0a8] font-[600] lg:text-[20px] text-[15px]'>
                                Our Company
                            </h3>
                            <ul className='*:text-white *:hover:text-[#00b0a8] *:lg:text-[16px] text-[12px] lg:pt-4 pt-2'>
                                <li className='pb-3 cursor-pointer'><Link to="/">Home</Link></li>
                                <li className='pb-3 cursor-pointer'><Link to="/about">About Us</Link></li>
                                <li className='pb-3 cursor-pointer'><Link to="/programs">Programs</Link></li>

                            </ul>
                        </div>
                        <div className="col-span-4 lg:p-0 md:pt-3 pt-0">
                            <h3 className=' font-[600] lg:text-[20px] text-[15px] text-[#00b0a8]'>
                                Contact Us
                            </h3>
                            <p className='text-white lg:text-[16px] text-[12px] lg:pt-4 pt-2 hover:text-[#00b0a8]'>
                                B-9, Second Floor, Mahalaxmi Nagar, Behind WTP South Block, Malviya Nagar, Jaipur - 302017(Raj.)
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 pt-10 text-center ">
                            <p className='text-white lg:text-[16px] text-[11px] font-[100] border-t border-[#bcafaf] pt-5'>© Copyright Chartered Accountants. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
