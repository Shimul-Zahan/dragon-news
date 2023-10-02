import React from 'react'
import { useLoaderData } from 'react-router-dom';
import News from './News';

const NewsPart = () => {

    const allNews = useLoaderData();
    // console.log(allNews.length)

    return (
        <div>
            <h1 className="text-xl font-bold mb-5">Dragon News Home</h1>
            {
                allNews.slice(0, 4).map(news => <News key={news.id} news={ news } />)
            }
        </div>
    )
}
// AiOutlineShareAlt

export default NewsPart