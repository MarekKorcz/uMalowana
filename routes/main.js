const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home')
router.get('/', homeController.home)

const treatmentsController = require('../controllers/treatments')
router.get('/treatments', treatmentsController.main)
router.get('/dermapen', treatmentsController.dermapen)
router.get('/peeling', treatmentsController.peeling)
router.get('/oxygen-infusion', treatmentsController.oxygenInfusion)
router.get('/fractional-rf', treatmentsController.fractionalRf)
router.get('/plasma-and-plate-rich-fibrin', treatmentsController.plasmaAndPlateRichFibrin)
router.get('/kobido', treatmentsController.kobido)
router.get('/face-cleanning', treatmentsController.faceCleanning)
router.get('/injection-lipolysis', treatmentsController.injectionLipolysis)
router.get('/needle-mesotherapy', treatmentsController.needleMesotherapy)

module.exports = router