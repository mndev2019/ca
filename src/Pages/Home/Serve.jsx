import React, { useEffect, useState } from 'react'
import Heading from '../../Component/Heading'
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { baseUrl } from '../../Api/BaseUrl';

const Serve = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration in ms
         
        });
    }, []);
  
    const [data , setdata] = useState([]);
    const handleget = async () => {
        try {
            const resp = await axios.get(`${baseUrl}weserve`);
            console.log(resp);
            setdata(resp.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        handleget();
    }, []);
    return (
        <>
            <section className='bg-[#f6f6f6] lg:py-10 py-5 overflow-hidden'>
                <div className="container w-full mx-auto">
                    <Heading title="Who" highlight="We Serve" />
                    <div className="w-[80%] mx-auto" data-aos="fade-left">
                        {/* First 10 items (2 full rows) */}
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-y-6 gap-x-4">
                            {
                                data.slice(0, 10).map((itm, index) => (
                                    <div key={index} className="text-center pt-3">
                                        <img src={`${baseUrl}${itm.image}`} alt='image' className='mx-auto' />
                                        <p className='text-[13px] pt-2'>{itm.title}</p>
                                    </div>
                                ))
                            }
                        </div>

                        {/* Last 4 items centered in a row */}
                        {/* <div className="flex justify-center flex-wrap gap-x-20 gap-y-6 mt-6">
                            {
                                serve.slice(10).map((itm, index) => (
                                    <div key={index} className="text-center pt-3">
                                        <img src={itm.image} alt='image' className='mx-auto' />
                                        <p className='text-[13px] pt-2'>{itm.text}</p>
                                    </div>
                                ))
                            }
                        </div> */}
                        <div className="flex justify-center flex-wrap gap-x-20 gap-y-6 mt-6 over">
                            {
                                data.slice(10).map((itm, index) => (
                                    <div
                                        key={index}
                                        className={`text-center pt-3 ${index === 0 ? 'hidden md:block' : ''
                                            }`}
                                    >
                                        <img src={`${baseUrl}${itm.image}`} alt='image' className='mx-auto' />
                                        <p className='text-[13px] pt-2'>{itm.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4 w-[80%] mx-auto place-items-center">
                        {
                            serve.map((itm, index) => (
                                <div key={index} className="text-center pt-3">
                                    <img src={itm.image} alt='image' className='mx-auto' />
                                    <p className='text-[13px] pt-2'>
                                        {itm.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Serve
