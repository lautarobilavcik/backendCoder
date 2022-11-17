const router = require('express').Router();

const personas = [];

router.get('/personas', (req, res) => res.status(200).json({ personas }));

router.post('/personas', (req, res) => {
	const { nombre, apellido, edad } = req.body;
	personas.push({ nombre, apellido, edad });
	res.status(200).json({ msg: 'Persona agregada' });
});

module.exports = router;
