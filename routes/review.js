const express = require('express');
const { createReview } = require('../controllers/review');
const { requiresignin } = require('../middlewares/authentication');

const router = express.Router()

router.post('/createreview',requiresignin,createReview)


module.exports = router;