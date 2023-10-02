import React from 'react'
import { AiOutlineShareAlt, AiFillStar } from 'react-icons/ai';
import { PiBookmarkSimpleThin } from 'react-icons/pi';
import { BsFillEyeFill } from 'react-icons/bs';

const News = ({ news }) => {

    console.log(news)
    const { image_url, title, total_view, details,   } = news;

  return (
      <div>
          <div className='border rounded-lg'>
              <div className='bg-gray-100 p-4 rounded-sm'>
                  <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-4'>
                          <div className="w-10 rounded-full">
                              <img src={news.author.img} />
                          </div>
                          <div>
                              <h1 className="text-lg font-bold">{news.author.name }</h1>
                              <h1 className='text-[#706e6e] text-base'>{news.author.published_date }</h1>
                          </div>
                      </div>
                      <div className='text-3xl flex items-center gap-4'>
                          <PiBookmarkSimpleThin />
                          <AiOutlineShareAlt />
                      </div>
                  </div>
              </div>
              <div className='p-5'>
                  <h1 className="text-2xl font-bold">{ title }</h1>
                  <img src={image_url} alt="" className='w-full mt-6' />
                  <p className="text-lg font-medium mt-8">{details} <br /><span className='text-yellow-500 font-bold'>Read More</span></p>
                  <hr className='my-4' />
                  <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-1 text-lg text-yellow-500'>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <p className='text-black'>{news.rating.number }</p>
                      </div>
                      <div className='flex items-center gap-2'>
                          <BsFillEyeFill className='text-lg' />
                          <p className='text-lg'>499</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default News