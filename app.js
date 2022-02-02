// app.js

const express = require('express');
const connectDB = require('./config/db');
const books = require('./routes/api/books')

const app = express();

// Connect Database
connectDB();

// Body parser
app.use(express.json())

app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));