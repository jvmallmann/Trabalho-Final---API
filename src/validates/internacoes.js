const db = require('../configs/pg');

const checkEnfermariaExiste = async (EnfermariaID) => {
    const result = await db.query('SELECT 1 FROM enfermarias WHERE EnfermariaID = $1', [EnfermariaID]);
    return result.rowCount > 0;
};

const checkMedicoExiste = async (MedicoID) => {
    const result = await db.query('SELECT 1 FROM medicos WHERE MedicoID = $1', [MedicoID]);
    return result.rowCount > 0;
};

const checkPacienteExiste = async (PacienteID) => {
    const result = await db.query('SELECT 1 FROM pacientes WHERE PacienteID = $1', [PacienteID]);
    return result.rowCount > 0;
};

const validateNewInternacao = async (internacaoData) => {
    const errors = [];

    if (!internacaoData.EnfermariaID) {
        errors.push('O ID da enfermaria é obrigatório');
    } else {
        const enfermariaExiste = await checkEnfermariaExiste(internacaoData.EnfermariaID);
        if (!enfermariaExiste) {
            errors.push('EnfermariaID não existe');
        }
    }

    if (!internacaoData.MedicoID) {
        errors.push('O ID do médico é obrigatório');
    } else {
        const medicoExiste = await checkMedicoExiste(internacaoData.MedicoID);
        if (!medicoExiste) {
            errors.push('MedicoID não existe');
        }
    }

    if (!internacaoData.PacienteID) {
        errors.push('O ID do paciente é obrigatório');
    } else {
        const pacienteExiste = await checkPacienteExiste(internacaoData.PacienteID);
        if (!pacienteExiste) {
            errors.push('PacienteID não existe');
        }
    }

    if (!internacaoData.DataInicioInternacao) {
        errors.push('A data de início da internação é obrigatória');
    }

    if (!internacaoData.StatusInternacao) {
        errors.push('O status da internação é obrigatório');
    }

    return errors;
};

const checkInternacaoExiste = async (InternacaoID) => {
    const result = await db.query('SELECT 1 FROM internacao WHERE InternacaoID = $1', [InternacaoID]);
    return result.rowCount > 0;
};

module.exports = {
    validateNewInternacao,
    checkEnfermariaExiste,
    checkMedicoExiste,
    checkPacienteExiste,
    checkInternacaoExiste
};
