import React from 'react'
import tax from '../../assets/Image/tax.jpg'
import startup from '../../assets/Image/servicestartup.jpg'
import gst from '../../assets/Image/gst.jpg'
import roc from '../../assets/Image/roc.jpg'
import audit from '../../assets/Image/audit.jpg'
import Heading from '../../Component/Heading'

const Service = () => {
    const service = [
        {
            image: startup,
            title: "STARTUP REGISTRATION",
            para: "Start your entrepreneurial journey with confidence. We assist you in registering your startup quickly and legally. From choosing the right business structure to managing documentation and compliance, our experts ensure a seamless experience. Whether you're launching a tech startup or a service-based company, we provide end-to-end support tailored to your business goals. Let us handle the formalities so you can focus on innovation and growth."
        },
        {
            image: tax,
            title: "Direct taxation.",
            para: "Direct taxation refers to taxes levied directly on an individual or organization’s income and wealth. We provide expert guidance on income tax planning, filing returns, and ensuring full compliance with the latest tax regulations. Our services are designed to minimize tax liabilities while staying within legal frameworks. Whether you're a salaried individual, a freelancer, or a business owner, we tailor our solutions to meet your financial objectives and ensure peace of mind."
        },
        {
            image: gst,
            title: "GOODS & SERVICE TAX",
            para: "Goods & Service Tax (GST) is a unified indirect tax levied on the supply of goods and services across India. Our GST services cover everything from registration and return filing to compliance and advisory. We help businesses navigate the complexities of GST laws, avoid penalties, and maintain seamless operations. Whether you're a startup, SME, or established enterprise, our expert support ensures you stay compliant and up to date with the latest regulations."
        },
        {
            image: roc,
            title: "ROC COMPLIANCES",
            para: "ROC (Registrar of Companies) compliances are mandatory filings and disclosures that every registered company must adhere to under the Companies Act. We assist businesses in maintaining complete compliance with ROC requirements, including annual returns, financial statements, director-related filings, and event-based filings. Our timely and accurate services help avoid penalties, ensure transparency, and keep your business legally sound and audit-ready at all times."
        },
        {
            image: audit,
            title: "AUDIT & ASSURANCE",
            para: "Audit and assurance services are essential for building trust, ensuring accuracy, and enhancing the financial integrity of your business. We offer comprehensive audit solutions including statutory audits, internal audits, and management audits tailored to your business needs. Our objective and independent approach helps identify risks, improve controls, and ensure compliance with regulatory standards. With our expertise, you gain valuable insights that support informed decision-making and sustainable growth."
        },
    ]
    return (
        <>
            <section className="lg:py-10 py-5">
                <div className="container mx-auto px-6">
                    <Heading highlight="Services" />
                    {service.map((service, index) => (
                        <div
                            className="grid md:grid-cols-2 grid-cols-1  items-center gap-8 mt-8"
                            id={service.url}
                            key={index}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <div className="col-span-1">
                                        <div className="space-y-3">
                                            <h2 className="text-2xl font-bold text-[#00b0a8] leading-tight">
                                                {service.title}
                                            </h2>
                                            <p className="text-md text-gray-800 text-justify">
                                                {service.para}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="w-full">
                                            <img
                                                src={service.image}
                                                alt="image"
                                                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg shadow-[#84c9c6f7]"
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-span-1">
                                        <div className="w-full">
                                            <img
                                                src={service.image}
                                                alt="image"
                                                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg shadow-[#84c9c6f7]"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="space-y-3">
                                            <h2 className="text-2xl font-bold text-[#00b0a8] leading-tight">
                                                {service.title}
                                            </h2>
                                            <p className="text-md text-gray-800 text-justify">
                                                {service.para}
                                            </p>
                                        </div>
                                    </div>

                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Service
