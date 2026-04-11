const Form = require('../models/Form');
const crypto = require('crypto');
const validator = require('validator');

// @desc    Submit a new form
// @route   POST /api/form/submit
// @access  Public
const submitForm = async (req, res, next) => {
    try {
        const { name, email, phone, companySize, description } = req.body;

        // Validation
        if (!name || !email || !phone || !companySize) {
            res.status(400);
            throw new Error('Please provide all required fields');
        }

        if (!validator.isEmail(email)) {
            res.status(400);
            throw new Error('Please provide a valid email');
        }

        const validSizes = ['1-50', '51-200', '201-500', '500+'];
        if (!validSizes.includes(companySize)) {
            res.status(400);
            throw new Error('Invalid company size');
        }

        const form = await Form.create({
            id: crypto.randomUUID(),
            name: validator.escape(name),
            email: validator.normalizeEmail(email),
            phone: validator.escape(phone),
            companySize,
            description: description ? validator.escape(description) : ''
        });

        if (form) {
            res.status(201).json({
                success: true,
                message: 'Form submitted successfully',
                data: { id: form.id, name: form.name }
            });
        } else {
            res.status(400);
            throw new Error('Invalid form data received');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { submitForm };
