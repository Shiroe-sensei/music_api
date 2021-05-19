const { Router } = require('express');
const router = Router();

const { getArtista, welcome } = require('../controllers/index.controller');

router.get('/', welcome );
router.get('/artista', getArtista);

module.exports = router;
