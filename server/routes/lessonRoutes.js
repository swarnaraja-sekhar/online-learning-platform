const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addLesson, getLessons } = require('../controllers/lessonController');

router.post('/', protect, addLesson);
router.get('/', getLessons);

module.exports = router;
