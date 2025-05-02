import React from 'react'
import Heading from '../../Component/Heading'
import Marquee from 'react-fast-marquee'

const Datereminder = () => {
    return (
        <>
            <section className='lg:py-10 py-5'>
                <div className="container w-full mx-auto">
                    <Heading title="News, Due Date" highlight="Reminder and Blog" />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="col-span-1">
                            <div className="w-full border border-gray-200 ">
                                <h2 className="bg-[#00b0a8] py-1 lg:text-[24px] md:text-[20px] text-[18px] text-center text-white font-[500] datehead">
                                    News
                                </h2>
                                <div className="p-3 h-[300px] overflow-hidden relative">
                                    <div className="scroll-up-animation">
                                        <div>
                                            <h3 className="font-semibold">18 Dec 19</h3>
                                            <p className="border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]">
                                                Govt Informs 15th FFC About Implausibility of Meeting Revenue Targets of 5 Years
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="font-semibold">19 Dec 19</h3>
                                            <p className="border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]">
                                                Another sample news item that scrolls up
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full border border-gray-200 ">
                                <h2 className="bg-[#00b0a8] py-1 lg:text-[24px] md:text-[20px] text-[18px] text-center text-white font-[500] datehead">
                                    Due Date Reminder
                                </h2>
                                <div className="p-3 h-[300px] overflow-hidden relative">
                                    <div className="scroll-up-animation">
                                        <div>
                                            <h3 className="font-semibold">18 Dec 19</h3>
                                            <p className="border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]">
                                                Govt Informs 15th FFC About Implausibility of Meeting Revenue Targets of 5 Years
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="font-semibold">19 Dec 19</h3>
                                            <p className="border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]">
                                                Another sample news item that scrolls up
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full border border-gray-200 ">
                                <h2 className="bg-[#00b0a8] py-1 lg:text-[24px] md:text-[20px] text-[18px] text-center text-white font-[500] datehead">
                                    Blog News
                                </h2>
                                <div className="p-3 h-[300px] overflow-hidden relative">
                                    <div className="scroll-up-animation">
                                        <div>
                                            <h3 className="font-semibold">18 Dec 19</h3>
                                            <p className="border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]">
                                                Govt Informs 15th FFC About Implausibility of Meeting Revenue Targets of 5 Years
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <h3 className="font-semibold">19 Dec 19</h3>
                                            <p className="border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]">
                                                Another sample news item that scrolls up
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-span-1">
                            <div className="w-full border border-gray-200">
                                <h2 className='bg-[#00b0a8] py-1 lg:text-[24px] md:text-[20px] text-[18px] text-center text-white font-[500] datehead'>
                                    Due Date Reminder
                                </h2>
                                <div className='p-3'>
                                    <h3 className='font-semibold'>
                                        18 Dec 19
                                    </h3>
                                    <p className='border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]'>
                                        Govt Informs 15th FFC About Implausibility of Meeting Revenue Targets of 5 Years
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full border border-gray-200">
                                <h2 className='bg-[#00b0a8] py-1 lg:text-[24px] md:text-[20px] text-[18px] text-center text-white font-[500] datehead'>
                                    Blog News
                                </h2>
                                <div className='p-3'>
                                    <h3 className='font-semibold'>
                                        18 Dec 19
                                    </h3>
                                    <p className='border-b border-dashed border-[#ccc] py-[5px] md:text-[14px] text-[13px]'>
                                        Govt Informs 15th FFC About Implausibility of Meeting Revenue Targets of 5 Years
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Datereminder
