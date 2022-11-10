const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
	const time = new Date().getHours();

	if (time >= 6 && time <= 12) res.end('<h1>Buenos días!</h1>');
	else if (time >= 13 && time <= 19) res.end('<h1>Buenas tardes!</h1>');
	else res.end('<h1>Buenas noches!</h1>');
});

server.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
