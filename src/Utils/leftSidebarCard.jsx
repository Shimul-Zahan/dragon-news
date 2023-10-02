import React from 'react'

const leftSidebarCard = ({ image, text, category, date }) => {
    return (
        <div>
            <img src="/assets/1.png" alt="" className='w-full' />
            <h1 className='text-xl font-bold py-4'>Lorem ipsum dolor sit amet ectetur, adipisicing elit. A quod sint tempore hello.</h1>
            <div className='flex gap-10 font-medium'>
                <h1 className="text-lg">Sports</h1>
                <h1 className="text-[#706F6F]">Jan 4, 2022</h1>
            </div>
        </div>
    )
}

export default leftSidebarCard