const enfermariasService = require('../services/enfermarias');

const postEnfermarias = async (req, res) => {
    try {
        const retorno = await enfermariasService.postEnfermarias(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getEnfermarias = async (req, res) => {
    try {
        const retorno = await enfermariasService.getEnfermarias();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
const patchEnfermarias = async (req, res, next) => {
    try {
      let params = req.body
      params.id = req.params.id
      await enfermariasService.patchEnfermarias(params)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

  const deleteEnfermarias = async (req, res, next) => {
    try{
        await enfermariasService.deleteEnfermarias(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err)
    }
}

module.exports.postEnfermarias = postEnfermarias
module.exports.getEnfermarias = getEnfermarias
module.exports.deleteEnfermarias = deleteEnfermarias
module.exports.patchEnfermarias = patchEnfermarias
