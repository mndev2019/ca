import React, { useEffect } from 'react'
import Heading from '../../Component/Heading'
import serve1 from '../../assets/Image/we-serv-1.png'
import serve2 from '../../assets/Image/we-serv-2.png'
import serve3 from '../../assets/Image/we-serv-3.png'
import serve4 from '../../assets/Image/we-serv-4.png'
import serve5 from '../../assets/Image/we-serv-5.png'
import serve6 from '../../assets/Image/we-serv-6.png'
import serve7 from '../../assets/Image/we-serv-7.png'
import serve8 from '../../assets/Image/we-serv-8.png'
import serve9 from '../../assets/Image/we-serv-9.png'
import serve10 from '../../assets/Image/we-serv-10.png'
import serve11 from '../../assets/Image/we-serv-11.png'
import serve12 from '../../assets/Image/we-serv-12.png'
import serve13 from '../../assets/Image/we-serv-13.png'
import serve14 from '../../assets/Image/we-serv-14.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Serve = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    const serve = [
        {
            image: serve1,
            text: " Start ups"
        },
        {
            image: serve2,
            text: " MSMEs "
        },
        {
            image: serve3,
            text: " Banks "
        },
        {
            image: serve4,
            text: " Foreign subsidiaries "
        },
        {
            image: serve5,
            text: " Manufacturing "
        },
        {
            image: serve6,
            text: " Power & Equipment "
        },
        {
            image: serve7,
            text: " Charitable Organisations "
        },
        {
            image: serve8,
            text: " Information Technology "
        },
        {
            image: serve9,
            text: " Manpower "
        },
        {
            image: serve10,
            text: " Pharma & Healthcare "
        },
        {
            image: serve11,
            text: " Infrastructure & Realty "
        },
        {
            image: serve12,
            text: " Logistics "
        },
        {
            image: serve13,
            text: " Automobiles "
        },
        {
            image: serve14,
            text: " Mining "
        },
    ]
    return (
        <>
            <section className='bg-[#f6f6f6] lg:py-10 py-5 overflow-hidden' data-aos="fade-left" >
                <div className="container w-full mx-auto">
                    <Heading title="Who" highlight="We Serve" />
                    <div className="w-[80%] mx-auto">
                        {/* First 10 items (2 full rows) */}
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-y-6 gap-x-4">
                            {
                                serve.slice(0, 10).map((itm, index) => (
                                    <div key={index} className="text-center pt-3">
                                        <img src={itm.image} alt='image' className='mx-auto' />
                                        <p className='text-[13px] pt-2'>{itm.text}</p>
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
                        <div className="flex justify-center flex-wrap gap-x-20 gap-y-6 mt-6">
                            {
                                serve.slice(10).map((itm, index) => (
                                    <div
                                        key={index}
                                        className={`text-center pt-3 ${index === 0 ? 'hidden md:block' : ''
                                            }`}
                                    >
                                        <img src={itm.image} alt='image' className='mx-auto' />
                                        <p className='text-[13px] pt-2'>{itm.text}</p>
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
