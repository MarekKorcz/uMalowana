const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home')
router.get('/', homeController.home)
router.get('/team', homeController.team)
router.get('/contact', homeController.contact)

const treatmentsController = require('../controllers/treatments')
router.get('/dermapen', treatmentsController.dermapen)
router.get('/peeling', treatmentsController.peeling)
router.get('/oxygen-infusion', treatmentsController.oxygenInfusion)
router.get('/fractional-rf', treatmentsController.fractionalRf)
router.get('/plasma-and-plate-rich-fibrin', treatmentsController.plasmaAndPlateRichFibrin)
router.get('/kobido', treatmentsController.kobido)
router.get('/face-cleanning', treatmentsController.faceCleanning)
router.get('/injection-lipolysis', treatmentsController.injectionLipolysis)
router.get('/needle-mesotherapy', treatmentsController.needleMesotherapy)
router.get('/diamond-microdermabrasion', treatmentsController.diamondMicrodermabrasion)
router.get('/cavitation-peeling', treatmentsController.cavitationPeeling)
router.get('/cleansing-with-acids', treatmentsController.cleansingWithAcids)

module.exports = router