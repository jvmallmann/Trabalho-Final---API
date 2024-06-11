const { validateNewPaciente, checkPacienteExiste } = require('../validates/pacientes');
const pacientesService = require('../services/pacientes');

const postPacientes = async (req, res) => {
  const errors = validateNewPaciente(req.body);
  if (errors.length > 0) {
      return res.status(400).json({ errors });
  }
  try {
      let params = req.body
      params.id = req.params.id
      const retorno = await pacientesService.postPacientes(params);
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
      const { id } = req.params;
        
      const existe = await checkPacienteExiste(id);
      if (!existe) {
          return res.status(404).json({ message: 'Paciente não encontrado' });
      }
      await pacientesService.deletePacientes({ id });
      res.status(200).json({ message: 'Paciente deletado com sucesso' });
    } catch (err){
        res.status(500).send(err.message)
    }
}

  const patchPacientes = async (req, res, next) => {
    const errors = validateNewPaciente(req.body);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
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