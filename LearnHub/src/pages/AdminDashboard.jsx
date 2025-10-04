import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCourses, getUsers } from '../services/api';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalUsers: 0,
    totalEnrollments: 0,
    averageRating: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesRes = await getCourses();
        const usersRes = await getUsers();
        setCourses(coursesRes.data);
        setUsers(usersRes.data);

        // Calculate stats
        const totalCourses = coursesRes.data.length;
        const totalUsers = usersRes.data.length;
        // Dummy data for now
        const totalEnrollments = 1250; 
        const averageRating = 4.7;

        setStats({ totalCourses, totalUsers, totalEnrollments, averageRating });
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold">Total Courses</h3>
            <p className="text-4xl font-bold mt-2">{stats.totalCourses}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-4xl font-bold mt-2">{stats.totalUsers}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold">Total Enrollments</h3>
            <p className="text-4xl font-bold mt-2">{stats.totalEnrollments}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold">Average Rating</h3>
            <p className="text-4xl font-bold mt-2">{stats.averageRating} ⭐</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Courses */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Courses</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.slice(0, 5).map((course) => (
                    <tr key={course._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.instructor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${course.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Link to="/admin/courses" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Courses →
              </Link>
            </div>
          </div>

          {/* Recent Users */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Users</h2>
            <ul className="divide-y divide-gray-200">
              {users.slice(0, 5).map((user) => (
                <li key={user._id} className="py-3 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to="/admin/users" className="text-blue-600 hover:text-blue-700 font-medium">
                View All Users →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
