import React, { useRef } from 'react';
import Slider from 'react-slick';
import Heading from '../../Component/Heading';
import testimonial1 from '../../assets/Image/testimonial.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Client = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // tablet
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-[#f6f6f6] lg:py-10 py-5 relative">
            <div className="container w-full mx-auto">
                <Heading title="Client" highlight="Talk" />
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="px-3 ">
                            <div
                                className="w-full bg-white p-[20px] rounded-[8px] text-center px-5"

                            >
                                <div className="mx-auto border-2 border-gray-300 h-[90px] w-[90px] rounded-full flex items-center justify-center" >
                                    <img src={testimonial1} alt="image" className="h-[50px]" />
                                </div>
                                <p className="text-[.85rem] py-3">
                                    The services rendered in proactive advice and always being
                                    there to manage our finances is highly appreciated. The
                                    competency of your leadership and staff is worth applauding
                                </p>
                                <p className="font-[700] text-[#00b0a8]">Indian Subsidiary</p>
                                <p className="text-[.85rem] pt-2">Cloud Tech Services Co.</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div style={{ textAlign: "center" }}>
                    <button className="button md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-full border-2 border-black flex items-center justify-center absolute top-[57%] sm:left-[30px] left-[9px] hover:bg-[#00b0a8] hover:border-none hover:text-white" onClick={previous}>
                        <FaArrowLeft  className='font-[400] '/>
                    </button>
                    <button className="button md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-full border-2 border-black flex items-center justify-center absolute top-[57%] sm:right-[30px] right-[9px] hover:bg-[#00b0a8] hover:border-none hover:text-white" onClick={next}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Client;
