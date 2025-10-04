import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform">
          <span className="text-4xl">📚</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">LearnHub</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white font-medium hover:text-blue-200 transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
            Home
          </Link>
          <Link to="/courses" className="text-white font-medium hover:text-blue-200 transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
            Courses
          </Link>
          {token ? (
            <>
              <Link to="/dashboard" className="text-white font-medium hover:text-blue-200 transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
                Dashboard
              </Link>
              {user && user.role === 'admin' && (
                <Link to="/admin/dashboard" className="text-white font-medium hover:text-blue-200 transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
                  Admin
                </Link>
              )}
              <button 
                onClick={logout} 
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-white font-medium hover:text-blue-200 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-white text-blue-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
