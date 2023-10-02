import React from 'react'
import Header from '../Shared/Header'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import LeftSidebar from '../Shared/LeftSidebar';
import NewsPart from '../Shared/NewsPart';
import RightSidebar from '../Shared/RightSidebar';

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
                    <div className="navbar bg-base-100">
                        <div className="navbar-start"></div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg">
                                <li><Link>Home</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Career</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="/assets/user.png" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                            <a className="btn ml-4 capitalize text-lg font-medium bg-[#171717] text-white px-8">Login</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className=''>
                    <LeftSidebar />
                </div>
                <div className='border-2 col-span-2'>
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