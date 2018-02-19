const router = require('express').Router();
const galleryC = require('../controllers/galleryC')

router.get('/', galleryC.index)

module.exports = router;