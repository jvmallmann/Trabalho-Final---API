const db = require('../configs/pg');

const checkEquipamentoExiste = async (EquipamentoID) => {
    const result = await db.query('SELECT 1 FROM equipamentos WHERE EquipamentoID = $1', [EquipamentoID]);
    return result.rowCount > 0;
};

const checkInternacaoExiste = async (InternacaoID) => {
    const result = await db.query('SELECT 1 FROM internacao WHERE InternacaoID = $1', [InternacaoID]);
    return result.rowCount > 0;
};

const validateNewInternacaoEquipamento = async (internacaoEquipamentoData) => {
    const errors = [];

    const dataDeUsoRegex = /^\d{4}-\d{2}-\d{2}$/; // Ajustado para YYYY-MM-DD
    if (!internacaoEquipamentoData.DataDeUso || !dataDeUsoRegex.test(internacaoEquipamentoData.DataDeUso)) {
        errors.push('A data de uso é obrigatória e deve estar no formato YYYY-MM-DD');
    }

    if (!internacaoEquipamentoData.Situacao || typeof internacaoEquipamentoData.Situacao !== 'string' || internacaoEquipamentoData.Situacao.trim() === '') {
        errors.push('A situação é obrigatória e deve ser uma string não vazia');
    }

    if (!internacaoEquipamentoData.InternacaoID) {
        errors.push('O ID da internação é obrigatório');
    } else {
        const internacaoExiste = await checkInternacaoExiste(internacaoEquipamentoData.InternacaoID);
        if (!internacaoExiste) {
            errors.push('O ID da internação fornecido não existe');
        }
    }

    if (!internacaoEquipamentoData.EquipamentoID) {
        errors.push('O ID do equipamento é obrigatório');
    } else {
        const equipamentoExiste = await checkEquipamentoExiste(internacaoEquipamentoData.EquipamentoID);
        if (!equipamentoExiste) {
            errors.push('O ID do equipamento fornecido não existe');
        }
    }

    return errors;
};

const checkInternacaoEquipamentoExiste = async (Inter_Equip_Id) => {
    const result = await db.query('SELECT 1 FROM internacaoEquipamentos WHERE Inter_Equip_Id = $1', [Inter_Equip_Id]);
    return result.rowCount > 0;
};

module.exports = {
    checkEquipamentoExiste,
    checkInternacaoExiste,
    validateNewInternacaoEquipamento,
    checkInternacaoEquipamentoExiste
};
