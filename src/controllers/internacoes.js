const internacaoService = require('../services/internacoes');
const { validateNewInternacao, checkEnfermariaExiste, checkMedicoExiste, checkPacienteExiste, checkInternacaoExiste } = require('../validates/internacoes');

const postInternacao = async (req, res) => {
    try {

        const enfermariaExiste = await checkEnfermariaExiste(req.body.EnfermariaID);
        const pacienteExiste = await checkPacienteExiste(req.body.PacienteID);
        const medicoExiste = await checkMedicoExiste(req.body.MedicoID);

        if (!enfermariaExiste) {
            return res.status(400).json({ errors: ['EnfermariaID não existe'] });
        }
        if (!pacienteExiste) {
            return res.status(400).json({ errors: ['PacienteID não existe'] });
        }
        if (!medicoExiste) {
            return res.status(400).json({ errors: ['MedicoID não existe'] });
        }

        const errors = await validateNewInternacao(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        let params = req.body

        const retorno = await internacaoService.postInternacao(params);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getInternacoes = async (req, res) => {
    try {
        const internacoes = await internacaoService.getInternacoes();
        res.status(200).json(internacoes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const patchInternacao = async (req, res) => {
    try {
        const enfermariaExiste = await checkEnfermariaExiste(req.body.EnfermariaID);
        const pacienteExiste = await checkPacienteExiste(req.body.PacienteID);
        const medicoExiste = await checkMedicoExiste(req.body.MedicoID);

        if (!pacienteExiste) {
            return res.status(400).json({ errors: ['PacienteID não existe'] });
        }
        if (!medicoExiste) {
            return res.status(400).json({ errors: ['MedicoID não existe'] });
        }
        if (!enfermariaExiste) {
            return res.status(400).json({ errors: ['EnfermariaID não existe'] });
        }

        const errors = await validateNewInternacao(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        let params = req.body
        params.id = req.params.id

        const retorno = await internacaoService.patchInternacao(params);
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteInternacao = async (req, res, next) => {
    try{
        const { id } = req.params.id;
        
        const existe = await checkInternacaoExiste(id);
        if (!existe) {
            return res.status(404).json({ message: 'Internação não encontrada' });
        }
        await internacaoService.deleteInternacao({ id });
        res.status(204).json({ message: 'Internação deletada com sucesso' });
    } catch(err) {
      res.status(500).send(err.message);
    }
}

module.exports.postInternacao = postInternacao
module.exports.patchInternacao = patchInternacao
module.exports.getInternacoes = getInternacoes
module.exports.deleteInternacao = deleteInternacao