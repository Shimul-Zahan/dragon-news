import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { MyContext } from '../../Context/ContextAuth';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { signIn } = useContext(MyContext);
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password).then(res => {
            // console.log(res.user);
            navigate(location?.state ? location.state : '/')
        }).catch(err => {
            setError(err.message);
        })
    }

    return (
        <div>
            <Navbar />
            <div className='w-full min-h-[700px] flex justify-center items-center'>
                <div className='w-1/2 mx-auto my-auto flex justify-center items-center min-h-[500px] text-center'>
                    <div className='w-1/2'>
                        <h1 className='text-2xl font-bold'>Login your account</h1>
                        <hr className='my-5' />
                        <form onSubmit={handleLogin} className='text-left space-y-4'>
                            <div className='space-y-2'>
                                <p className='text-lg font-bold'>Your Email</p>
                                <input type="email" required name='email' placeholder="xxx@gmail.com" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='space-y-2 mb-10'>
                                <p className='text-lg font-bold'>Your Password</p>
                                <input type="password" name='password' required placeholder="xxx@gmail.com" className="input input-bordered w-full max-w-xs" />
                            </div>
                            {
                                error && <div className="text-sm text-red-500">{error.slice(10, 100)}</div>
                            }
                            <input type="submit" required value="Login" className="input bg-black text-white input-bordered w-full max-w-xs" />
                            <p className="text-lg font-medium">Don't Have An Accound ? <Link to='/register' className='text-yellow-500'>Register</Link> Now.</p>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login