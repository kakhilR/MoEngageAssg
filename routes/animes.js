const express = require('express');
const { getAnime, getAnimeById } = require('../controllers/animes');
const { requiresignin } = require('../middlewares/authentication');


const router = express.Router()

router.get('/animeapidata',requiresignin,getAnime)
router.get('/animeapidata/:animeId',requiresignin,getAnimeById)


module.exports = router;