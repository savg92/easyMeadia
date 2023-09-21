const { Message } = require('../models');

const createMessage = async (req, res) => {
	try {
		const { userId, text } = req.body;
		const message = await Message.create({
			title,
			body,
			userId,
		});
		res.status(201).json({
			error: false,
			code: 201,
			message: 'Message created',
			answer: message,
		});
	} catch (err) {
		res.status(400).json({
			error: true,
			code: 400,
			message: 'Error creating message',
			answer: err,
		});
	}
};

const getAllMessages = async (req, res) => {
	try {
		const messages = await Message.findAll();
		res.status(200).json({
			error: false,
			code: 200,
			message: 'Messages obtained',
			answer: messages,
		});
	} catch (err) {
		res.status(400).json({
			error: true,
			code: 400,
			message: 'Error obtaining messages',
			answer: err,
		});
	}
}

const getAllMessagesByUser = async (req, res) => {
	try {
		const messages = await Message.findAll({
			where: { userId: req.auth.data.id },
		});
		res.status(200).json({
			error: false,
			code: 200,
			message: 'Messages obtained',
			answer: messages,
		});
	} catch (err) {
		res.status(400).json({
			error: true,
			code: 400,
			message: 'Error obtaining messages',
			answer: err,
		});
	}
}

const updateMessage = async (req, res) => {
	try {
		const { title, body } = req.body;
		const message = await Message.update(
			{ title, body },
			{ where: { id: req.params.id } }
		);
		res.status(201).json({
			error: false,
			code: 201,
			message: 'Message modified',
			answer: message,
		});
	} catch (err) {
		res.status(400).json({
			error: true,
			code: 400,
			message: 'Error modifying message',
			answer: err,
		});
	}
}

const deleteMessage = async (req, res) => {
	try {
		const message = await Message.destroy({ where: { id: req.params.id } });
		res.status(200).json({
			error: false,
			code: 200,
			message: 'Message deleted',
			answer: message,
		});
	} catch (err) {
		res.status(400).json({
			error: true,
			code: 400,
			message: 'Error deleting message',
			answer: err,
		});
	}
}

module.exports = {
	createMessage,
	getAllMessages,
	getAllMessagesByUser,
	updateMessage,
	deleteMessage,
};