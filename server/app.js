const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const formRoutes = require('./routes/formRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : '*',
    credentials: true
}));
app.use(express.json({ limit: '10kb' })); // Body parser limit
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Routes
app.use('/api/form', formRoutes);
app.use('/api/admin', adminRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('FixYourHR API is running...');
});

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
