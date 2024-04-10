import funcionario_dao from "../campersistencia/funcdao.js"; //ok

// cria classe funcionario //ok so far
export default class funcionarioclasse{
    #id;
    #Nome_func;
    #Data_nas_func;
    #Genero_func;
    #EstadoCivil_func;
    #RG_func;
    #CEP_func;
    #Telefone_func;
    #Email_func;
    #Cargo_func;
    #Salario_func;
    #Beneficios_func;
    #Escolaridade_func;

    constructor(id, Nome_func, Data_nas_func, Genero_func, EstadoCivil_func, RG_func, CEP_func, Telefone_func, Email_func, Cargo_func, Salario_func, Beneficios_func, Escolaridade_func) {
        this.#id = id;
        this.#Nome_func = Nome_func;
        this.#Data_nas_func = Data_nas_func;
        this.#Genero_func = Genero_func;
        this.#EstadoCivil_func = EstadoCivil_func;
        this.#RG_func = RG_func;
        this.#CEP_func = CEP_func;
        this.#Telefone_func = Telefone_func;
        this.#Email_func = Email_func;
        this.#Cargo_func = Cargo_func;
        this.#Salario_func = Salario_func;
        this.#Beneficios_func = Beneficios_func;
        this.#Escolaridade_func = Escolaridade_func;
    }



    get id() {
        return this.#id;
    }

    set id(novoid) {
        this.#id = novoid;
    }



    get Nome_func() {
        return this.#Nome_func;
    }

    set Nome_func(novoNome_func) {
        this.#Nome_func = novoNome_func;
    }



    get Data_nas_func() {
        return this.#Data_nas_func;
    }

    set Data_nas_func(novaData_nas_func) {
        this.#Data_nas_func = novaData_nas_func;
    }



    get Genero_func() {
        return this.#Genero_func;
    }

    set Genero_func(novoGenero_func) {
        this.#Genero_func = novoGenero_func;
    }



    get EstadoCivil_func() {
        return this.#EstadoCivil_func;
    }

    set EstadoCivil_func(novoEstadoCivil_func) {
        this.#EstadoCivil_func = novoEstadoCivil_func;
    }



    get RG_func() {
        return this.#RG_func;
    }

    set RG_func(novoRG_func) {
        this.#RG_func = novoRG_func;
    }



    get CEP_func() {
        return this.#CEP_func;
    }

    set CEP_func(novoCEP_func) {
        this.#CEP_func = novoCEP_func;
    }



    get Telefone_func() {
        return this.#Telefone_func;
    }

    set Telefone_func(novoTelefone_func) {
        this.#Telefone_func = novoTelefone_func;
    }



    get Email_func() {
        return this.#Email_func;
    }

    set Email_func(novoEmail_func) {
        this.#Email_func = novoEmail_func;
    }



    get Cargo_func() {
        return this.#Cargo_func;
    }

    set Cargo_func(novoCargo_func) {
        this.#Cargo_func = novoCargo_func;
    }



    get Salario_func() {
        return this.#Salario_func;
    }

    set Salario_func(novoSalario_func) {
        this.#Salario_func = novoSalario_func;
    }



    get Beneficios_func() {
        return this.#Beneficios_func;
    }

    set Beneficios_func(novosBeneficios_func) {
        this.#Beneficios_func = novosBeneficios_func;
    }



    get Escolaridade_func() {
        return this.#Escolaridade_func;
    }

    set Escolaridade_func(novaEscolaridade_func) {
        this.#Escolaridade_func = novaEscolaridade_func;
    }



     toJSON() {
        return {
            id: this.#id,
            Nome_func: this.#Nome_func,
            Data_nas_func: this.#Data_nas_func,
            Genero_func: this.#Genero_func,
            EstadoCivil_func: this.#EstadoCivil_func,
            RG_func: this.#RG_func,
            CEP_func: this.#CEP_func,
            Telefone_func: this.#Telefone_func,
            Email_func: this.#Email_func,
            Cargo_func: this.#Cargo_func,
            Salario_func: this.#Salario_func,
            Beneficios_func: this.#Beneficios_func,
            Escolaridade_func: this.#Escolaridade_func,
        };
    }

    async gravar() { 
        const novofuncionarioDAO = new funcionario_dao();
        await novofuncionarioDAO.gravar(this);
    };
    async atualizar() {
        const novofuncionarioDAO = new funcionario_dao();
        await novofuncionarioDAO.atualizar(this);
    };
    async excluir(){
        const novofuncionarioDAO = new funcionario_dao();
        await novofuncionarioDAO.excluir(this);
    };
    async consultar(){
        const novofuncionarioDAO = new funcionario_dao();
        return await novofuncionarioDAO.consultar(this);
    };
}