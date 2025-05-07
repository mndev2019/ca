import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../../Api/BaseUrl';
import { useParams } from 'react-router-dom';

const Subservice = () => {
    const { url } = useParams();
    const [data, setdata] = useState([]);
    const handleget = async () => {
        try {
            const resp = await axios.get(`${baseUrl}service_detail_url/${url}`);
            console.log(resp);
            setdata(resp.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        handleget();
    }, [url]);
    return (
        <>
            <section className="bg-gradient-to-r from-[#00b0a8] to-white sm:h-[400px] h-[500px]">
                <div className="container mx-auto h-full px-4 flex flex-col justify-center items-center text-center">
                    <h2 className="md:text-3xl text-2xl font-bold mb-4">{data?.title}</h2>
                    <p className="md:text-lg text-md text-gray-700 max-w-2xl">
                        {data?.short_description}
                    </p>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1">
                    <div className="col-span-1">
                        <div>
                            <img src={`${baseUrl}${data?.image}`} alt="Proprietorship" className="rounded-2xl shadow-lg w-full md:h-[500px] h-auto object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1 pt-4">
                        <div className="space-y-6 text-gray-700 text-justify">
                            <p>
                                <p dangerouslySetInnerHTML={{ __html: data?.description }} />
                            </p>

                            {/* <p className="font-semibold text-[#00b0a8]">
                                Take the first step towards building your business — register your Proprietorship today with confidence and expert support by your side.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subservice
