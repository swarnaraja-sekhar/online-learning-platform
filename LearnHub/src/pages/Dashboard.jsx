import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getCourses } from '../services/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Define domains with icons
  const domains = [
    { name: 'All', icon: '📚', color: 'blue' },
    { name: 'Data Science', icon: '📊', color: 'indigo' },
    { name: 'Artificial Intelligence & Machine Learning', icon: '🤖', color: 'purple' },
    { name: 'Machine Learning', icon: '🧠', color: 'pink' },
    { name: 'Web Development', icon: '💻', color: 'green' },
    { name: 'Business', icon: '💼', color: 'yellow' },
    { name: 'Computer Science', icon: '🖥️', color: 'red' },
    { name: 'Language', icon: '🗣️', color: 'orange' }
  ];

  useEffect(() => {
    const fetchCourses = async() => {
      try {
        const {data} = await getCourses();
        setCourses(data);
        setFilteredCourses(data);
      } catch(error) {
        console.log('Error fetching courses:', error);
      }
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    if (selectedDomain === 'All') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.category === selectedDomain));
    }
  }, [selectedDomain, courses]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>

      {/* Hero Section - EdX Style */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build skills for today, tomorrow, and beyond.
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Education to future-proof your career. Explore courses from world-class institutions.
            </p>
            <div className="flex gap-4">
              <Link to="/courses" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                Explore All Courses
              </Link>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
                Find Your Path
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Domains Section - EdX Style */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore by domain</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {domains.map((domain) => (
              <button
                key={domain.name}
                onClick={() => setSelectedDomain(domain.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedDomain === domain.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{domain.icon}</span>
                <span className="text-sm">{domain.name === 'Artificial Intelligence & Machine Learning' ? 'AI & ML' : domain.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Banner - EdX Style */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{courses.length}+</div>
              <div className="text-gray-600 font-medium">Total Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedDomain === 'All' ? 'All Courses' : `${selectedDomain} Courses`}
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} available
            </p>
          </div>
        </div>

        {/* Courses Grid - EdX Style */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Link
                key={course._id}
                to={`/courses/${course._id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <div className="relative h-40">
                  <img
                    src={course.imageUrl || '/default-course.jpg'}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {course.level || 'Intermediate'}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                    {course.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="truncate">{course.instructor}</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      ${course.price}
                    </div>
                  </div>
                  {course.duration && (
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">
              {selectedDomain === 'All' 
                ? 'Start by adding some courses to your platform.' 
                : `No courses available in ${selectedDomain} category yet.`}
            </p>
            {localStorage.getItem('token') && (
              <Link to="/admin" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Add Courses
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
