const pacientesService = require('../services/pacientes');

const postPacientes = async (req, res) => {
    try {
        const retorno = await pacientesService.postPacientes(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getPacientes = async (req, res) => {
    try {
        const retorno = await pacientesService.getPacientes();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


const deletePacientes = async (req, res, next) => {
    try {
        const retorno = await pacientesService.deletePacientes(req.params)
        res.status(204).json(retorno)
    } catch (err){
        res.status(500).send(err.message)
    }
}

const putPacientes = async (req, res, next) => {
    try {
      let params = req.body
      params.id = req.params.id
      await pacientesService.putPacientes(params)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

  const patchPacientes = async (req, res, next) => {
    try {
      let params = req.body
      params.id = req.params.id
      await pacientesService.patchPacientes(params)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

module.exports.patchPacientes = patchPacientes
module.exports.postPacientes = postPacientes
module.exports.deletePacientes = deletePacientes
module.exports.getPacientes = getPacientes
module.exports.putPacientes = putPacientes