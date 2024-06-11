const db = require('../configs/pg');


const validateNewEnfermaria = (enfermariaData) => {
    const errors = [];

    if (!enfermariaData || typeof enfermariaData !== 'object') {
        errors.push('Os dados da enfermaria devem ser fornecidos como um objeto JSON');
        return errors;
    }

    if (!enfermariaData.EnfermariaNome || typeof enfermariaData.EnfermariaNome !== 'string' || enfermariaData.EnfermariaNome.trim() === '') {
        errors.push('O nome da enfermaria é obrigatório e deve ser uma string não vazia');
    } 

    if (!enfermariaData.Numero || isNaN(enfermariaData.Numero) || enfermariaData.Numero <= 0) {
        errors.push('O número da enfermaria é obrigatório e deve ser um número positivo');
    }

    if (!enfermariaData.Tipo || typeof enfermariaData.Tipo !== 'string' || enfermariaData.Tipo.trim() === '') {
        errors.push('O tipo da enfermaria é obrigatório e deve ser uma string não vazia');
    }

    if (!enfermariaData.Capacidade || isNaN(enfermariaData.Capacidade) || enfermariaData.Capacidade <= 0) {
        errors.push('A capacidade da enfermaria é obrigatória e deve ser um número positivo');
    }

    if (!enfermariaData.Localizacao || typeof enfermariaData.Localizacao !== 'string' || enfermariaData.Localizacao.trim() === '') {
        errors.push('A localização da enfermaria é obrigatória e deve ser uma string não vazia');
    }

    return errors;
};

const checkEnfermariaExiste = async (EnfermariaID) => {
    const result = await db.query('SELECT 1 FROM enfermarias WHERE EnfermariaID = $1', [EnfermariaID]);
    return result.rowCount > 0;
};


module.exports = {
    validateNewEnfermaria, 
    checkEnfermariaExiste
};