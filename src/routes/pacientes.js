const pacientesController = require('../controllers/pacientes')

module.exports = (app) => {
    app.post('/paciente', pacientesController.postPacientes
    /**  
      #swagger.tags = ["Pacientes"]
      #swagger.summary = 'Insere um novo Paciente'
      #swagger.description = 'Cadastra um novo Paciente no sistema.'
      #swagger.parameters['paciente'] = {
          in: 'body',
          description: 'Informações do Paciente a ser cadastrado',
          required: true,
          schema: {
              PacienteNome: 'Maria Silva',
              DataNascimento: '1990-01-01',
              Sexo: 'F',
              Endereco: 'Rua das Flores, 123'
          }
      }
      #swagger.responses[201] = {
          description: 'Paciente cadastrado com sucesso'
      }
     */
    )
    
    app.get('/paciente', pacientesController.getPacientes
    /**  
      #swagger.tags = ["Pacientes"]
      #swagger.summary = 'Consulta lista de Pacientes'
      #swagger.description = 'Consulta a lista de todos os Pacientes cadastrados no sistema.'
      #swagger.responses[200] = {
          description: 'Lista de Pacientes retornada com sucesso',
          schema: [{
              PacienteNome: 'Maria Silva',
              DataNascimento: '1990-01-01',
              Sexo: 'F',
              Endereco: 'Rua das Flores, 123'
          }]
      }
     */
    )
    
    app.patch('/paciente/:id', pacientesController.patchPacientes
    /**  
      #swagger.tags = ["Pacientes"]
      #swagger.summary = 'Atualiza informações de um Paciente'
      #swagger.description = 'Atualiza informações de um Paciente já cadastrado no sistema.'
      #swagger.parameters['paciente'] = {
          in: 'body',
          description: 'Informações atualizadas do Paciente',
          required: true,
          schema: {
              PacienteNome: 'Maria Silva',
              DataNascimento: '1990-01-01',
              Sexo: 'F',
              Endereco: 'Rua das Flores, 123'
          }
      }
      #swagger.responses[200] = {
          description: 'Paciente atualizado com sucesso'
      }
     */
    )
    
    app.delete('/paciente/:id', pacientesController.deletePacientes
    /**  
      #swagger.tags = ["Pacientes"]
      #swagger.summary = 'Remove um Paciente'
      #swagger.description = 'Remove um Paciente cadastrado no sistema, baseado no ID fornecido.'
      #swagger.parameters['id'] = {
          in: 'path',
          description: 'ID do Paciente a ser removido',
          required: true,
          type: 'integer'
      }
      #swagger.responses[204] = {
          description: 'Paciente removido com sucesso'
      }
      #swagger.responses[404] = {
        description: 'Paciente não encontrado'
     }
     */
    )
}
