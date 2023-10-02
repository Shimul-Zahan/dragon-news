import React from 'react'
import { Link } from 'react-router-dom'
import { SlCalender } from 'react-icons/sl';
// SlCalender

const LeftSidebar = () => {
  return (
    <div className='w-full pb-10'>
      <h1 className="text-lg mb-5 font-bold text-black">All Catagory</h1>
      <div className='w-full bg-[#e8e6e6] pl-20 p-4 rounded-sm mb-5'>
        <Link to='' className="text-lg w-full font-bold text-black">National News</Link>
      </div>
      <div className='flex flex-col pl-20 w-full space-y-5 text-[#706F6F] font-medium'>
        <Link to='' className="text-lg">Breaking News</Link>
        <Link to='' className="text-lg">Regular News</Link>
        <Link to='' className="text-lg">International News</Link>
        <Link to='' className="text-lg">Sports</Link>
        <Link to='' className="text-lg">Entertainment</Link>
        <Link to='' className="text-lg">Culture</Link>
        <Link to='' className="text-lg">Arts</Link>
        <Link to='' className="text-lg">All News</Link>
      </div>

      <div className='pt-10 space-y-4'>
        <div>
          <img src='/assets/1.png' className='w-full' />
          <h1 className='text-xl font-bold py-4'>Lorem ipsum dolor sit amet ectetur, adipisicing elit. A quod sint tempore hello.</h1>
          <div className='flex gap-10 font-medium'>
            <h1 className="text-lg">Sports</h1>
            <div className='flex items-center gap-1'>
              <span className='mr-2 text-lg'>
                <SlCalender />
              </span>
              <h1 className="text-[#706F6F]">Jan 4, 2022</h1>
            </div>
          </div>
        </div>
        <div>
          <img src='/assets/2.png' className='w-full' />
          <h1 className='text-xl font-bold py-4'>Lorem ipsum dolor sit amet ectetur, adipisicing elit. A quod sint tempore hello.</h1>
          <div className='flex gap-10 font-medium'>
            <h1 className="text-lg">Sports</h1>
            <div className='flex items-center gap-1'>
              <span className='mr-2 text-lg'>
                <SlCalender />
              </span>
              <h1 className="text-[#706F6F]">Jan 4, 2022</h1>
            </div>
          </div>
        </div>
        <div>
          <img src='/assets/3.png' className='w-full' />
          <h1 className='text-xl font-bold py-4'>Lorem ipsum dolor sit amet ectetur, adipisicing elit. A quod sint tempore hello.</h1>
          <div className='flex gap-10 font-medium'>
            <h1 className="text-lg">Sports</h1>
            <div className='flex items-center gap-1'>
              <span className='mr-2 text-lg'>
                <SlCalender />
              </span>
              <h1 className="text-[#706F6F]">Jan 4, 2022</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar