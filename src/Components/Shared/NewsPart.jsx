import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import News from './News';
import { useContext } from 'react';
import { MyContext } from '../../Context/ContextAuth';

const NewsPart = () => {

    const { newsCatagory } = useContext(MyContext);
    const allNews = useLoaderData();
    // const showNews = allNews.filter(news => news.category_id == newsCatagory);
    // console.log(showNews);

    const [seeAll, setSeeAll] = useState(3)
    return (
        <div>
            <h1 className="text-xl font-bold mb-5">Dragon News Home</h1>
            {
                allNews?.filter(news => news.category_id == newsCatagory).slice(0, seeAll).map(news => <News key={news.id} news={ news } />)
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