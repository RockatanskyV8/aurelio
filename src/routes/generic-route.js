'use strict';

const express    = require('express');
const controller = require('../controller/controller');
const router     = express();
const fileList   = require('../read-files')('./src/routes/actions')
const paths      = require('../create-controller')(fileList)

const routes = [
  { path: '/mssg/users', action: paths.mssg },
  { path: '/mssg/posts', action: paths.mssg }
]

const createRoute  = ( route )  => router[ 'use' ]( route.path, route.action )
const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router;
