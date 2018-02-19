const galleryDB = require('../models/galleryDB');

module.exports = {

	index(req,res,next) {
		galleryDB.findAll()
			.then(result => {
				res.locals.samplegallery = results
				next()
			}) 
			.catch(result => {
				next(err)
			}) 
	}

};