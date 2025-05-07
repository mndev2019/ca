import React, { useEffect, useState } from 'react';
import Heading from '../../Component/Heading';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { baseUrl } from '../../Api/BaseUrl';


const Whatwedo = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration in ms

        });
    }, []);
    const [data, setdata] = useState([]);
    const handleget = async () => {
        try {
            const resp = await axios.get(`${baseUrl}wedo`);
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
        <section className='lg:py-10 py-5 bg-white overflow-hidden'>
            <div className="container w-full mx-auto ">
                <Heading title="What" highlight="We Do" />
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">
                    {data?.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden border-l-4 border-[#00b0a8] bg-[#f9f9f9] p-5 shadow-sm hover:shadow-md transition duration-300 rounded-md"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <img
                                    src={`${baseUrl}${item?.image}`}
                                    alt={item.title}
                                    className="w-8 h-8 object-contain"
                                />
                                <h3 className="xl:text-lg text-md font-semibold text-[#00b0a8]">
                                    {item?.title}
                                </h3>
                            </div>
                            <p className="md:text-sm text-xs text-gray-700 leading-[28px]">
                                {item?.short_description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Whatwedo;
