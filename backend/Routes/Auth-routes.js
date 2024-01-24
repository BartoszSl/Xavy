const express = require('express');

const Router = express.Router();

const Auth = require('../models/Auth');

Router.get('/', async (req, res) => {
	res.send('login or reg');
});

Router.post('/fetchUser', async (req, res) => {
	// const Id = req.params.id
	// const idset = await Auth.findById(Id)
	// res.json({user_data: idset});
	const { id } = req.body;

	const _id = id;
	if (!_id) {
		return res.status(400).json({ error: 'Bark Id' });
	}

	try {
		const Id = await Auth.findOne({ _id });
		if (!Id) {
			return res.status(401).json({ error: 'error Nie ma takiego usera' });
		}

		res.status(200).json({ message: 'found', Id });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error' });
	}
});
// router.get('/:id', async (req, res, next) => {
// const postId = req.params.pid
// const post = await Post.findById(postId)
// res.json({posts: post});
// });

Router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ error: 'Emaila albo hasła brak' });
	}

	try {
		const searchedUser = await Auth.findOne({ email });

		if (!email) {
			return res.status(401).json({ error: 'error' });
		}

		if (searchedUser.password !== password) {
			return res.status(401).json({ error: 'Złe haslo.' });
		}

		res.status(200).json({ message: 'Zalogowany', user: searchedUser });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error' });
	}
});

Router.post('/signup', async (req, res) => {
	const { email, password } = req.body;

	console.log(req.body);

	// Basic validation
	if (!email || !password) {
		return res.status(400).json({ error: 'Nie ma email albo hasla.' });
	}

	try {
		const existingUser = await Auth.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: 'Email już użyty.' });
		}

		const newUser = new Auth({
			email,
			password,
		});
		await newUser.save();

		const searchedUser = await Auth.findOne({ email });

		res.status(201).json({ message: 'Zarejestrowany', user: searchedUser });
	} catch (error) {
		console.error(error);

		res.status(500).json({ error: 'Error' });
	}
});

module.exports = Router;
