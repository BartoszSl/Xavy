const express = require('express');

const Router = express.Router();

const { updateImage } = require('../util/User-update');

Router.post('/image/:id', async (req, res) => {
	const { id } = req.params
	const { picture } = req.body;

	console.log('Is it working?' + id + picture);

	if (!picture) {
		return res.status(400).json({ message: 'Picture is required' });
	}

	if (!picture.includes('@')) {
		return res.status(400).json({ message: 'Invalid data provided.' });
	}

	const _id = id;
	if (!_id) {
		return res.status(400).json({ error: 'Invalid id' });
	}

	try {
		const result = await updateImage(_id, picture);

		console.log('frst wall');

		res.status(200).json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error' });
	}
});

module.exports = Router;
