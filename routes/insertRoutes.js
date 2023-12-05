var express = require('express');
var router = express.Router();
/* Importo el controlador para utilizar la funcion contenida en el */
var insertController = require('../controllers/insertController');

/* GET home page. */

router.post('/insertWithBody',insertController.insertWithBody)
router.post('/insertWithQuery',insertController.insertWithQuery)


module.exports = router;
