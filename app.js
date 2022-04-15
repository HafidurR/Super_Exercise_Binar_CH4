require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 4000;
const client = require('./routes/client.routes');
const address = require('./routes/address.routes');
const brand = require('./routes/brand.routes');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/client', client);
app.use('/address', address);
app.use('/brand', brand);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// module.exports = app;
