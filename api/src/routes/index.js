require('dotenv').config();
const { Router } = require('express');
const router = Router();

const rdogs = require('./rdogs.js')
const rtemperaments = require('./rtemperaments.js')
const rgroup = require ('./rgroup')

router.use('/dogs', rdogs)
router.use('/temperaments', rtemperaments)
router.use('/groups', rgroup)
module.exports = router;
