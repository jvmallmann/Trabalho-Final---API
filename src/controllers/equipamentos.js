const { validateNewEquipamento, checkEquipamentosExiste } = require('../validates/equipamentos');
const equipamentosService = require('../services/equipamentos');


const postEquipamentos = async (req, res) => {
    const errors = validateNewEquipamento(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    } 
    try {
        const retorno = await equipamentosService.postEquipamentos(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getEquipamentos = async (req, res) => {
    try {
        const retorno = await equipamentosService.getEquipamentos();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

  const patchEquipamentos = async (req, res, next) => {
      const errors = validateNewEquipamento(req.body);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      } 
      try {
        let params = req.body
        params.id = req.params.id
        await equipamentosService.patchEquipamentos(params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
      } catch (err) {
        next(err);
      }
    }

  const deleteEquipamentos = async (req, res, next) => {
    try{
      const { id } = req.params;
      const existe = await checkEquipamentosExiste(id);
      if (!existe) {
          return res.status(404).json({ message: 'Equipamentos não encontrado' });
      }
      await equipamentosService.deleteEquipamentos({ id });
      res.status(204).json({ message: 'Equipamentos deletado com sucesso' });
    } catch(err) {
      res.status(500).send(err.message);
    }
  }

module.exports.postEquipamentos = postEquipamentos
module.exports.getEquipamentos = getEquipamentos
module.exports.patchEquipamentos = patchEquipamentos
module.exports.deleteEquipamentos = deleteEquipamentos