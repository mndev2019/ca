import React from 'react'
import Heading from '../../Component/Heading'
import team from '../../assets/Image/team.svg'

const Team = () => {
    return (
        <>
            <section className='lg:py-10 py-5'>
                <div className="container w-full mx-auto">
                    <Heading title="Qualified" highlight="Team" />
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <p className='text-center pb-5 md:text-[15px] text-[13px]'>
                                A passionate team of associates and partners that are experienced in finance, accounting, audit, fraud investigation, assurance, payroll, tax & systems, with qualifications that include FCA, CMA, DISA, CPA, EA, CFE, CIA, CS and more
                            </p>
                            <img src={team} alt='image' className='w-[500px] qualified-img mx-auto'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
