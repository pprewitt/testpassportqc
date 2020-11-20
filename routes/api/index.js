const router = require('express').Router();
const userRoutes = require('./userRoutes');
const codeRoutes = require("./codes");

router.use('/users', userRoutes);
router.use('/codes', codeRoutes);

module.exports = router;