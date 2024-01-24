const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express());

const ProdRoute = require('./Routes/Products-routes');
const AuthRoute = require('./Routes/Auth-routes');

try {
	mongoose.connect('mongodb://127.0.0.1:27017/bartek');
	
	console.log('Połączone');
} catch (err) {
	console.log(err);
}


app.get('/api', (req, res) => {
	res.send('Xavy-Master API');
});

app.use('/api/auth', AuthRoute);
app.use('/api/products', ProdRoute);

app.listen(5000);
