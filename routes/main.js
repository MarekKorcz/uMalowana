const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home')
router.get('/', homeController.home)

const treatmentsController = require('../controllers/treatments')
router.get('/treatments', treatmentsController.main)
router.get('/dermapen', treatmentsController.dermapen)
router.get('/peeling', treatmentsController.peeling)
router.get('/oxygen-infusion', treatmentsController.oxygenInfusion)

module.exports = router