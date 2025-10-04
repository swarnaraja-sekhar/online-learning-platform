const Quiz = require('../models/Quiz');

const addQuiz = async(req,res)=>{
  const { lessonId, questions } = req.body;
  const quiz = await Quiz.create({lessonId, questions});
  res.status(201).json(quiz);
}

const getQuizzes = async(req,res)=>{
  const quizzes = await Quiz.find();
  res.json(quizzes);
}

module.exports = { addQuiz, getQuizzes };
