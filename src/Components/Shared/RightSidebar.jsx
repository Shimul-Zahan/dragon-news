import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
// FcGoogle

const RightSidebar = () => {
  return (
    <div className='mb-10'>
      <h1 className="text-lg font-bold mb-5">Login With</h1>
      <div className='space-y-3'>
        <h1 className="input flex items-center justify-center text-lg text-blue-500 font-medium border-blue-500">
          <span className='mr-2 text-2xl'>
            <FcGoogle/>
          </span>Login With Google</h1>
        <h1 className="input flex items-center justify-center text-lg text-[#171717] font-medium border-[#171717]">
          <span className='mr-2 text-2xl'>
            <BsGithub />
          </span>Login With Github</h1>
      </div>

      <div className='mt-20 font-medium text-[#4f4f4f]'>
        <h1 className="text-2xl font-bold mb-5">Find Us On</h1>
        <h1 className="py-5 rounded-sm flex items-center  pl-5 text-lg border">
          <span className='mr-2 text-2xl'>
            <FaFacebook />
          </span>Fecebook</h1>
        <h1 className="py-5 rounded-sm flex items-center  pl-5 text-lg border">
          <span className='mr-2 text-2xl'>
            <AiFillTwitterCircle />
          </span>Twitter</h1>
        <h1 className="py-5 rounded-sm flex items-center  pl-5 text-lg border">
          <span className='mr-2 text-2xl'>
            <BsInstagram />
          </span>Instragram</h1>
      </div>

      <div className='mt-20 font-medium bg-[#e4e0e0]'>
        <h1 className="text-2xl font-bold mb-5 p-5">Kids Zone</h1>
        <div className='space-y-6'>
          <img src="/assets/qZone1.png" alt="" className='w-full'/>
          <img src="/assets/qZone2.png" alt="" className='w-full' />
          <img src="/assets/qZone3.png" alt="" className='w-full' />
        </div>
      </div>

      <div className='bg-[#101020] mt-4 py-10 text-center px-10'>
        <h1 className='text-2xl text-white font-semibold'>Lorem ipsummmm dolor sit amet.
          Lorem ipsum dolor sitttings amet.Lorem ipsum dolor sit amet.</h1>
        <h1 className='text-lg text-white font-medium mt-5'>Lorem ipsummmm dolor sit amet.
          Lorem ipsum dolor sitttings amet.Lorem ipsum dolor sit amet.</h1>

        <button className='btn btn-secondary text-white mt-5 capitalize'>Learn More</button>
      </div>

    </div>
  )
}

export default RightSidebar