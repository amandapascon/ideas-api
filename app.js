const express  = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://mth_lp:math197328640@ideas.2ktq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
)
requireDir('./src/database/models')

const routes = require('./src/routes/routes');

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = { app };