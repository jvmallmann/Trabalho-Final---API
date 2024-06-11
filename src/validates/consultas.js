const db = require('../configs/pg');

const validateNewConsulta = async (consultaData) => {
    const errors = [];

    const dataConsulta = /^\d{4}-\d{2}-\d{2}$/;
    if (!consultaData.DataConsulta || !dataConsulta.test(consultaData.DataConsulta)) {
        errors.push('A data da consulta é obrigatória e deve estar no formato YYYY-MM-DD');
    }

    if (!consultaData.HoraConsulta || !isValidTime(consultaData.HoraConsulta)) {
        errors.push('A hora da consulta é obrigatória e deve estar no formato HH:MM ou HH:MM:SS');
    }

    if (!consultaData.PacienteID) {
        errors.push('O ID do paciente é obrigatório');
    } 

    if (!consultaData.MedicoID) {
        errors.push('O ID do médico é obrigatório');
    }

    if (!consultaData.Descricao || typeof consultaData.Descricao !== 'string' || consultaData.Descricao.trim() === '') {
        errors.push('A descrição da consulta é obrigatória e deve ser uma string não vazia');
    }

    if (!consultaData.LocalConsuta || typeof consultaData.LocalConsuta !== 'string' || consultaData.LocalConsuta.trim() === '') {
        errors.push('O local da consulta é obrigatório e deve ser uma string não vazia');
    }

    return errors;
};

const isValidTime = (timeString) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/;
    return regex.test(timeString);
};

const checkPacienteExiste = async (PacienteID) => {
    const result = await db.query('SELECT 1 FROM pacientes WHERE PacienteID = $1', [PacienteID]);
    return result.rowCount > 0;
};

const checkMedicoExiste = async (MedicoID) => {
    const result = await db.query('SELECT 1 FROM medicos WHERE MedicoID = $1', [MedicoID]);
    return result.rowCount > 0;
};

const checkConsultaExiste = async (ConsultaID) => {
    const result = await db.query('SELECT 1 FROM consultas WHERE ConsultaID = $1', [ConsultaID]);
    return result.rowCount > 0;
};

module.exports = {
    validateNewConsulta,
    checkPacienteExiste,
    checkMedicoExiste,
    checkConsultaExiste
};
