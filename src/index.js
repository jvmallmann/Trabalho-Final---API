const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
require('./services/swagger');

const cookieParser = require ('cookie-parser')

app.use(express.json());
app.use(cookieParser());

require('./routes/index')(app);
app.get('/', (req,res) =>{ res.send('Hello World');});

app.get('/', (req, res) => {
    res.cookie('name', 'value');
    res.send('Cookie set!')
});

app.use('/v1/docs', express.static('src/views'));
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'));

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
