// const bcrypt = require('bcrypt');
// const { User } = require('../models');

// const getAllUsers = async (req, res) => {
//     // console.log(req.auth.data);
// 	try {
// 		// if (req.auth.data.type === 'admin') {
// 			const users = await User.findAll();
// 			res.json(users);
// 		// } else {
// 		// 	res.status(401).json({ error: 'Unauthorized', data: req.auth.data });
// 		// 	console.log(req.auth.data);
// 		// }
// 	} catch (error) {
// 		if (error.name === 'SequelizeUniqueConstraintError') {
// 			res.status(400).json({ error: error.errors[0].message });
// 		} else {
// 			res.status(500).json({ error: error.message });
// 		}
// 	}
// };

// const getUserById = async (req, res) => {
// 	try {
// 		// if (req.auth.data.type === 'admin') {
// 			const { id } = req.params;
// 			const user = await User.findByPk(id);
// 			res.json(user);
// 		// } else {
// 		// 	res.status(401).json({ error: 'Unauthorized' });
// 		// }
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };

// const updateUser = async (req, res) => {
// 	try {
// 		if (req.auth.data.type === 'admin') {
// 			const { id } = req.params;
// 			const { name, email, password, role } = req.body;
// 			const hashedPassword = bcrypt.hashSync(password, 10);
// 			const user = await User.update(
// 				{
// 					name,
// 					email,
// 					password: hashedPassword,
// 					role,
// 				},
// 				{
// 					where: {
// 						id,
// 					},
// 				}
// 			);
// 			res.json(user);
// 		} else {
// 			res.status(401).json({ error: 'Unauthorized' });
// 		}
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };

// const deleteUser = async (req, res) => {
// 	try {
// 		if (req.auth.data.type === 'admin') {
// 			const { id } = req.params;
// 			const user = await User.destroy({
// 				where: {
// 					id,
// 				},
// 			});
// 			res.json(user);
// 		} else {
// 			res.status(401).json({ error: 'Unauthorized' });
// 		}
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };

// module.exports = {
// 	getAllUsers,
// 	getUserById,
// 	updateUser,
// 	deleteUser,
// };

// const bcrypt = require('bcrypt');
const { User } = require('../models');

// const getAllUsers = async (req, res) => {
// 	// if (req.auth.data.type === 'admin') {
// 	// 	try {
// 	// 		const users = await User.findAll({
// 	// 			attributes: { exclude: ['password'] },
// 	// 		});
// 	// 		res.status(200).json({
// 	// 			error: false,
// 	// 			code: 200,
// 	// 			message: 'Listado de usuarios',
// 	// 			answer: users,
// 	// 		});
// 	// 	} catch (err) {
// 	// 		res.status(400).json({
// 	// 			error: true,
// 	// 			code: 400,
// 	// 			message: 'Error al listar usuarios',
// 	// 			answer: err,
// 	// 		});
// 	// 	}
// 	// } else if (req.auth.data.type === 'User') {
// 	// 	try {
// 	// 		const users = await User.findAll({
// 	// 			attributes: {
// 	// 				exclude: ['password', 'profile', 'createdAt', 'updatedAt'],
// 	// 			},
// 	// 			where: { id: req.auth.data.id },
// 	// 		});
// 	// 		res.status(206).json({
// 	// 			error: false,
// 	// 			code: 206,
// 	// 			message: 'Datos de usuario',
// 	// 			answer: users,
// 	// 		});
// 	// 	} catch (err) {
// 	// 		res.status(400).json({
// 	// 			error: true,
// 	// 			code: 400,
// 	// 			message: 'Error al listar usuarios',
// 	// 			answer: err,
// 	// 		});
// 	// 	}
// 	// } else {
// 	// 	res.status(401).json({
// 	// 		error: true,
// 	// 		code: 401,
// 	// 		message: 'No autorizado para ver lista de usuarios',
// 	// 	});
// 	// }
// 	try {
// 		// if (!req.auth || !req.auth.data || req.auth.data.type !== 'admin') {
// 		// 	throw new Error('Unauthorized');
// 		// }

// 		const users = await User.findAll({
// 			attributes: {
// 				exclude: ['password'],
// 			},
// 		});

// 		res.status(200).json({
// 			error: false,
// 			code: 200,
// 			message: 'Users list',
// 			answer: users,
// 		});
// 	} catch (err) {
// 		res.status(400).json({
// 			error: true,
// 			code: 400,
// 			message: 'Error listing users',
// 			answer: err.message,
// 		});
// 	}
// };

const getAllUsers = async (req, res) => {
	if (req.auth.data.type === 'Admin') {
		try {
			const users = await User.findAll({
				attributes: { exclude: ['password'] },
			});
			res.status(200).json({
				error: false,
				code: 200,
				message: 'Listado de usuarios',
				answer: users,
			});
		} catch (err) {
			res.status(400).json({
				error: true,
				code: 400,
				message: 'Error al listar usuarios',
				answer: err,
			});
		}
	} else if (req.auth.data.type === 'User') {
		try {
			const users = await User.findAll({
				attributes: {
					exclude: ['password', 'profile', 'createdAt', 'updatedAt'],
				},
				where: { id: req.auth.data.id },
			});
			res.status(206).json({
				error: false,
				code: 206,
				message: 'Datos de usuario',
				answer: users,
			});
		} catch (err) {
			res.status(400).json({
				error: true,
				code: 400,
				message: 'Error al listar usuarios',
				answer: err,
			});
		}
	} else {
		res.status(401).json({
			error: true,
			code: 401,
			message: 'No autorizado para ver lista de usuarios',
		});
	}
};

const getUserById = async (req, res) => {
	if (req.auth.data.type === 'admin') {
		try {
			const user = await User.findOne({
				where: { id: req.params.id },
				attributes: { exclude: ['password'] },
			});
			res.status(200).json({
				error: false,
				code: 200,
				message: 'Datos del usuario',
				answer: user,
			});
		} catch (err) {
			res.status(400).json({
				error: true,
				code: 400,
				message: 'Error al listar usuario',
				answer: err,
			});
		}
	} else if (req.params.id == req.auth.data.id) {
		try {
			const user = await User.findOne({
				where: { id: req.params.id },
				attributes: {
					exclude: ['password', 'profile', 'createdAt', 'updatedAt'],
				},
			});
			res.status(206).json({
				error: false,
				code: 206,
				message: 'Datos del usuario',
				answer: user,
			});
		} catch (err) {
			res.status(400).json({
				error: true,
				code: 400,
				message: 'Error al listar usuario',
				answer: err,
			});
		}
	} else {
		res.status(401).json({
			error: true,
			code: 401,
			message: 'No autorizado para ver detalles de usuario',
		});
	}
};

const updateUser = async (req, res) => {
	if (req.auth.data.type === 'admin') {
		try {
			const { firstName, lastName, email, password, profile } = req.body;
			const user = await User.update(
				{ firstName, lastName, email, password, profile },
				{ where: { id: req.params.id } }
			);
			res.status(201).json({
				error: false,
				code: 201,
				message: 'Usuario modificado',
				answer: user,
			});
		} catch (err) {
			res.status(400).json({
				error: true,
				code: 400,
				message: 'Error al modificar usuario',
				answer: err,
			});
		}
	} else if (req.params.id == req.auth.data.id) {
		try {
			const { firstName, lastName, password } = req.body;
			const user = await User.update(
				{ firstName, lastName, password },
				{ where: { id: req.auth.data.id } }
			);
			res.status(201).json({
				error: false,
				code: 201,
				message: 'Usuario modificado',
				answer: user,
			});
		} catch (err) {
			res.status(400).json({
				error: true,
				code: 400,
				message: 'Error al modificar usuario',
				answer: err,
			});
		}
	} else {
		res.status(401).json({
			error: true,
			code: 401,
			message: 'No autorizado para modificar usuario',
		});
	}
};

const deleteUser = async (req, res) => {
	if (req.auth.data.type === 'admin') {
		try {
			const user = await User.destroy({ where: { id: req.params.id } });
			res.status(200).json({
				error: false,
				code: 200,
				message: 'Usuario eliminado',
				answer: user,
			});
		} catch (err) {
			res.status(400).json({
				error: true,
				code: 400,
				message: 'Error al eliminar usuario',
				answer: err,
			});
		}
	} else {
		res.status(401).json({
			error: true,
			code: 401,
			message: 'No autorizado para eliminar usuarios',
		});
	}
};

module.exports = {
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
};
