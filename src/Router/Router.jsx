import React from 'react'
import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Components/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/data/news.json'),
            }
        ]
    }
])

export default router