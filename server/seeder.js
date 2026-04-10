const fs = require('fs');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// Connect to MongoDB Database
mongoose.connect(process.env.MONGO_URI).then(async () => {
    console.log("DB Connected. Checking Admin...");
    const adminExists = await Admin.findOne({ username: 'adminShashank@FXR' });
    if (!adminExists) {
        await Admin.create({
            id: uuidv4(),
            username: 'adminShashank@FXR',
            password: 'Shashank@#12345'
        });
        console.log("Default admin created. Username: adminShashank@FXR");
    }
    process.exit();
});
