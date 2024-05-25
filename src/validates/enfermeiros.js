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
        errors.push('A data de admissão do enfermeiro é obrigatória e deve estar no formato DD-MM-YYYY');
    }

    if (!enfermeiroData.Turno || typeof enfermeiroData.Turno !== 'string' || enfermeiroData.Turno.trim() === '') {
        errors.push('O turno do enfermeiro é obrigatório e deve ser uma string não vazia');
    }

    return errors;
};

const isValidDate = (dateString) => {
    // Verifica se a data está no formato DD-MM-YYYY
    const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
    return regex.test(dateString);
};

module.exports = {
    validateNewEnfermeiro
};