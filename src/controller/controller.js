'use strict'

const repos    = {'mssg' : require('./repositories/mssg')}
const cliente  = require('../db/cliente') 

function getReqInfo(req){
  let result = []
  if (Object.values(req.body).length   > 0 ){ result = Object.values(req.body)   } else
  if (Object.values(req.params).length > 0 ){ result = Object.values(req.params) }

  return result;
}

exports.rule = async(req, res, next) => {
    let path = (req.originalUrl).split("/");
    let { rows } = await cliente.query(
                                        repos[ path[1] ][ path[2] ][ path[3] ], getReqInfo(req)
                                      );
    res.status(200).send(rows);
}
