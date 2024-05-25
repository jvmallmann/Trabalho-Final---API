const validateNewPaciente = (pacienteData) => {
    const errors = [];

    if (!pacienteData.PacienteNome || typeof pacienteData.PacienteNome !== 'string' || pacienteData.PacienteNome.trim() === '') {
        errors.push('O nome do paciente é obrigatório e deve ser uma string não vazia');
    } 

    if (!pacienteData.DataNascimento || !isValidDate(pacienteData.DataNascimento)) {
        errors.push('A data de nascimento do paciente é obrigatória e deve estar no formato DD-MM-YYYY');
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
    const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
    return regex.test(dateString);
};

module.exports = {
    validateNewPaciente
};