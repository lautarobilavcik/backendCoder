const express = require('express');

const app = express();
const PORT = 8080;
const server = app.listen(process.env.PORT || PORT, () =>
	console.log(`Server listening on PORT ${PORT}`)
);

server.on('error', err => console.log(`Error ${err}`));

app.get('/', (req, res) =>
	res.send('<h1 style="color: blue">Bienvenidos al servidor </h1>')
);

let visitas = 0;
app.get('/visitas', (req, res) =>
	res.send(` Visitas: ${visitas++}`)
);

let fyh = new Date().toLocaleString();
app.get('/fyh', (req, res) => res.send({ fyh }));
