// app.js

const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const connectDB = require('./config/db');
const books = require('./routes/api/books');

dotenv.config({ path: './config/config.env'});

const app = express();



// Connect Database
connectDB();

// Use CORS
app.use(cors({credentials: true, origin: true}))

// Body parser
app.use(express.json())

app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));