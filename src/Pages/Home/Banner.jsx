import React from 'react';
import left1 from '../../assets/Image/leftbanner1.svg'
import left2 from '../../assets/Image/leftbanner2.svg'
import left3 from '../../assets/Image/leftbanner3.svg'

const Banner = () => {
    return (
        <>
            <section className='home-slider-area banner'>
                <div className="container w-full mx-auto">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center lg:pt-0 pt-10">
                        <div className="lg:col-span-5 col-span-1 lg:order-1 order-2">
                            <div className="w-full relative sm:h-[400px] h-[210px]" >
                                <img src={left1} alt="image" className='absolute intro-img bannerimg' />
                                <img src={left2} alt='image' className='absolute intro-img mobile bannerimg' />
                                <img src={left3} alt='image' className='absolute bannerimg' />

                            </div>
                        </div>
                        <div className="lg:col-span-7 col-span-1 lg:order-2 order-1">
                            <div className='mb-0 my-4 md:mt-0 md:pl-5 text-center intro-text'>
                                <p className='xl:text-[30px] sm:text-[25px] text-[18px] font-[700] text-[#15467c]'>
                                    Audit, Taxation ,Fraud Prevention,<span className='sm:block'>Compliance & Advisory</span> 
                                </p>
                                <p className='lg:text-[22px] sm:text-[18px] text-[14px] font-[300]'>
                                    SERVICE EXCELLENCE + RESPONSIVE DELIVERY
                                </p>
                                <p className='lg:text-[22px] sm:text-[18px] text-[14px] font-[300] lg:pb-0 pb-[10px]'>
                                    CANDID OPINIONS + TRUSTED ADVISORY
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
