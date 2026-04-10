const express = require('express');
const { authAdmin, getForms, deleteForm, updateForm, createAdmin, deleteAdmin } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limit for login (prevent brute force)
const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 mins
    max: 10, // 10 attempts
    message: { success: false, message: 'Too many login attempts, please try again after 15 minutes' }
});

router.post('/login', loginRateLimiter, authAdmin);

router.route('/forms').get(protect, getForms);
router.route('/forms/:id').delete(protect, deleteForm).put(protect, updateForm);

router.post('/create-admin', protect, createAdmin);
router.delete('/delete-admin/:id', protect, deleteAdmin);

module.exports = router;
