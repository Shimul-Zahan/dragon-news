import React from 'react'
import { AiOutlineShareAlt, AiFillStar } from 'react-icons/ai';
import { PiBookmarkSimpleThin } from 'react-icons/pi';
import { BsFillEyeFill } from 'react-icons/bs';

const NewsPart = () => {
    return (
        <div className='border rounded-lg'>
            <div className='bg-gray-100 p-4 rounded-sm'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <div className="w-10 rounded-full">
                            <img src="/assets/user.png" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">Shimul Zahan</h1>
                            <h1 className='text-[#706e6e] text-base'>2022-08-1002</h1>
                        </div>
                    </div>
                    <div className='text-3xl flex items-center gap-4'>
                        <PiBookmarkSimpleThin />
                        <AiOutlineShareAlt />
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <h1 className="text-2xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, repudiandae debitis porro veniam ad fugiat optio laborum dolores asperiores</h1>
                <img src="/assets/editorsInsight1.png" alt="" className='w-full mt-6' />
                <p className="text-lg font-medium mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint repellendus tempore, dolore veritatis, quis neque ullam perspiciatis quod ipsum minus illum nostrum expedita harum! Molestias magnam iusto corporis, accusamus, deserunt ipsam perferendis itaque debitis illum, nulla earum dolores rerum qui. Esse fuga sunt corporis debitis repellat iusto sapiente unde neque!border <br /><span className='text-yellow-500 font-bold'>Read More</span></p>
                <hr className='my-4' />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-1 text-lg text-yellow-500'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <p className='text-black'>4.9</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsFillEyeFill className='text-lg' />
                        <p className='text-lg'>499</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// AiOutlineShareAlt

export default NewsPart