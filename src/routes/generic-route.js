'use strict';

const express    = require('express');
const controller = require('../controller/controller');
const router     = express();
const fs         = require('fs');

const listFilesIn = ( path ) => fs.readdirSync( path )
const removeJSExtension = ( action ) => action.replace( '.js', '' )

const createAction = ( action ) => ( {
  [ action ]: require( `./actions/${ action }` )
} )

const toController = ( obj, action ) => Object.assign( obj, createAction( action ) )
const createController = ( actions ) => actions.reduce( toController, {} )

const fileList = (listFilesIn( './src/routes/actions' ).map( removeJSExtension ))
const paths = createController( fileList )

const routes = [
  { path: '/mssg/users', action: paths.mssg },
  { path: '/mssg/posts', action: paths.mssg }
]

const createRoute  = ( route )  => router[ 'use' ]( route.path, route.action )
const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router;
