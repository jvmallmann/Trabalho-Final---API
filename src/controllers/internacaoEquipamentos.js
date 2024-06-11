const internacaoEquipamentosService = require('../services/internacaoEquipamentos');
const { checkEquipamentoExiste, checkInternacaoExiste, validateNewInternacaoEquipamento, checkInternacaoEquipamentoExiste } = require('../validates/internacaoEquipamentos');

const postInternacaoEquipamentos = async (req, res) => {
    try {
        const equipamentoExiste = await checkEquipamentoExiste(req.body.EquipamentoID);
        const internacaoExiste = await checkInternacaoExiste(req.body.InternacaoID);

        if (!equipamentoExiste) {
            return res.status(400).json({ errors: ['EquipamentoID não existe'] });
        }
        if (!internacaoExiste) {
            return res.status(400).json({ errors: ['InternacaoID não existe'] });
        }

        const errors = await validateNewInternacaoEquipamento(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        let params = req.body

        const retorno = await internacaoEquipamentosService.postInternacaoEquipamentos(params);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const getInternacaoEquipamentos = async (req, res) => {
    try {
        const retorno = await internacaoEquipamentosService.getInternacaoEquipamentos();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const patchInternacaoEquipamentos = async (req, res) => {
    try {
        const errors = await validateNewInternacaoEquipamento(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const equipamentoExiste = await checkEquipamentoExiste(req.body.EquipamentoID);
        const internacaoExiste = await checkInternacaoExiste(req.body.InternacaoID);

        if (!equipamentoExiste) {
            return res.status(400).json({ errors: ['EquipamentoID não existe'] });
        }
        if (!internacaoExiste) {
            return res.status(400).json({ errors: ['InternacaoID não existe'] });
        }
        
        let params = req.body
        params.id = req.params.id

        const retorno = await internacaoEquipamentosService.patchInternacaoEquipamentos(params);
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


const deleteInternacaoEquipamentos = async (req, res) => {
    try {
        const { id } = req.params;
        
        const existe = await checkInternacaoEquipamentoExiste(id);
        if (!existe) {
            return res.status(404).json({ message: 'InternacaoEquipamento não encontrado' });
        }
        await internacaoEquipamentosService.deleteInternacaoEquipamentos({ id });
        res.status(200).json({ message: 'InternacaoEquipamento deletado com sucesso' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};


module.exports.postInternacaoEquipamentos = postInternacaoEquipamentos
module.exports.patchInternacaoEquipamentos = patchInternacaoEquipamentos
module.exports.getInternacaoEquipamentos = getInternacaoEquipamentos
module.exports.deleteInternacaoEquipamentos = deleteInternacaoEquipamentos