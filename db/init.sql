CREATE TABLE pacientes (
    PacienteID SERIAL PRIMARY KEY ,
    PacienteNome VARCHAR(255) ,
    DataNascimento DATE ,
    Sexo CHAR(1) , /* F / M */
    Endereco VARCHAR(255) 
);

CREATE TABLE medicos (
    MedicoID SERIAL,
    MedicoNome VARCHAR(255) ,
    Especialidade VARCHAR(100) ,
    CRM VARCHAR(50) UNIQUE ,
    MedicoTelefone VARCHAR(15) ,

    PRIMARY KEY (MedicoID)
);

CREATE TABLE enfermeiros (
    EnfermeiroID SERIAL   ,
    EnfermeiroNome VARCHAR(255) ,
    Registro  VARCHAR(50) ,
    EnfermeiroTelefone VARCHAR(15) ,
    DataAdmissao DATE ,               
    Turno VARCHAR(50) ,
    PRIMARY KEY (EnfermeiroID)
);

CREATE TABLE enfermarias (
    EnfermariaID SERIAL   ,
    EnfermariaNome VARCHAR(100)  ,  
    Numero INT ,
    Tipo VARCHAR(100) ,
    Capacidade INT ,                    
    Localizacao VARCHAR(255) ,
    PRIMARY KEY (EnfermariaID)
);

CREATE TABLE equipamentos (
    EquipamentoID SERIAL   ,
    Descricao VARCHAR(255) ,
    Fabricante VARCHAR(100) ,
    DataCompra DATE ,
    NumeroSerie VARCHAR(50) ,            
    StatusEquipamento VARCHAR(50) ,

    PRIMARY KEY (EquipamentoID)
);

CREATE TABLE consultas (
    ConsultaID SERIAL   ,
    PacienteID INT ,
    MedicoID INT ,
    DataConsulta DATE ,
    HoraConsulta TIME ,
    Descricao TEXT ,
    LocalConsuta VARCHAR(255) ,

    PRIMARY KEY (ConsultaID),
    FOREIGN KEY (PacienteID) REFERENCES Pacientes(PacienteID),
    FOREIGN KEY (MedicoID) REFERENCES Medicos(MedicoID)
);


CREATE TABLE internacao ( 
    InternacaoID SERIAL   ,
    EnfermariaID INT  ,
    MedicoID INT ,
    PacienteID INT ,
    DataInicioInternacao DATE ,
    DataFimInternacao DATE ,
    ValorTotal DECIMAL(10, 2) ,    
    StatusInternacao VARCHAR(50) , -- Status da internação (ex: Em andamento, Concluída, Cancelada)

    PRIMARY KEY (InternacaoID),
    FOREIGN KEY (MedicoID) REFERENCES Medicos(MedicoID),
    FOREIGN KEY (PacienteID) REFERENCES Pacientes(PacienteID),
    FOREIGN KEY (EnfermariaID) REFERENCES Enfermarias(EnfermariaID)
    
);

CREATE TABLE internacaoEquipamentos ( 
    Inter_Equip_Id SERIAL   ,
    EquipamentoID INT ,
    InternacaoID INT ,
    DataDeUso DATE ,
    Situacao VARCHAR(50) ,
    PRIMARY KEY (Inter_Equip_Id),
    FOREIGN KEY (EquipamentoID) REFERENCES equipamentos(EquipamentoID),
    FOREIGN KEY (InternacaoID) REFERENCES internacao(InternacaoID)
);


CREATE TABLE usuarios (
    UsuarioID SERIAL   ,
    Username TEXT UNIQUE ,
    Salt TEXT  ,
    Senha VARCHAR(255) ,

    PRIMARY KEY (UsuarioID)
);



