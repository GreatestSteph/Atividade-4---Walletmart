CREATE DATABASE sistema;

USE sistema;

CREATE TABLE funcionario(
    func_codigo INT NOT NULL AUTO_INCREMENT,
    func_nome VARCHAR(100) NOT NULL,
    func_dataNascimento DATE NOT NULL,
    func_genero ENUM('M', 'F', 'Outro') NOT NULL,
    func_estadoCivil ENUM('Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Outro') NOT NULL,
    func_rg VARCHAR(20) NOT NULL,
    func_cep VARCHAR(15) NOT NULL,
    func_telefone VARCHAR(20) NOT NULL,
    func_email VARCHAR(100) NOT NULL,
    func_cargo VARCHAR(100) NOT NULL,
    func_salario DECIMAL(10,2) NOT NULL DEFAULT 0,
    func_beneficios TEXT,
    func_escolaridade VARCHAR(100) NOT NULL,
    CONSTRAINT pk_funcionario PRIMARY KEY(func_codigo)
);

CREATE TABLE item(
    item_codigo INT NOT NULL AUTO_INCREMENT,
    item_nome VARCHAR(100) NOT NULL,
    item_dataFabricacao DATE NOT NULL,
    item_dataVencimento DATE NOT NULL,
    item_tipo ENUM('Beleza', 'Tecnológico', 'Vestimenta', 'Acessórios', 'Higiênico') NOT NULL,
    item_preco DECIMAL(10,2) NOT NULL DEFAULT 0,
    item_quantidade INT NOT NULL DEFAULT 0,
    CONSTRAINT pk_item PRIMARY KEY(item_codigo)
);
