const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes for expenses
app.use('/api/expenses', require('./routes/expenses'));

// Routes for categories
app.use('/api/categories', require('./routes/categories'));

// Routes for analysis
app.use('/api/analysis', require('./routes/analysis'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});