import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='container mx-auto'>
            <Outlet />
        </div>
    )
}

export default Layout