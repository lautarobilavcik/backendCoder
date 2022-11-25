const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.static('public'));

const server = app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
server.on('error', err => {
	console.log(`Error: ${err}`);
});
