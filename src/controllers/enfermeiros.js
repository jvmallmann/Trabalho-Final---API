const enfermeirosService = require('../services/enfermeiros');

const postEnfermeiros = async (req, res) => {
    try {
        const retorno = await enfermeirosService.postEnfermeiros(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getEnfermeiros = async (req, res) => {
    try {
        const retorno = await enfermeirosService.getEnfermeiros();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
const patchEnfermeiros = async (req, res, next) => {
    try {
      let params = req.body
      params.id = req.params.id
      await enfermeirosService.patchEnfermeiros(params)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

  const putEnfermeiros = async (req, res, next) => {
    try {
      let params = req.body
      params.id = req.params.id
      await enfermeirosService.putEnfermeiros(params)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

  const deleteEnfermeiros = async (req, res, next) => {
    try{
        await enfermeirosService.deleteEnfermeiros(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch(err) {
        next(err)
    }
}

module.exports.postEnfermeiros = postEnfermeiros
module.exports.getEnfermeiros = getEnfermeiros
module.exports.patchEnfermeiros = patchEnfermeiros
module.exports.putEnfermeiros = putEnfermeiros
module.exports.deleteEnfermeiros = deleteEnfermeiros
