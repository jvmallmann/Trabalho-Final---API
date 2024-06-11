const { validateNewMedico, checkMedicoExiste } = require('../validates/medicos');
const medicosService = require('../services/medicos');

const postMedicos = async (req, res) => {
    const errors = validateNewMedico(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }  
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
    const errors = validateNewMedico(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
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

  const deleteMedicos = async (req, res, next) => {
    try{

      const { id } = req.params;
        
      const existe = await checkMedicoExiste(id);
      if (!existe) {
          return res.status(404).json({ message: 'Medico não encontrado' });
      }
      await medicosService.deleteMedicos({ id });
      res.status(200).json({ message: 'Medico deletado com sucesso' });
    } catch(err) {
      res.status(500).send(err.message);
    }
}

module.exports.postMedicos = postMedicos
module.exports.getMedicos = getMedicos
module.exports.patchMedicos = patchMedicos
module.exports.deleteMedicos = deleteMedicos