CREATE TABLE pacientes (
    PacienteID INT NOT NULL,
    PacienteNome VARCHAR(255) NOT NULL,
    DataNascimento DATE NOT NULL,
    Sexo CHAR(1) NOT NULL, /* F / M */
    Endereco VARCHAR(255) NOT NULL,

    PRIMARY KEY (PacienteID)
);

CREATE TABLE medicos (
    MedicoID INT NOT NULL,
    MedicoNome VARCHAR(255) NOT NULL,
    Especialidade VARCHAR(100) NOT NULL,
    CRM VARCHAR(50) UNIQUE NOT NULL,
    MedicoTelefone VARCHAR(15) NOT NULL,

    PRIMARY KEY (MedicoID)
);

CREATE TABLE enfermeiros (
    EnfermeiroID INT  NOT NULL,
    EnfermeiroNome VARCHAR(255) NOT NULL,
    Registro  VARCHAR(50) NOT NULL,
    EnfermeiroTelefone VARCHAR(15) NOT NULL,
    DataAdmissao DATE NOT NULL,               
    Turno VARCHAR(50) NOT NULL,
    PRIMARY KEY (EnfermeiroID)
);

CREATE TABLE enfermarias (
    EnfermariaID INT  NOT NULL,
    EnfermariaNome VARCHAR(100) NOT NULL ,  
    Numero INT NOT NULL,
    Tipo VARCHAR(100) NOT NULL,
    Capacidade INT NOT NULL,                    
    Localizacao VARCHAR(255) NOT NULL,
    PRIMARY KEY (EnfermariaID)
);

CREATE TABLE equipamentos (
    EquipamentoID INT  NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    Fabricante VARCHAR(100) NOT NULL,
    DataCompra DATE NOT NULL,
    NumeroSerie VARCHAR(50) NOT NULL,            
    StatusEquipamento VARCHAR(50) NOT NULL,

    PRIMARY KEY (EquipamentoID)
);

CREATE TABLE consultas (
    ConsultaID INT  NOT NULL,
    DataConsulta DATE NOT NULL,
    HoraConsulta TIME NOT NULL,
    PacienteID INT NOT NULL,
    MedicoID INT NOT NULL,
    Descricao TEXT NOT NULL,
    LocalConsuta VARCHAR(255) NOT NULL,

    PRIMARY KEY (ConsultaID),
    FOREIGN KEY (PacienteID) REFERENCES Pacientes(PacienteID),
    FOREIGN KEY (MedicoID) REFERENCES Medicos(MedicoID)
);


CREATE TABLE internacao ( 
    InternacaoID INT  NOT NULL,
    EnfermariaID INT  NOT NULL,
    MedicoID INT NOT NULL,
    PacienteID INT NOT NULL,
    DataInicioInternacao DATE NOT NULL,
    DataFimInternacao DATE NOT NULL,
    ValorTotal DECIMAL(10, 2) NOT NULL,    
    StatusInternacao VARCHAR(50) NOT NULL, -- Status da internação (ex: Em andamento, Concluída, Cancelada)

    PRIMARY KEY (InternacaoID),
    FOREIGN KEY (MedicoID) REFERENCES Medicos(MedicoID),
    FOREIGN KEY (PacienteID) REFERENCES Pacientes(PacienteID),
    FOREIGN KEY (EnfermariaID) REFERENCES Enfermarias(EnfermariaID)
    
);


CREATE TABLE internacaoEnfermeiros ( 
    InternacaoID INT NOT NULL,
    EnfermeiroID INT NOT NULL,
    PRIMARY KEY (EnfermeiroID, InternacaoID),
    FOREIGN KEY (EnfermeiroID) REFERENCES Enfermeiros(EnfermeiroID),
    FOREIGN KEY (InternacaoID) REFERENCES Internacao(InternacaoID)
);

CREATE TABLE internacaoEquipamentos ( 
    Inter_Equip_Id INT  NOT NULL,
    EquipamentoID INT NOT NULL,
    InternacaoID INT NOT NULL,
    DataDeUso DATE NOT NULL,
    Situacao VARCHAR(50) NOT NULL,
    PRIMARY KEY (Inter_Equip_Id),
    FOREIGN KEY (EquipamentoID) REFERENCES equipamentos(EquipamentoID),
    FOREIGN KEY (InternacaoID) REFERENCES internacao(InternacaoID)
);


CREATE TABLE usuarios (
    UsuarioID INT  NOT NULL,
    Username TEXT UNIQUE NOT NULL,
    Salt TEXT NOT NULL NOT NULL,
    Senha VARCHAR(255) NOT NULL,

    PRIMARY KEY (UsuarioID)
);



