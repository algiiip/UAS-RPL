const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/produk', require('./routes/product.routes'));


app.listen(process.env.PORT, () => {
console.log('Server running on port ' + process.env.PORT);
});