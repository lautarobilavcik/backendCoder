const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads');
	},
	filename: function (req, file, cb) {
		const fileName = `${Date.now()}-${file.originalname}`;
		cb(null, fileName);
	}
});

const upload = multer({ storage: storage });

app.post('/uploadfile', upload.single('myfile'), (req, res) => {
	const file = req.file;
	if (!file)
		return res.status(400).sendFile(__dirname + '/public/error.html');
	res.status(200).json({ msg: 'Archivo subido correctamente!' });
});

const server = app.listen(PORT, () =>
	console.log(`Server listening on PORT ${PORT}`)
);
server.on('error', err => console.log(`Error: ${err}`));
