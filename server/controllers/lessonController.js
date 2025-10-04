const Lesson = require('../models/Lesson');

const addLesson = async(req,res)=>{
  const { title, content, courseId } = req.body;
  const lesson = await Lesson.create({title, content});
  // add lesson to course
  const Course = require('../models/Course');
  const course = await Course.findById(courseId);
  course.lessons.push(lesson._id);
  await course.save();
  res.status(201).json(lesson);
}

const getLessons = async(req,res)=>{
  const lessons = await Lesson.find().populate('quiz');
  res.json(lessons);
}

module.exports = { addLesson, getLessons };
