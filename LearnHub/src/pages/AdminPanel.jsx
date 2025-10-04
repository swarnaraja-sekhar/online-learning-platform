import React, { useState, useEffect } from 'react';
import { addCourse, getCourses, updateCourse, deleteCourse } from '../services/api';
import Navbar from '../components/Navbar';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [instructor, setInstructor] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data } = await getCourses();
      setCourses(data);
    } catch (error) {
      console.log('Error fetching courses:', error);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const courseData = {
        title,
        description: desc,
        imageUrl: imageUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
        category: category || 'General',
        instructor: instructor || 'LearnHub Instructor',
        duration: duration || 'Self-paced',
        price: price || 'Free',
        level
      };
      
      if (isEditing) {
        await updateCourse(editingId, courseData);
        alert('Course Updated Successfully!');
        setIsEditing(false);
        setEditingId(null);
      } else {
        await addCourse(courseData);
        alert('Course Added Successfully!');
      }
      setTitle('');
      setDesc('');
      setImageUrl('');
      setCategory('');
      setInstructor('');
      setDuration('');
      setPrice('');
      setLevel('Beginner');
      fetchCourses();
    } catch (error) {
      alert(isEditing ? 'Error updating course' : 'Error adding course');
    }
  };

  const handleEdit = (course) => {
    setTitle(course.title);
    setDesc(course.description);
    setImageUrl(course.imageUrl || '');
    setCategory(course.category || '');
    setInstructor(course.instructor || '');
    setDuration(course.duration || '');
    setPrice(course.price || '');
    setLevel(course.level || 'Beginner');
    setEditingId(course._id);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setTitle('');
    setDesc('');
    setImageUrl('');
    setCategory('');
    setInstructor('');
    setDuration('');
    setPrice('');
    setLevel('Beginner');
    setEditingId(null);
    setIsEditing(false);
  };

  const fillAIMLCourse = () => {
    setTitle('Complete Artificial Intelligence & Machine Learning Masterclass 2025');
    setDesc('Master AI and Machine Learning from scratch! Learn Python, TensorFlow, PyTorch, Neural Networks, Deep Learning, Computer Vision, NLP, and deploy real-world AI projects. Build intelligent systems, work with large language models, and create cutting-edge AI applications. Perfect for beginners and professionals looking to advance their career in AI/ML.');
    setImageUrl('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800');
    setCategory('Artificial Intelligence & Machine Learning');
    setInstructor('Dr. Sarah Chen');
    setDuration('12 weeks • 80+ hours');
    setPrice('$149.99');
    setLevel('Intermediate');
  };

  const fillMERNStackCourse = () => {
    setTitle('MERN Stack Web Development - Full Stack JavaScript Bootcamp');
    setDesc('Become a full-stack developer with the MERN stack! Master MongoDB, Express.js, React.js, and Node.js. Build modern, scalable web applications from scratch. Learn Redux, authentication, REST APIs, deployment, and best practices. Create real-world projects including e-commerce sites, social media platforms, and more. Perfect for aspiring full-stack developers.');
    setImageUrl('https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800');
    setCategory('Web Development');
    setInstructor('Michael Rodriguez');
    setDuration('16 weeks • 100+ hours');
    setPrice('$129.99');
    setLevel('Intermediate');
  };

  const fillDataScienceCourse = () => {
    setTitle('Data Science Complete Masterclass: Python, Analytics & Visualization');
    setDesc('Master Data Science with Python! Learn data analysis, statistics, visualization with Matplotlib & Seaborn, Pandas, NumPy, SQL, and machine learning basics. Work with real datasets, perform exploratory data analysis, create stunning visualizations, and build predictive models. Includes hands-on projects and case studies. Perfect for data analysts and aspiring data scientists.');
    setImageUrl('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800');
    setCategory('Data Science');
    setInstructor('Prof. Emily Watson');
    setDuration('14 weeks • 90+ hours');
    setPrice('$139.99');
    setLevel('Beginner');
  };

  const fillMLCourse = () => {
    setTitle('Machine Learning A-Z: Hands-On Python & R In Data Science');
    setDesc('Master Machine Learning algorithms! Learn supervised and unsupervised learning, regression, classification, clustering, neural networks, and deep learning. Work with popular libraries like scikit-learn, TensorFlow, and Keras. Build and deploy ML models, understand model evaluation, and work on real-world projects. Includes both Python and R programming. Perfect for beginners to advanced learners.');
    setImageUrl('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800');
    setCategory('Machine Learning');
    setInstructor('Dr. James Kumar');
    setDuration('10 weeks • 70+ hours');
    setPrice('$119.99');
    setLevel('Beginner');
  };

  const handleDelete = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await deleteCourse(courseId);
        alert('Course Deleted Successfully!');
        fetchCourses();
      } catch (error) {
        alert('Error deleting course');
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <svg className="w-10 h-10 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
                  <p className="text-gray-600">{isEditing ? 'Edit course' : 'Create and manage courses'}</p>
                </div>
              </div>
              {isEditing && (
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full">
                  Editing Mode
                </span>
              )}
            </div>

            {/* Quick Fill Buttons */}
            <div className="mb-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Quick Fill Templates</p>
                    <p className="text-xs text-gray-500">Fill form with sample course data</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={fillAIMLCourse}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                  AI/ML Course
                </button>
                <button
                  type="button"
                  onClick={fillMERNStackCourse}
                  className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  MERN Stack
                </button>
                <button
                  type="button"
                  onClick={fillDataScienceCourse}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                  Data Science
                </button>
                <button
                  type="button"
                  onClick={fillMLCourse}
                  className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Machine Learning
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Title <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="e.g., Complete Web Development Bootcamp" 
                  value={title} 
                  onChange={e=>setTitle(e.target.value)} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              
              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Description <span className="text-red-500">*</span>
                </label>
                <textarea 
                  placeholder="Provide a detailed description of what students will learn..." 
                  value={desc} 
                  onChange={e=>setDesc(e.target.value)} 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course Image URL
                </label>
                <input 
                  type="url"
                  placeholder="https://example.com/course-image.jpg" 
                  value={imageUrl} 
                  onChange={e=>setImageUrl(e.target.value)} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <p className="text-xs text-gray-500 mt-1">Leave blank for default image</p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g., Web Development, Design, Business" 
                    value={category} 
                    onChange={e=>setCategory(e.target.value)} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Level
                  </label>
                  <select 
                    value={level} 
                    onChange={e=>setLevel(e.target.value)} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Second Row - Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Instructor */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Instructor Name
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g., John Doe" 
                    value={instructor} 
                    onChange={e=>setInstructor(e.target.value)} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g., 8 weeks, 40 hours, Self-paced" 
                    value={duration} 
                    onChange={e=>setDuration(e.target.value)} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price
                </label>
                <input 
                  type="text"
                  placeholder="e.g., $99, Free, $49.99" 
                  value={price} 
                  onChange={e=>setPrice(e.target.value)} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              
              <div className="flex gap-3">
                <button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    {isEditing ? (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
                        </svg>
                        Update Course
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/>
                        </svg>
                        Add Course
                      </>
                    )}
                  </span>
                </button>
                {isEditing && (
                  <button 
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition duration-300"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <div className="flex">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <p className="text-blue-700 text-sm">
                <strong>Note:</strong> Make sure to provide clear and detailed course information to help students understand what they'll learn.
              </p>
            </div>
          </div>

          {/* Added Courses List */}
          <div className="mt-8 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-xl p-8 border border-blue-100">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Course Library
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">Manage your educational content</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold">{courses.length}</span>
                <span className="text-sm ml-2">Course{courses.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
            
            {courses.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 p-6 rounded-full">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Courses Yet</h3>
                <p className="text-gray-500 mb-4">Start building your course library by creating your first course above!</p>
                <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Tip: Add engaging titles and detailed descriptions
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {courses.map((course, index) => (
                  <div 
                    key={course._id} 
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-400 overflow-hidden transform hover:-translate-y-1"
                  >
                    {/* Course Image Header */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                      <img 
                        src={course.imageUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'} 
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Course Number Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="relative">
                          <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                            #{index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Level Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg ${
                          course.level === 'Beginner' ? 'bg-green-500' :
                          course.level === 'Intermediate' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}>
                          {course.level || 'Beginner'}
                        </span>
                      </div>

                      {/* Price Badge */}
                      <div className="absolute bottom-4 right-4">
                        <span className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-bold shadow-lg">
                          {course.price || 'Free'}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Course Content */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                              {course.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">
                              <span className="inline-flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                                </svg>
                                {course.instructor || 'LearnHub Instructor'}
                              </span>
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {course.description}
                        </p>
                        
                        {/* Course Meta Info */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center text-sm bg-blue-50 p-3 rounded-lg">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Created</p>
                              <p className="font-semibold text-gray-700">{new Date(course.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                          </div>

                          <div className="flex items-center text-sm bg-purple-50 p-3 rounded-lg">
                            <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Duration</p>
                              <p className="font-semibold text-gray-700">{course.duration || 'Self-paced'}</p>
                            </div>
                          </div>
                        </div>

                        {/* Category Tag */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-semibold">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                            </svg>
                            {course.category || 'General'}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                            Active
                          </span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => handleEdit(course)}
                          className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                          title="Edit Course"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                          </svg>
                          <span className="font-semibold">Edit Course</span>
                        </button>
                        <button
                          onClick={() => handleDelete(course._id)}
                          className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                          title="Delete Course"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                          </svg>
                          <span className="font-semibold">Delete</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Course Footer */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-3 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                          </svg>
                          Last updated: {new Date(course.updatedAt || course.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                          Published
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
