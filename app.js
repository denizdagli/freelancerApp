const express = require('express');
const app = express();
require('dotenv').config();
require('./src/config/dbConnection');
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');});
app.listen(port, () => console.log(`Listening on port ${port}...`));