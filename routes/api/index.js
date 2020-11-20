const router = require('express').Router();

const codeRoutes = require("./codes");


router.use('/codes', codeRoutes);

module.exports = router;