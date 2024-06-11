const db = require('../configs/pg');

const validateNewPaciente = (pacienteData) => {
    const errors = [];

    if (!pacienteData.PacienteNome || typeof pacienteData.PacienteNome !== 'string' || pacienteData.PacienteNome.trim() === '') {
        errors.push('O nome do paciente é obrigatório e deve ser uma string não vazia');
    } 

    if (!pacienteData.DataNascimento || !isValidDate(pacienteData.DataNascimento)) {
        errors.push('A data de nascimento do paciente é obrigatória e deve estar no formato YYYY-MM-DD');
    }

    if (!pacienteData.Sexo || !['F', 'M'].includes(pacienteData.Sexo)) {
        errors.push('O sexo do paciente é obrigatório e deve ser "F" ou "M"');
    }

    if (!pacienteData.Endereco || typeof pacienteData.Endereco !== 'string' || pacienteData.Endereco.trim() === '') {
        errors.push('O endereço do paciente é obrigatório e deve ser uma string não vazia');
    }

    return errors;
};

const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
};

const checkPacienteExiste = async (PacienteID) => {
    const result = await db.query('SELECT 1 FROM pacientes WHERE PacienteID = $1', [PacienteID]);
    return result.rowCount > 0;
};

module.exports = {
    validateNewPaciente,
    checkPacienteExiste
};
