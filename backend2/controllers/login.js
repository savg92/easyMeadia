const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({
		where: {
			email,
		},
	});
	if (user) {
		const valid = bcrypt.compareSync(password, user.password);
		if (valid) {
			const { password, ...rest } = user.dataValues;
			const token = jwt.sign({ data: rest }, 'secret', {
				expiresIn: '1h',
			});
			res.json({ user: rest, token });
		} else {
			res.status(401).json({ error: 'Invalid user or password' });
		}
	} else {
		res.status(401).json({ error: 'Invalid user or password' });
	}
};

const logout = async (req, res) => {
	res.json({ message: 'Logout' });
};

module.exports = {
	login,
	logout,
};
