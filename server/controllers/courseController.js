const Course = require('../models/Course');

const addCourse = async (req,res) => {
  const { title, description } = req.body;
  const course = await Course.create({ title, description, createdBy: req.user._id });
  res.status(201).json(course);
};

const getCourses = async (req,res) => {
  const courses = await Course.find().populate('lessons');
  res.json(courses);
};

const updateCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    course.title = title || course.title;
    course.description = description || course.description;

    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error: error.message });
  }
};

module.exports = { addCourse, getCourses, updateCourse, deleteCourse };
