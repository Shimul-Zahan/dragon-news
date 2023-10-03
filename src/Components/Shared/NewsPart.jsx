import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import News from './News';

const NewsPart = () => {

    const allNews = useLoaderData();
    const [seeAll, setSeeAll] = useState(3)
    return (
        <div>
            <h1 className="text-xl font-bold mb-5">Dragon News Home</h1>
            {
                allNews.slice(0, seeAll).map(news => <News key={news.id} news={ news } />)
            }
            <div className={seeAll == allNews.length && 'hidden'}>
                <div className='text-center my-5'>
                    <button onClick={() => setSeeAll(allNews.length)} className='btn btn-success capitalize'>See more news</button>
                </div>
            </div>
        </div>
    )
}
// AiOutlineShareAlt

export default NewsPart