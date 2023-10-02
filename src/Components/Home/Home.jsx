import React from 'react'
import Header from '../Shared/Header'
import Marquee from "react-fast-marquee";

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
            </nav>
        </div>
    )
}

export default Home