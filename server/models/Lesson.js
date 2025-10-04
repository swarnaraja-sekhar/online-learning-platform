const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  quiz: {type: mongoose.Schema.Types.ObjectId, ref:'Quiz'}
},{timestamps:true});

module.exports = mongoose.model('Lesson', lessonSchema);
