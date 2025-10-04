const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  lessonId: {type: mongoose.Schema.Types.ObjectId, ref:'Lesson'},
  questions: [{
    question: String,
    options: [String],
    answer: String
  }]
},{timestamps:true});

module.exports = mongoose.model('Quiz', quizSchema);
