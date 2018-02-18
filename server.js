const express = require('express');
const logger = require('morgan');
const port = process.env..PORT || 8080;

const app = express();

app.use(logger('dev'));

app.listen(port, () => {
	console.log(`server active, listening on port ${port}`);
})