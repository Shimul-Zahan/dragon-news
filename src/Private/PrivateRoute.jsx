import React, { useContext } from 'react'
import { MyContext } from '../Context/ContextAuth'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isloading } = useContext(MyContext);
    const location = useLocation();

    console.log(location)

    if (isloading) {
        alert('isloading true');
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivateRoute