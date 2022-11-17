const router = require('express').Router();

const mascotas = [];

router.get('/mascotas', (req, res) => res.status(200).json({ mascotas }));

router.post('/mascotas', (req, res) => {
	const { nombre, raza, edad } = req.body;
	mascotas.push({ nombre, raza, edad });
	res.status(200).json({ msg: 'Mascota agegada' });
});

module.exports = router;
