const express = require('express');
const router = express.Router();
const pacientesController = require('../controllers/pacientes');

router.post('/pacientes', pacientesController.postPacientes);
router.get('/pacientes', pacientesController.getPacientes);

module.exports = router;

