const createAction = ( action ) => ( {
  [ action ]: require( `./routes/actions/${ action }` )
} )

const toController = ( obj, action ) => Object.assign( obj, createAction( action ) )
module.exports = ( actions ) => actions.reduce( toController, {} )
