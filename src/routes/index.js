const { Router } = require('express');
const router = Router();

const { getMusic, welcome, getArtist, getAlbum, getSong, getDiscografia } = require('../controllers/controller.js');

router.get('/', welcome );
router.get('/music', getMusic);
router.get('/artist', getArtist);
router.get('/album', getAlbum);
router.get('/song', getSong);
router.get('/discografia', getDiscografia);

module.exports = router;