const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addCourse, getCourses, updateCourse, deleteCourse } = require('../controllers/courseController');

router.post('/', protect, addCourse);
router.get('/', getCourses);
router.put('/:id', protect, updateCourse);
router.delete('/:id', protect, deleteCourse);

module.exports = router;
