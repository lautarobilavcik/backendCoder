const express = require('express');
const { Router } = express;
const router = Router();

const mascotas = [];

router.get('/mascotas', (req, res) => res.status(200).json({ mascotas }));

router.post('/mascotas', (req, res) => {
	const mascota = req.body;
	mascotas.push(mascota);
	res.status(200).json({ msg: 'Mascota agregada' });
});

module.exports = router;
