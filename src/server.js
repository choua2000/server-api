const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./routes/routes')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 500000 }))

app.use( router);

const port = 8000;
app.listen(port, () => console.log('server running on port : ', port))