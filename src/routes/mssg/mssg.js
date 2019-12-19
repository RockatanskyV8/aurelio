'use strict';

const express    = require('express');
const controller = require('../../controller/controller');

let paths = ['/users', '/posts'];

const router = express.Router();


router.get    (paths[0] + '/get'   ,      controller.rule);
router.get    (paths[0] + '/specific/:p', controller.rule);
router.post   (paths[0] + '/create',      controller.rule);
router.put    (paths[0] + '/update',      controller.rule);
router.delete (paths[0] + '/delete',      controller.rule);

router.get    (paths[1] + '/get'   ,      controller.rule);
router.get    (paths[1] + '/specific/:p', controller.rule);
router.post   (paths[1] + '/create',      controller.rule);
router.put    (paths[1] + '/update',      controller.rule);
router.delete (paths[1] + '/delete',      controller.rule);


module.exports = router;
