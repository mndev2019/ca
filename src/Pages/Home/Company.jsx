import React, { useEffect } from 'react'
import Heading from '../../Component/Heading'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Company = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, // animation duration in ms
      
        });
      }, []);
    return (
        <>
            <section data-aos="fade-right" className='overflow-hidden'>
                <div className="container w-full mx-auto">
                    <Heading title="WHO" highlight="ARE WE ?" />
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <p className='md:text-[14px] text-[13px] lg:w-[80%] w-full text-center lg:mb-[40px] md:mb-[20px] mb-[15px] mx-auto leading-7'>
                                Chartered Accountants is a professionally Managed Legal, Taxation & Accountancy Consultancy firm offering best and credible services to the clients. Chartered Accountants offers one stop solution for all business related compliances with our best on-time services by our experts. We are providing services of Business Set-up in India, Accounting & Taxation Services, Secretarial Services, Management Consulting Services Along with this, we also offer issuance of Import-Export Code, Audit & Assurance Services, Tax Consultancy and Legal Drafting & Regulatory Approvals.
                            </p>
                            <p className='md:text-[14px] text-[13px] lg:w-[80%] w-full text-center mb-[40px] mx-auto leading-7'>
                                Chartered Accountants is a professionally Managed Legal, Taxation & Accountancy Consultancy firm offering best and credible services to the clients. Chartered Accountants offers one stop solution for all business related compliances with our best on-time services by our experts. We are providing services of Business Set-up in India, Accounting & Taxation Services, Secretarial Services, Management Consulting Services Along with this, we also offer issuance of Import-Export Code, Audit & Assurance Services, Tax Consultancy and Legal Drafting & Regulatory Approvals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Company
