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

    const dataCompraPattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!equipamentoData.DataCompra || !dataCompraPattern.test(equipamentoData.DataCompra)) {
        errors.push('A data de compra do equipamento é obrigatória e deve estar no formato DD-MM-YYYY');
    }

    if (!equipamentoData.NumeroSerie || typeof equipamentoData.NumeroSerie !== 'string' || equipamentoData.NumeroSerie.trim() === '') {
        errors.push('O número de série do equipamento é obrigatório e deve ser uma string não vazia');
    }

    if (!equipamentoData.StatusEquipamento || typeof equipamentoData.StatusEquipamento !== 'string' || equipamentoData.StatusEquipamento.trim() === '') {
        errors.push('O status do equipamento é obrigatório e deve ser uma string não vazia');
    }

    return errors;
};

module.exports = {
    validateNewEquipamento
};