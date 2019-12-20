'use strict';

const express    = require('express');
const controller = require('../../controller/controller');

const router = express.Router();

const routes = [
  { method: 'get',
    path: '/get',
    action: controller.rule
  },
  { method: 'get',
    path: '/specific/:id',
    action: controller.rule
  },
  { method: 'post',
    path: '/create',
    action: controller.rule
  },
  { method: 'put',
    path: '/update',
    action: controller.rule
  },
  { method: 'delete',
    path: '/delete',
    action: controller.rule
  }
]

const createRoute  = ( route )  => router[ route.method ]( route.path, route.action )
const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router;
