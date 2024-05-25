const validateNewMedico = (medicoData) => {
    const errors = [];

    if (!medicoData.MedicoNome) {
        errors.push('O nome do médico é obrigatório');
    } 

    if (!medicoData.Especialidade) {
        errors.push('A especialidade do médico é obrigatória');
    }

    if (!medicoData.CRM) {
        errors.push('O CRM do médico é obrigatório');
    } else if (medicoData.CRM.length < 9) {
        errors.push('O CRM do médico não pode ser menor 9 caracteres');
    } else if (medicoData.CRM.length > 9) {
        errors.push('O CRM do médico não pode exceder 9 caracteres');
    }

    if (!medicoData.MedicoTelefone) {
        errors.push('O telefone do médico é obrigatório');
    } else if (medicoData.MedicoTelefone.length > 15) {
        errors.push('O telefone do médico não pode exceder 15 caracteres');
    } else if (medicoData.MedicoTelefone.length < 8) {
        errors.push('O telefone do médico deve ter pelo menos 8 caracteres');
    }

    return errors;
};

module.exports = {
    validateNewMedico
};