import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://online-learning-platform-gv8v.onrender.com/api';
const getToken = () => localStorage.getItem('token');

// Auth
export const loginUser = (userData) => axios.post(`${API_URL}/users/login`, userData);
export const registerUser = (userData) => axios.post(`${API_URL}/users/signup`, userData);
export const getUserProfile = () => axios.get(`${API_URL}/users/profile`, { headers: { Authorization: `Bearer ${getToken()}` }});
export const getUsers = () => axios.get(`${API_URL}/users`, { headers: { Authorization: `Bearer ${getToken()}` }});

// Courses
export const getCourses = () => axios.get(`${API_URL}/courses`, { headers: { Authorization: `Bearer ${getToken()}` }});
export const addCourse = (courseData) => axios.post(`${API_URL}/courses`, courseData, { headers: { Authorization: `Bearer ${getToken()}` }});
export const updateCourse = (id, courseData) => axios.put(`${API_URL}/courses/${id}`, courseData, { headers: { Authorization: `Bearer ${getToken()}` }});
export const deleteCourse = (id) => axios.delete(`${API_URL}/courses/${id}`, { headers: { Authorization: `Bearer ${getToken()}` }});

// Lessons
export const getLessons = () => axios.get(`${API_URL}/lessons`, { headers: { Authorization: `Bearer ${getToken()}` }});
export const addLesson = (lessonData) => axios.post(`${API_URL}/lessons`, lessonData, { headers: { Authorization: `Bearer ${getToken()}` }});

// Quiz
export const getQuizzes = () => axios.get(`${API_URL}/quizzes`, { headers: { Authorization: `Bearer ${getToken()}` }});
export const addQuiz = (quizData) => axios.post(`${API_URL}/quizzes`, quizData, { headers: { Authorization: `Bearer ${getToken()}` } });
