import React from 'react'
import moment from 'moment'

const Header = () => {


  return (
    <div className='py-8 text-center space-y-2'>
      <img src="/logo.png" alt="" className='mx-auto' />
      <p className='text-lg text-[#706F6F] font-normal'>Journalism Without Fear or Favour</p>
      <p className='text-2xl text-[#414040]'>{moment().format("dddd, MMMM DD, YYYY") }</p>
    </div>
  )
}

export default Header