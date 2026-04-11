const Admin = require('../models/Admin');
const Form = require('../models/Form');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30m'
    });
};

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const authAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username });

        if (admin && (await admin.matchPassword(password))) {
            res.json({
                success: true,
                data: {
                    id: admin.id,
                    username: admin.username,
                    token: generateToken(admin.id)
                }
            });
        } else {
            res.status(401);
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Get all forms
// @route   GET /api/admin/forms
// @access  Protected
const getForms = async (req, res, next) => {
    try {
        const forms = await Form.find({}).sort({ createdAt: -1 });
        res.json({ success: true, count: forms.length, data: forms });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a form
// @route   DELETE /api/admin/forms/:id
// @access  Protected
const deleteForm = async (req, res, next) => {
    try {
        const form = await Form.findOne({ id: req.params.id });
        if (!form) {
            res.status(404);
            throw new Error('Form not found');
        }
        await form.deleteOne();
        res.json({ success: true, message: 'Form removed' });
    } catch (error) {
        next(error);
    }
};

// @desc    Update a form
// @route   PUT /api/admin/forms/:id
// @access  Protected
const updateForm = async (req, res, next) => {
    try {
        const form = await Form.findOneAndUpdate({ id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        });
        if (!form) {
            res.status(404);
            throw new Error('Form not found');
        }
        res.json({ success: true, data: form });
    } catch (error) {
        next(error);
    }
};

// @desc    Create new admin
// @route   POST /api/admin/create-admin
// @access  Protected
const createAdmin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const adminExists = await Admin.findOne({ username });
        if (adminExists) {
            res.status(400);
            throw new Error('Admin already exists');
        }
        const admin = await Admin.create({
            id: crypto.randomUUID(),
            username,
            password
        });
        if (admin) {
            res.status(201).json({ success: true, message: 'Admin created', data: { id: admin.id, username: admin.username }});
        } else {
            res.status(400);
            throw new Error('Invalid admin data');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Delete admin
// @route   DELETE /api/admin/delete-admin/:id
// @access  Protected
const deleteAdmin = async (req, res, next) => {
    try {
        const admin = await Admin.findOne({ id: req.params.id });
        if (!admin) {
            res.status(404);
            throw new Error('Admin not found');
        }
        await admin.deleteOne();
        res.json({ success: true, message: 'Admin removed' });
    } catch (error) {
        next(error);
    }
};

module.exports = { authAdmin, getForms, deleteForm, updateForm, createAdmin, deleteAdmin };
