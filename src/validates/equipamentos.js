const db = require('../configs/pg');

const validateNewEquipamento = (equipamentoData) => {
    const errors = [];

    if (!equipamentoData || typeof equipamentoData !== 'object') {
        errors.push('Os dados do equipamento devem ser fornecidos como um objeto JSON');
        return errors;
    }

    if (!equipamentoData.Descricao || typeof equipamentoData.Descricao !== 'string' || equipamentoData.Descricao.trim() === '') {
        errors.push('A descrição do equipamento é obrigatória e deve ser uma string não vazia');
    } 

    if (!equipamentoData.Fabricante || typeof equipamentoData.Fabricante !== 'string' || equipamentoData.Fabricante.trim() === '') {
        errors.push('O fabricante do equipamento é obrigatório e deve ser uma string não vazia');
    }

    const dataCompraPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!equipamentoData.DataCompra || !dataCompraPattern.test(equipamentoData.DataCompra)) {
        errors.push('A data de compra do equipamento é obrigatória e deve estar no formato YYYY-MM-DD');
    }

    if (!equipamentoData.NumeroSerie || typeof equipamentoData.NumeroSerie !== 'string' || equipamentoData.NumeroSerie.trim() === '') {
        errors.push('O número de série do equipamento é obrigatório e deve ser uma string não vazia');
    }

    if (!equipamentoData.StatusEquipamento || typeof equipamentoData.StatusEquipamento !== 'string' || equipamentoData.StatusEquipamento.trim() === '') {
        errors.push('O status do equipamento é obrigatório e deve ser uma string não vazia');
    }

    return errors;
};

const checkEquipamentosExiste = async (EquipamentoID) => {
    const result = await db.query('SELECT 1 FROM equipamentos WHERE EquipamentoID = $1', [EquipamentoID]);
    return result.rowCount > 0;
};

module.exports = {
    validateNewEquipamento,
    checkEquipamentosExiste
};
