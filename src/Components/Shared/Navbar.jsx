import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/ContextAuth';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

const Navbar = () => {

    const { user, isLoading } = useContext(MyContext)
    // console.log(user)
    const logOut = () => {
        signOut(auth).then(res => {
            isLoading(true)
            alert('Successfully sing out')
        }).catch(err => {
            console.log(err.message);
        })
    }

  return (
      <nav>
          <div className='py-4'>
              <div className="navbar bg-base-100">
                  <div className="navbar-start"></div>
                  <div className="navbar-center hidden lg:flex">
                      <ul className="menu menu-horizontal px-1 text-lg">
                          <li><Link to='/'>Home</Link></li>
                          <li><Link>About</Link></li>
                          <li><Link>Career</Link></li>
                      </ul>
                  </div>
                  <div className="navbar-end">
                      <div className="dropdown dropdown-end">
                          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                  <img src={user?.photoURL} />
                              </div>
                          </label>
                          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              <li>
                                  <a className="justify-between">
                                      Profile
                                      <span className="badge">New</span>
                                  </a>
                              </li>
                              <li><a>Settings</a></li>
                              <li><a>Logout</a></li>
                          </ul>
                      </div>
                      {
                          user ? 
                              <Link onClick={logOut} className="btn ml-4 capitalize text-lg font-medium bg-[#171717] text-white px-8">Logout</Link> :
                              <Link to='/login' className="btn ml-4 capitalize text-lg font-medium bg-[#171717] text-white px-8">Login</Link> 
                      }
                  </div>
              </div>
          </div>
      </nav>
  )
}

export default Navbar