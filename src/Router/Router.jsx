import React from 'react'
import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Components/Home/Home';
import NewsDetails from '../Components/NewsDetails/NewsDetails';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import PrivateRoute from '../Private/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/data/news.json'),
            },
            {
                path: '/readmore/:id',
                element: <PrivateRoute><NewsDetails /></PrivateRoute>,
                loader: () => fetch('/data/news.json'),
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    }
])

export default router