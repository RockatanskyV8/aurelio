'use strict';

const express    = require('express');
const controller = require('../controller/controller');
const router     = express();

const paths =
{
  'mssg' : require('./mssg/mssg')
}

const routes = [
  { path: '/mssg/users', action: paths['mssg'] },
  { path: '/mssg/posts', action: paths['mssg'] }
]

const createRoute  = ( route )  => router[ 'use' ]( route.path, route.action )
const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router;
