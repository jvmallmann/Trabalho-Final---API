const { validateNewEnfermaria, checkEnfermariaExiste } = require('../validates/enfermarias');
const enfermariasService = require('../services/enfermarias');

const postEnfermarias = async (req, res) => {
    const errors = validateNewEnfermaria(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }  
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
    try {
        const { id } = req.params;
        
        // Verifica se a enfermaria existe
        const existe = await checkEnfermariaExiste(id);
        if (!existe) {
            return res.status(404).json({ message: 'Enfermaria não encontrada' });
        }
        await enfermariasService.deleteEnfermarias({ id });
        res.status(204).json({ message: 'Enfermaria deletada com sucesso' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.postEnfermarias = postEnfermarias
module.exports.getEnfermarias = getEnfermarias
module.exports.deleteEnfermarias = deleteEnfermarias
module.exports.patchEnfermarias = patchEnfermarias
