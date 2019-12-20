'use strict';

const express    = require('express');
const controller = require('../controller/controller');
const router     = express();

const paths =
{
'mssg' : require('./mssg/mssg')
}


router.use('/mssg/users/', paths['mssg'])
router.use('/mssg/posts/', paths['mssg'])

module.exports = router;
