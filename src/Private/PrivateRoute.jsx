import React, { useContext } from 'react'
import { MyContext } from '../Context/ContextAuth'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, isloading } = useContext(MyContext);

    if (isloading) {
        alert('isloading true');
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    )
}

export default PrivateRoute