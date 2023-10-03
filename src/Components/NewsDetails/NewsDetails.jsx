import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Header from '../Shared/Header';
import RightSidebar from '../Shared/RightSidebar';
import { SlCalender } from 'react-icons/sl';


const NewsDetails = () => {

    const { id } = useParams();
    const allNews = useLoaderData();

    const seeMoreNews = allNews.find(news => news._id == id);

    return (
        <div>
            <Header />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className=' col-span-3'>
                    <h1 className="text-xl font-bold mb-5">Dragon News</h1>
                    <div className='border rounded-lg'>
                        <div className='p-5'>
                            <img src={seeMoreNews.image_url} alt="" className='w-full' />
                            <h1 className="text-2xl font-bold mt-6">{seeMoreNews.title}</h1>
                            <p className="text-lg font-medium mt-8">{seeMoreNews.details} </p>
                        </div>
                        <div>
                            <button className='btn bg-red-700 py-4 ml-5 mb-10'>All news in this category</button>
                        </div>
                    </div>
                    <div className='py-10'>
                        <h1 className="text-xl font-bold my-5">Editors Insight</h1>
                        <div className='flex flex-col md:flex-row gap-5'>
                            <div className='w-1/3'>
                                <img src='/assets/1.png' className='w-full' />
                                <h1 className='text-xl font-bold py-4'>Lorem ipsum dolor sit amet ectetur, adipisicing elit. A quod sint tempore hello.</h1>
                                <div className='flex gap-10 font-medium'>
                                    <div className='flex items-center gap-1'>
                                        <span className='mr-2 text-lg'>
                                            <SlCalender />
                                        </span>
                                        <h1 className="text-[#706F6F]">Jan 4, 2022</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/3'>
                                <img src='/assets/2.png' className='w-full' />
                                <h1 className='text-xl font-bold py-4'>Lorem ipsum dolor sit amet ectetur, adipisicing elit. A quod sint tempore hello.</h1>
                                <div className='flex gap-10 font-medium'>
                                    <div className='flex items-center gap-1'>
                                        <span className='mr-2 text-lg'>
                                            <SlCalender />
                                        </span>
                                        <h1 className="text-[#706F6F]">Jan 4, 2022</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/3'>
                                <img src='/assets/3.png' className='w-full' />
                                <h1 className='text-xl font-bold py-4'>Lorem ipsum dolor sit amet ectetur, adipisicing elit. A quod sint tempore hello.</h1>
                                <div className='flex gap-10 font-medium'>
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
                </div>
                <RightSidebar />
            </div>
        </div>
    )
}

export default NewsDetails