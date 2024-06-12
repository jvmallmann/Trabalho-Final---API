const { checkMedicoExiste, checkPacienteExiste, checkConsultaExiste } = require('../validates/consultas');
const { validateNewConsulta } = require('../validates/consultas');

const consultasService = require('../services/consultas');

const postConsultas = async (req, res) => {
    try {
        const pacienteExiste = await checkPacienteExiste(req.body.PacienteID);
        const medicoExiste = await checkMedicoExiste(req.body.MedicoID);

        if (!pacienteExiste) {
            return res.status(400).json({ errors: ['PacienteID não existe'] });
        }
        if (!medicoExiste) {
            return res.status(400).json({ errors: ['MedicoID não existe'] });
        }

        const errors = validateNewConsulta(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const consultaData = {
            ...req.body
        };

        const retorno = await consultasService.postConsultas(consultaData);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getConsultas = async (req, res) => {
    try {
        const retorno = await consultasService.getConsultas();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const patchConsultas = async (req, res, next) => {
    try {
      
        const pacienteExiste = await checkPacienteExiste(req.body.PacienteID);
        const medicoExiste = await checkMedicoExiste(req.body.MedicoID);

        if (!pacienteExiste) {
            return res.status(400).json({ errors: ['PacienteID não existe'] });
        }
        if (!medicoExiste) {
            return res.status(400).json({ errors: ['MedicoID não existe'] });
        }
      
        const consultaData = {
            ...req.body,
            id: req.params.id
        };
      
      await consultasService.patchConsultas(consultaData)
      .then(ret => res.status(200).send(ret))
      .catch(err => res.status(500).send(err))
    } catch (err) {
      next(err);
    }
  }

const deleteConsultas = async (req, res) => {
    try {
        const { id } = req.params;
        const existe = await checkConsultaExiste(id);
        if (!existe) {
            return res.status(404).json({ message: 'Consulta não encontrada' });
        }
        await consultasService.deleteConsultas({ id });
        res.status(204).json({ message: 'Consulta deletada com sucesso' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.postConsultas = postConsultas;
module.exports.getConsultas = getConsultas;
module.exports.patchConsultas = patchConsultas;
module.exports.deleteConsultas = deleteConsultas;
