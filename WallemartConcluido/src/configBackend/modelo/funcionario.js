import FuncionarioDAO from "../persistencia/funcionarioDAO";

export default class Funcionario {
    #codigo;
    #nomeFunc;
    #dataNasFunc;
    #generoFunc;
    #estadoCivilFunc;
    #rgFunc;
    #cepFunc;
    #telefoneFunc;
    #emailFunc;
    #cargoFunc;
    #salarioFunc;
    #beneficiosFunc;
    #escolaridadeFunc;

    constructor(codigo = 0, nomeFunc = "", dataNasFunc = "", generoFunc = "", estadoCivilFunc = "", rgFunc = "", cepFunc = "", telefoneFunc = "", emailFunc = "", cargoFunc = "", salarioFunc = "", beneficiosFunc = "", escolaridadeFunc = "") {
        this.#codigo = codigo;
        this.#nomeFunc = nomeFunc;
        this.#dataNasFunc = dataNasFunc;
        this.#generoFunc = generoFunc;
        this.#estadoCivilFunc = estadoCivilFunc;
        this.#rgFunc = rgFunc;
        this.#cepFunc = cepFunc;
        this.#telefoneFunc = telefoneFunc;
        this.#emailFunc = emailFunc;
        this.#cargoFunc = cargoFunc;
        this.#salarioFunc = salarioFunc;
        this.#beneficiosFunc = beneficiosFunc;
        this.#escolaridadeFunc = escolaridadeFunc;
    }

    get codigo() {
        return this.#codigo;
    }
    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nomeFunc() {
        return this.#nomeFunc;
    }

    set nomeFunc(novoNomeFunc) {
        this.#nomeFunc = novoNomeFunc;
    }

    get dataNasFunc() {
        return this.#dataNasFunc;
    }

    set dataNasFunc(novaDataNasFunc) {
        this.#dataNasFunc = novaDataNasFunc;
    }

    get generoFunc() {
        return this.#generoFunc;
    }

    set generoFunc(novoGeneroFunc) {
        this.#generoFunc = novoGeneroFunc;
    }

    get estadoCivilFunc() {
        return this.#estadoCivilFunc;
    }

    set estadoCivilFunc(novoEstadoCivilFunc) {
        this.#estadoCivilFunc = novoEstadoCivilFunc;
    }

    get rgFunc() {
        return this.#rgFunc;
    }

    set rgFunc(novoRgFunc) {
        this.#rgFunc = novoRgFunc;
    }

    get cepFunc() {
        return this.#cepFunc;
    }

    set cepFunc(novoCepFunc) {
        this.#cepFunc = novoCepFunc;
    }

    get telefoneFunc() {
        return this.#telefoneFunc;
    }

    set telefoneFunc(novoTelefoneFunc) {
        this.#telefoneFunc = novoTelefoneFunc;
    }

    get emailFunc() {
        return this.#emailFunc;
    }

    set emailFunc(novoEmailFunc) {
        this.#emailFunc = novoEmailFunc;
    }

    get cargoFunc() {
        return this.#cargoFunc;
    }

    set cargoFunc(novoCargoFunc) {
        this.#cargoFunc = novoCargoFunc;
    }

    get salarioFunc() {
        return this.#salarioFunc;
    }

    set salarioFunc(novoSalarioFunc) {
        this.#salarioFunc = novoSalarioFunc;
    }

    get beneficiosFunc() {
        return this.#beneficiosFunc;
    }

    set beneficiosFunc(novosBeneficiosFunc) {
        this.#beneficiosFunc = novosBeneficiosFunc;
    }

    get escolaridadeFunc() {
        return this.#escolaridadeFunc;
    }

    set escolaridadeFunc(novaEscolaridadeFunc) {
        this.#escolaridadeFunc = novaEscolaridadeFunc;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nomeFunc: this.#nomeFunc,
            dataNasFunc: this.#dataNasFunc,
            generoFunc: this.#generoFunc,
            estadoCivilFunc: this.#estadoCivilFunc,
            rgFunc: this.#rgFunc,
            cepFunc: this.#cepFunc,
            telefoneFunc: this.#telefoneFunc,
            emailFunc: this.#emailFunc,
            cargoFunc: this.#cargoFunc,
            salarioFunc: this.#salarioFunc,
            beneficiosFunc: this.#beneficiosFunc,
            escolaridadeFunc: this.#escolaridadeFunc,
        }
    }

    async gravar() {
        const funcionarioDAO = new FuncionarioDAO();
        await funcionarioDAO.gravar(this);
    }

    async excluir() {
        const funcionarioDAO = new FuncionarioDAO();
        await funcionarioDAO.excluir(this);
    }

    async alterar() {
        const funcionarioDAO = new FuncionarioDAO();
        await funcionarioDAO.atualizar(this);
    }

    async consultar(termo) {
        const funcionarioDAO = new FuncionarioDAO();
        return await funcionarioDAO.consultar(termo);
    }
}
