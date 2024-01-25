const express = require('express');

const Router = express.Router();

const Auth = require('../models/Auth');

Router.get('/', async (req, res) => {
	res.send('login or reg');pp
});

Router.get('/fetchUser/:id', async (req, res) => {
	// const Id = req.params.id
	// const idset = await Auth.findById(Id)
	// res.json({user_data: idset});
	const { id } = req.params;

	console.log('Sent request -- API');

	const _id = id;
	if (!_id) {
		return res.status(400).json({ error: 'Bark Id' });
	}

	try {
		const user = await Auth.findOne({ _id });
		if (!user) {
			return res.status(401).json({ error: 'error Nie ma takiego usera' });
		}

		console.log(user);
		res.status(200).json({ message: 'found', user: user });
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
	const { email, password, firstName, surname, phoneNum } = req.body;

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

		const randomMoney = Math.random() * (99.99 - 0.01) + 0.01;

		const newUser = new Auth({
			firstName,
			surName: surname,
			email,
			password,
			phoneNum,
			image:
				'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?w=360',
			money: +randomMoney.toFixed(2),
			cart_id: ''
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
