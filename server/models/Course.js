const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, default: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800' },
  category: { type: String, default: 'General' },
  instructor: { type: String, default: 'LearnHub Instructor' },
  duration: { type: String, default: 'Self-paced' },
  price: { type: String, default: 'Free' },
  level: { type: String, default: 'Beginner', enum: ['Beginner', 'Intermediate', 'Advanced'] },
  lessons: [{type: mongoose.Schema.Types.ObjectId, ref:'Lesson'}],
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
},{timestamps:true});

module.exports = mongoose.model('Course', courseSchema);
