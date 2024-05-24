const medicosService = require('../services/medicos');

const postMedicos = async (req, res) => {
    try {
        const retorno = await medicosService.postMedicos(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getMedicos = async (req, res) => {
    try {
        const retorno = await medicosService.getMedicos();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const patchMedicos = async (req, res, next) => {
    try {
      let params = req.body
      params.id = req.params.id
      await medicosService.patchMedicos(params)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

  const putMedicos = async (req, res, next) => {
    try {
      let params = req.body
      params.id = req.params.id
      await medicosService.putMedicos(params)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

  const deleteMedicos = async (req, res, next) => {
    try{
        await medicosService.deleteMedicos(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err)
    }
}

module.exports.postMedicos = postMedicos
module.exports.getMedicos = getMedicos
module.exports.patchMedicos = patchMedicos
module.exports.putMedicos = putMedicos
module.exports.deleteMedicos = deleteMedicos