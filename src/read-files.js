const fs = require('fs');

const listFilesIn = ( path ) => fs.readdirSync( path )
const removeJSExtension = ( action ) => action.replace( '.js', '' )

module.exports = ( paths ) => (listFilesIn( paths ).map( removeJSExtension ))
