const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const galleryR = require('./routes/galleryR');

const port = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
	res.render('index', {
		title: 'My training',
		heading: 'Dont Stop Training',
		subheading: 'Progress is the key'
	})
})

app.post('/users/add', (req,res) => {
	let newUser = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	}
	console.log(newUser);
})

//app.use('/gallery', galleryR);

app.listen(port, () => {
	console.log(`server active, listening on port ${port}`);
})