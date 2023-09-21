const bcrypt = require('bcrypt');
const { User } = require('../models');

const createUser = async (req, res) => {
	const hash = bcrypt.hashSync(req.body.password, 10);
	try {
		const email = await User.findOne({ where: { email: req.body.email } });
		if (email) {
			return res.status(409).json({ message: 'Email already exists or is invalid' });
		} else {
			try {
				const user = await User.create({
					name: req.body.name,
					email: req.body.email,
					password: hash,
					role: req.body.role,
				});
				res.status(201).json({
					error: false,
					code: 201,
					message: 'User created',
					answer: user,
				});
			} catch (err) {
				res.status(400).json({
					error: true,
					code: 400,
					message: 'Error creating user',
					answer: err,
				});
			}
		}
	} catch (err) {
		res.status(400).json({
			error: true,
			code: 400,
			message: 'Error creating user',
			answer: err,
		});
	}
};

module.exports = {
	createUser,
};
