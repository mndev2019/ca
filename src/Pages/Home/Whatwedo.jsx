import React, { useEffect } from 'react';
import Heading from '../../Component/Heading';

// Sample image imports (use your actual image paths)
import regIcon from '../../assets/Image/taxes.png';
import auditIcon from '../../assets/Image/audit.png';
import taxIcon from '../../assets/Image/taxation.png';
import valuationIcon from '../../assets/Image/project.png';
import gstIcon from '../../assets/Image/gst.png';
import directTaxIcon from '../../assets/Image/directtax.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Whatwedo = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    const data = [
        {
            title: "Business & Tax Registrations",
            text: "Registration of any business entity under the GST Law implies obtaining a unique number from the concerned tax authorities for the",
            icon: regIcon
        },
        {
            title: "Audit & Attestation",
            text: "Comprehensive audit services that includes statutory, internal & tax audits, transfer pricing studies and more that meet regulatory needs",
            icon: auditIcon
        },
        {
            title: "Taxation India & USA",
            text: "The US Tax Treaty with India has been in effect for many years. It serves as an International Tax Agreement between the United States",
            icon: taxIcon
        },
        {
            title: "Valuation & Project Financing Compliance",
            text: "Project financing is a loan structure that relies primarily on the project's cash flow for repayment, with the project's assets",
            icon: valuationIcon
        },
        {
            title: "GST & Customs",
            text: "As per the Model GST Law, GST will subsume Countervailing Duty (CVD) and Special Additional Duty (SAD), however Basic Customs",
            icon: gstIcon
        },
        {
            title: "Direct & Indirect tax",
            text: "Direct taxes are non-transferable taxes paid by the tax payer to the government and indirect taxes are transferable taxes where",
            icon: directTaxIcon
        },
    ];

    return (
        <section className='lg:py-10 py-5 bg-white overflow-hidden'>
            <div className="container w-full mx-auto ">
                <Heading title="What" highlight="We Do" />
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">
                    {data.map((item, index) => (
                        <div
                        key={index}
                        className="overflow-hidden border-l-4 border-[#00b0a8] bg-[#f9f9f9] p-5 shadow-sm hover:shadow-md transition duration-300 rounded-md"
                        data-aos="fade-up"
                        data-aos-delay={index * 100} // 100ms delay between each item
                    >
                            <div className="flex items-center gap-3 mb-2">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-8 h-8 object-contain"
                                />
                                <h3 className="xl:text-lg text-md font-semibold text-[#00b0a8]">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="md:text-sm text-xs text-gray-700 leading-[28px]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Whatwedo;
