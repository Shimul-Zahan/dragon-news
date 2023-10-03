import React, { useContext, useState } from 'react'
import Navbar from '../Shared/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Context/ContextAuth'

const Register = () => {

    const { createUser } = useContext(MyContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imageURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password).then(res => {
            e.target.reset();
            navigate('/')
        }).catch(error => {
            setError(error.message);
            e.target.reset();
        })
    }

  return (
      <div>
          <Navbar />
          <div className='w-full min-h-[700px] flex justify-center items-center'>
              <div className='w-1/2 mx-auto my-auto flex justify-center items-center min-h-[500px] text-center'>
                  <div className='w-1/2'>
                      <h1 className='text-2xl font-bold'>Register your account</h1>
                      <hr className='my-5' />
                      <form onSubmit={handleRegister} className='text-left space-y-4'>
                          <div className='space-y-2'>
                              <p className='text-lg font-bold'>Your Name</p>
                              <input type="text" required name='name' placeholder="John Doe" className="input input-bordered w-full max-w-xs" />
                          </div>
                          <div className='space-y-2'>
                              <p className='text-lg font-bold'>Image URL</p> 
                              <input type="text" required name='photoURL' placeholder="hthp://image.com" className="input input-bordered w-full max-w-xs" />
                          </div>
                          <div className='space-y-2'>
                              <p className='text-lg font-bold'>Your Email</p>
                              <input type="email" required name='email' placeholder="xxx@gmail.com" className="input input-bordered w-full max-w-xs" />
                          </div>
                          <div className='space-y-2 mb-10'>
                              <p className='text-lg font-bold'>Your Password</p>
                              <input type="password" name='password' required placeholder="*******" className="input input-bordered text-black w-full max-w-xs" />
                          </div>
                          {
                              error && <div className='text-sm text-red-500'>{ error.slice(10, 100) }</div>
                          }
                          <input type="submit" required value="Login" className="input bg-black text-white input-bordered w-full max-w-xs" />
                          <p className="text-lg font-medium">Already Have An Accound ? <Link to='/login' className='text-yellow-500'>Login</Link> Now.</p>

                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Register