import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold">Welcome to LearnHub</h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto">Your gateway to knowledge and skill development. Join our community and start learning today!</p>
        {!token && (
          <div className="mt-8">
            <Link to="/signup" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
              Get Started for Free
            </Link>
          </div>
        )}
      </header>

      {/* Features Section */}
      <main className="container mx-auto px-6 py-16">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose LearnHub?</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="max-w-sm bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-3">Expert-Led Courses</h3>
              <p className="text-gray-600">Learn from industry experts who are passionate about teaching and sharing their knowledge.</p>
            </div>
            <div className="max-w-sm bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Learn at your own pace, anytime, anywhere. Access courses on your desktop, tablet, or mobile device.</p>
            </div>
            <div className="max-w-sm bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-bold mb-3">Interactive Quizzes</h3>
              <p className="text-gray-600">Test your knowledge with our interactive quizzes and track your progress as you learn.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center mx-auto text-3xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold">Sign Up</h3>
              <p className="text-gray-600 mt-2">Create your free account in just a few clicks.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center mx-auto text-3xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold">Browse Courses</h3>
              <p className="text-gray-600 mt-2">Explore our wide range of courses and find the perfect one for you.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center mx-auto text-3xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold">Start Learning</h3>
              <p className="text-gray-600 mt-2">Begin your learning journey and unlock your potential.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 LearnHub. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
