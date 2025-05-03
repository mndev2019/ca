import React from 'react'
import propreitership from '../../assets/Image/propreitership.jpg'

const Subservice = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-[#00b0a8] to-white sm:h-[400px] h-[500px]">
                <div className="container mx-auto h-full px-4 flex flex-col justify-center items-center text-center">
                    <h2 className="md:text-3xl text-2xl font-bold mb-4">Proprietorship</h2>
                    <p className="md:text-lg text-md text-gray-700 max-w-2xl">
                        Start your Proprietorship Firm with India’s Trusted Govt Certified Company “MyOnlineCA”.
                        Get hassle-free registration, expert guidance, and essential legal documentation — starting at just ₹999/-
                        including free DIY Legal Agreements.
                    </p>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1 ">
                    <div className="col-span-1">

                        <div>
                            <img src={propreitership} alt="Proprietorship" className="rounded-2xl shadow-lg w-full md:h-[500px] h-auto object-cover" />
                        </div>
                    </div>
                    <div className="col-span-1 pt-4">
                        <div className="space-y-6 text-gray-700 text-justify">
                            <p>
                                A Sole Proprietorship is one of the most common and simplest forms of business in India. It is owned and managed by a single individual, making it ideal for small businesses, freelancers, consultants, and traders who want to start their venture without the burden of complex legal formalities.
                            </p>
                            <p>
                                At <strong>MyOnlineCA</strong>, India’s only Government Certified platform, we make the process of registering a Proprietorship fast, simple, and affordable. Our expert legal and tax professionals assist you at every step — from choosing a business name, preparing the necessary documentation, obtaining a GST registration, to setting up your current account and more.
                            </p>
                            <p>
                                With packages starting at just <strong>₹999</strong>, we ensure that you not only get your business legally registered but also receive free access to DIY legal agreements, templates, and ongoing support. Whether you’re just getting started or scaling up, MyOnlineCA offers reliable, transparent, and professional services designed for today’s entrepreneurs.
                            </p>
                            <p className="font-semibold text-[#00b0a8]">
                                Take the first step towards building your business — register your Proprietorship today with confidence and expert support by your side.
                            </p>
                        </div>
                    </div>



                </div>
            </section>


        </>
    )
}

export default Subservice
