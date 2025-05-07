import axios from 'axios'
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { baseUrl } from '../../Api/BaseUrl'
import { toast } from 'react-toastify'

const Contactus = () => {
    const [name, setname] = useState("");
    const [mobile, setmobile] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const handlesubmit = async (e) => {
        e.preventDefault();
        const requestdata = {
            name: name,
            mobile: mobile,
            email: email,
            message: message,
        };

        try {
            const response = await axios.post(`${baseUrl}contact`, requestdata);
            console.log(response.data);
            if(response.data.error === 0){
                toast.success("form submit successfully!")
                setname("");
                setmobile("");
                setemail("");
                setmessage("");
            }else{
                toast.error(response.message)  
            }

        } catch (error) {
            console.error('Error submitting:', error);
        }
    };

    return (
        <>
            <section className="bg-gradient-to-r from-[#00b0a8] to-white h-[300px] ">
                <div className="container mx-auto h-full px-4 flex flex-col justify-center items-center text-center">
                    <h2 className="md:text-3xl text-2xl font-bold mb-4">Contact Us</h2>
                </div>
            </section>
            <section className='py-10'>
                <div className="container mx-auto lg:px-20 md:px-10 px-5">
                    <div className="grid lg:grid-cols-4 grid-cols-1  gap-4">
                        <div className="lg:col-span-2 col-span-1">
                            <a href="mailto:likemindedsoc@gmail.com">
                                <div className="w-full h-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-xl bg-white">

                                    {/* Decorative Gradient Stripe */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-[#00b0a8] to-white rounded-t-xl"></div>

                                    {/* Icon Wrapper */}
                                    <div className="icon h-[60px] w-[60px] rounded-full border-2 border-dotted border-[#00b0a8] items-center justify-center flex mx-auto bg-[#f9f9f9] shadow-md">
                                        <MdOutlineMarkEmailRead className="text-black text-[30px]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-[20px] font-[700] text-center mt-4 text-black group-hover:text-[#00b0a8] transition-all">
                                        Email
                                    </h3>
                                    <a href="mailto:likemindedsoc@gmail.com" className="text-[14px] font-[500] text-center text-gray-600 block">
                                        xyz@gmail.com
                                    </a>

                                    {/* Bottom Border Highlight */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#00b0a8] rounded-full mt-3 group-hover:w-24 transition-all duration-300"></div>
                                </div>
                            </a>
                        </div>
                        <div className=" col-span-1">
                            <a href="tel:9821420556">
                                <div className="w-full h-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-xl bg-white">

                                    {/* Decorative Gradient Stripe */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-[#00b0a8] to-white rounded-t-xl"></div>

                                    {/* Icon Wrapper */}
                                    <div className="icon h-[60px] w-[60px] rounded-full border-2 border-dotted border-[#00b0a8] items-center justify-center flex mx-auto bg-[#f9f9f9] shadow-md">
                                        <IoCallOutline className="text-black text-[30px]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-[20px] font-[700] text-center mt-4 text-black group-hover:text-[#00b0a8] transition-all">
                                        Contact
                                    </h3>
                                    <a href="tel:9821420556" className="text-[14px] font-[500] text-center text-gray-600 block">
                                        0000000000
                                    </a>

                                    {/* Bottom Border Highlight */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#00b0a8] rounded-full mt-3 group-hover:w-24 transition-all duration-300"></div>
                                </div>
                            </a>
                        </div>
                        <div className=" col-span-1">
                            <a href="tel:9821420556">
                                <div className="w-full h-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-6 rounded-xl relative overflow-hidden group transition-all duration-300 hover:shadow-xl bg-white">

                                    {/* Decorative Gradient Stripe */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-[#00b0a8] to-white rounded-t-xl"></div>

                                    {/* Icon Wrapper */}
                                    <div className="icon h-[60px] w-[60px] rounded-full border-2 border-dotted border-[#00b0a8] items-center justify-center flex mx-auto bg-[#f9f9f9] shadow-md">
                                        <FaWhatsapp className="text-black text-[30px]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-[20px] font-[700] text-center mt-4 text-black group-hover:text-[#00b0a8] transition-all">
                                        WhatsApp
                                    </h3>
                                    <a href="tel:9821420556" className="text-[14px] font-[500] text-center text-gray-600 block">
                                        000000000
                                    </a>

                                    {/* Bottom Border Highlight */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#00b0a8] rounded-full mt-3 group-hover:w-24 transition-all duration-300"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-5">
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093697!2d144.95373631531672!3d-37.81627944202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b7f5744384a!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1631342009473!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                        <form onSubmit={handlesubmit}>
                            <div className="col-span-1">
                                <div className="w-full h-full bg-white rounded-xl shadow-lg px-6 py-8 border border-[#f0f0f0]">
                                    <h3 className="text-xl font-semibold text-black mb-6 text-center">Get In Touch</h3>

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b0a8] transition"
                                        required
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Mobile no"
                                        className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b0a8] transition"
                                        required
                                        value={mobile}
                                        onChange={(e) => setmobile(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b0a8] transition"
                                        required
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                    />
                                    <textarea
                                        placeholder="Message"
                                        rows="6"
                                        className="w-full p-3 mb-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00b0a8] transition resize-none"
                                        required
                                        value={message}
                                        onChange={(e) => setmessage(e.target.value)}
                                    ></textarea>

                                    <button type='submit'
                                        className="w-full py-3 bg-[#00b0a8] hover:bg-[#00b0a8] text-white font-medium rounded-full transition-all duration-300"
                                    >
                                        Contact us
                                    </button>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus

