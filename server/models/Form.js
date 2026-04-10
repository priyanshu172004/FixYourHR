const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    companySize: {
        type: String,
        required: [true, 'Company size is required'],
        enum: ['1-50', '51-200', '201-500', '500+']
    },
    description: {
        type: String,
        trim: true
    }
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
