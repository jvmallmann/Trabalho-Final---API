const swaggerAutogen = require('swagger-autogen')('pt-BR')

const doc = {
    info : {
        version: "1.0.0",
        title: "API Gerenciamento de Hospital",
        description: "Documentação da API Gerenciamento de Hospital"
    },
    host: 'localhost:3000',
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/pacientes.js','./src/routes/medicos.js','./src/routes/enfermeiros.js', './src/routes/equipamentos.js', './src/routes/enfermarias.js','./src/routes/consultas.js','./src/routes/internacoes.js', './src/routes/internacaoEquipamentos.js' ,'./src/routes/usuarios.js','./src/routes/login.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);