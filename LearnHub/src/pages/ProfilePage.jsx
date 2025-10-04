import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/api';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await getUserProfile();
        console.log('Profile data:', data);
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
        setError(error.response?.data?.message || 'Failed to load profile. Please login again.');
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <p className="text-red-600 text-xl mb-4">{error}</p>
            <a href="/login" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Go to Login</a>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-500" src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt="Profile" />
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-sm text-gray-600 mt-1">{user.email}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mt-2 px-2.5 py-0.5 rounded-full">{user.role}</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-600">Full Name</h3>
                  <p className="text-gray-800">{user.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Email Address</h3>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Role</h3>
                  <p className="text-gray-800">{user.role}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-600">Joined On</h3>
                  <p className="text-gray-800">{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
