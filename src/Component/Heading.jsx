import React from 'react'

const Heading = ({title , highlight}) => {
    return (
        <>
            <div className="grid grid-cols-1">
                <div className="col-span-1">
                    <div className='page-title text-center'>
                        <h2 className=''>
                        {title} <span className="text-[#00b0a8]">{highlight}</span>
                        </h2>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Heading
