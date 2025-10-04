const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addQuiz, getQuizzes } = require('../controllers/quizController');

router.post('/', protect, addQuiz);
router.get('/', getQuizzes);

module.exports = router;
