import React from 'react'
import Header from '../Shared/Header'
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from 'react-router-dom';
import LeftSidebar from '../Shared/LeftSidebar';
import NewsPart from '../Shared/NewsPart';
import RightSidebar from '../Shared/RightSidebar';
import Navbar from '../Shared/Navbar';

const Home = () => {

    return (
        <div>
            <Header />
            <nav>
                <div className='bg-[#F3F3F3] p-3 flex justify-center items-center'>
                    <button className='btn bg-[#D72050] text-white font-medium capitalize text-lg px-6'>Latest</button>
                    <div className='text-black text-xl flex justify-center items-center space-x-10'>
                        <Marquee>
                            <div>I can be a React component, multiple React components, or just some text.</div>
                            <div className='ml-20'>I can be a React component</div>
                        </Marquee>
                    </div>
                </div>

                <div className='py-4'>
                    <Navbar />
                </div>
            </nav>

            <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className=''>
                    <LeftSidebar />
                </div>
                <div className='col-span-2'>
                    <NewsPart />
                </div>
                <div className=''>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}

export default Home