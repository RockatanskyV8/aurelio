'use strict'

const { Pool } = require('pg')

let client = () =>{
  return new Pool
  ({
    user : "postgres", password : null, host : "localhost",
    port : 5432,       database : "mssg"
  });
}

module.exports = client;
