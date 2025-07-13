import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logout, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className='bg-slate-800 text-white'>
      <div className='mycontainer flex justify-between items-center px-4 py-5 h-14'>
        <div className="logo font-bold">
          <span className='text-green-700'>&lt;</span>
          <span>Pass</span>
          <span className='text-green-700'>OP/&gt;</span>
        </div>
        <ul>
          <li className='flex gap-4'>
            {token && (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition"
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
