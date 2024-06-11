const db = require('../configs/pg');

const validateNewEnfermeiro = (enfermeiroData) => {
    const errors = [];

    if (!enfermeiroData.EnfermeiroNome || typeof enfermeiroData.EnfermeiroNome !== 'string' || enfermeiroData.EnfermeiroNome.trim() === '') {
        errors.push('O nome do enfermeiro é obrigatório e deve ser uma string não vazia');
    } 

    if (!enfermeiroData.Registro || typeof enfermeiroData.Registro !== 'string' || enfermeiroData.Registro.trim() === '') {
        errors.push('O registro do enfermeiro é obrigatório e deve ser uma string não vazia');
    }

    if (!enfermeiroData.EnfermeiroTelefone || typeof enfermeiroData.EnfermeiroTelefone !== 'string' || enfermeiroData.EnfermeiroTelefone.trim() === '') {
        errors.push('O telefone do enfermeiro é obrigatório e deve ser uma string não vazia');
    }

    if (!isValidDate(enfermeiroData.DataAdmissao)) {
        errors.push('A data de admissão do enfermeiro é obrigatória e deve estar no formato YYYY-MM-DD');
    }

    if (!enfermeiroData.Turno || typeof enfermeiroData.Turno !== 'string' || enfermeiroData.Turno.trim() === '') {
        errors.push('O turno do enfermeiro é obrigatório e deve ser uma string não vazia');
    }

    return errors;
};

const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
};

const checkEnfermeiroExiste = async (EnfermeiroID) => {
    const result = await db.query('SELECT 1 FROM enfermeiros WHERE EnfermeiroID = $1', [EnfermeiroID]);
    return result.rowCount > 0;
};

module.exports = {
    validateNewEnfermeiro,
    checkEnfermeiroExiste
};
