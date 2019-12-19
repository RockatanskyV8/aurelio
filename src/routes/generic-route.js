'use strict';

const express    = require('express');
const controller = require('../controller/controller');
const router     = express();

const paths =
{
'mssg' : require('./mssg/mssg')
}


router.use('/mssg', paths['mssg'])

module.exports = router;
