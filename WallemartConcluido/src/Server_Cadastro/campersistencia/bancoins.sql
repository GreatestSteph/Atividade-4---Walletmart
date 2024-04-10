CREATE TABLE funcionario(
    id INT NOT NULL AUTO_INCREMENT,
    Nome_func VARCHAR(100) NOT NULL,
    Data_nas_func DATE NOT NULL,
    Genero_func ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
    EstadoCivil_func ENUM('Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Outro') NOT NULL,
    RG_func VARCHAR(20) NOT NULL,
    CEP_func VARCHAR(15) NOT NULL,
    Telefone_func VARCHAR(20) NOT NULL,
    Email_func VARCHAR(100) NOT NULL,
    Cargo_func VARCHAR(100) NOT NULL,
    Salario_func DECIMAL(10,2) NOT NULL DEFAULT 0,
    Beneficios_func TEXT,
    Escolaridade_func ENUM('Fundamental', 'Médio', 'Superior', 'Pós-graduação', 'Doutorado') NOT NULL,
    CONSTRAINT pk_funcionario PRIMARY KEY(id)
);

CREATE TABLE item(
    id INT NOT NULL AUTO_INCREMENT,
    Nome_prod VARCHAR(100) NOT NULL,
    Data_fab DATE NOT NULL,
    Data_ven DATE NOT NULL,
    Tipo_prod ENUM('Beleza', 'Tecnológico', 'Vestimenta', 'Acessórios', 'Higiênico') NOT NULL,
    Preco_prod DECIMAL(10,2) NOT NULL DEFAULT 0,
    Qtde_prod ENUM('Entre 10 itens', 'Entre 50 itens', 'Entre 100 itens', 'Entre 500 itens', 'Entre 1000 itens') NOT NULL,
    CONSTRAINT pk_item PRIMARY KEY(id)
);

