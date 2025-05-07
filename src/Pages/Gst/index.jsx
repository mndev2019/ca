import React from 'react'

const Gst = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-[#00b0a8] to-white h-[400px] ">
                <div className="container mx-auto h-full px-4 flex flex-col justify-center items-center text-center">
                    <h2 className="md:text-3xl text-2xl font-bold mb-4">GST</h2>
                    <p className="md:text-lg text-md text-gray-700 max-w-2xl">
                        GST (Goods and Services Tax) is a unified tax in India on the supply of goods and services, introduced to simplify and replace multiple indirect taxes.
                    </p>
                </div>
            </section>
            <section className="py-5 bg-white">
                <div className="container mx-auto px-4 grid grid-cols-1">
                    <div className="col-span-1 pt-4">
                        <div className="space-y-6 text-gray-700 text-justify">
                            <p>
                                Goods and Services Tax (GST) is a comprehensive indirect tax introduced in India on July 1, 2017, to replace various central and state taxes. It is levied on the supply of goods and services and aims to unify the Indian market by simplifying the tax system and ensuring transparency. GST is ideal for businesses, freelancers, and service providers looking to operate legally and efficiently.
                            </p>
                            <p>
                                At <strong>MyOnlineCA</strong>, India’s only Government Certified platform, we make the GST registration process fast, hassle-free, and affordable. Our team of expert professionals guides you through every step — from understanding your tax liability, filing the correct documents, obtaining your GSTIN, to managing your GST returns and compliance.
                            </p>
                            <p>
                                With packages starting at just <strong>₹999</strong>, we ensure that your business becomes GST compliant without confusion. You’ll also receive free tools like invoice templates, input tax credit tracking, and ongoing tax support. Whether you're a startup or an established business, MyOnlineCA delivers reliable and professional GST services tailored to your needs.
                            </p>
                            <p className="font-semibold text-[#00b0a8]">
                                Get GST registered today with ease — let MyOnlineCA handle your tax compliance so you can focus on growing your business.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Gst
