import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Attractive */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-b relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Learn without limits
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
              Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/signup" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-lg transform hover:scale-105"
              >
                🚀 Join for Free
              </Link>
              <Link 
                to="/courses" 
                className="px-8 py-4 bg-white border-2 border-purple-500 text-purple-600 font-bold rounded-lg hover:bg-purple-50 hover:border-purple-600 transition-all text-lg shadow-lg transform hover:scale-105"
              >
                📚 Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-b shadow-lg">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">5,000+</div>
              <div className="text-blue-100 font-semibold text-sm uppercase tracking-wide">Courses</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-purple-100 font-semibold text-sm uppercase tracking-wide">Learners</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-indigo-100 font-semibold text-sm uppercase tracking-wide">Instructors</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-pink-100 font-semibold text-sm uppercase tracking-wide">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30 animate-pulse"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              What do you want to learn?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Explore courses and programs from leading universities and companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Data Science */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Data Science</h3>
              <p className="text-blue-100 mb-6 leading-relaxed relative z-10">
                Master data analysis, visualization, and machine learning to unlock insights from data.
              </p>
              <Link to="/courses" className="text-white font-bold hover:text-blue-100 inline-flex items-center group-hover:gap-2 transition-all relative z-10 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30">
                Explore Now 
                <span className="ml-1 group-hover:ml-2 transition-all">→</span>
              </Link>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">AI & Machine Learning</h3>
              <p className="text-purple-100 mb-6 leading-relaxed relative z-10">
                Build intelligent systems and learn cutting-edge AI technologies from industry experts.
              </p>
              <Link to="/courses" className="text-white font-bold hover:text-purple-100 inline-flex items-center group-hover:gap-2 transition-all relative z-10 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30">
                Explore Now 
                <span className="ml-1 group-hover:ml-2 transition-all">→</span>
              </Link>
            </div>

            {/* Web Development */}
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-6xl mb-4 relative z-10 group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Web Development</h3>
              <p className="text-green-100 mb-6 leading-relaxed relative z-10">
                Create modern web applications with the latest frameworks and technologies.
              </p>
              <Link to="/courses" className="text-white font-bold hover:text-green-100 inline-flex items-center group-hover:gap-2 transition-all relative z-10 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30">
                Explore Now 
                <span className="ml-1 group-hover:ml-2 transition-all">→</span>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/courses" 
              className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all text-lg shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              🎓 View All Domains
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 border-y relative">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why learn with LearnHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide world-class education accessible to everyone, anywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Instructors</h3>
              <p className="text-blue-100">
                Learn from industry professionals and university professors
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Verified Certificates</h3>
              <p className="text-green-100">
                Earn certificates to showcase your achievements
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Learning</h3>
              <p className="text-purple-100">
                Learn at your own pace, anytime and anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ✨ Ready to start learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              Join millions of learners worldwide and transform your career with LearnHub
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/signup" 
                className="px-10 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl text-lg transform hover:scale-105"
              >
                🚀 Get Started Free
              </Link>
              <Link 
                to="/login" 
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 transition-all text-lg transform hover:scale-105"
              >
                Sign In
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LearnHub</h3>
              <p className="text-gray-400">
                Empowering learners worldwide with quality education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
                <li><Link to="/dashboard" className="hover:text-white">My Dashboard</Link></li>
                <li><a href="#" className="hover:text-white">Programs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
