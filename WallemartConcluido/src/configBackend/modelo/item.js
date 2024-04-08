import ItemDAO from "../persistencia/itemDAO";

export default class Item {
    #codigo;
    #nomeProd;
    #dataFab;
    #dataVen;
    #tipoProd;
    #precoProd;
    #qtdeProd;

    constructor(codigo = 0, nomeProd = "", dataFab = "", dataVen = "", tipoProd = "", precoProd = "", qtdeProd = 0) {
        this.#codigo = codigo;
        this.#nomeProd = nomeProd;
        this.#dataFab = dataFab;
        this.#dataVen = dataVen;
        this.#tipoProd = tipoProd;
        this.#precoProd = precoProd;
        this.#qtdeProd = qtdeProd;
    }

    get codigo() {
        return this.#codigo;
    }
    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get nomeProd() {
        return this.#nomeProd;
    }

    set nomeProd(novoNomeProd) {
        this.#nomeProd = novoNomeProd;
    }

    get dataFab() {
        return this.#dataFab;
    }

    set dataFab(novaDataFab) {
        this.#dataFab = novaDataFab;
    }

    get dataVen() {
        return this.#dataVen;
    }

    set dataVen(novaDataVen) {
        this.#dataVen = novaDataVen;
    }

    get tipoProd() {
        return this.#tipoProd;
    }

    set tipoProd(novoTipoProd) {
        this.#tipoProd = novoTipoProd;
    }

    get precoProd() {
        return this.#precoProd;
    }

    set precoProd(novoPrecoProd) {
        this.#precoProd = novoPrecoProd;
    }

    get qtdeProd() {
        return this.#qtdeProd;
    }

    set qtdeProd(novaQtdeProd) {
        this.#qtdeProd = novaQtdeProd;
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            nomeProd: this.#nomeProd,
            dataFab: this.#dataFab,
            dataVen: this.#dataVen,
            tipoProd: this.#tipoProd,
            precoProd: this.#precoProd,
            qtdeProd: this.#qtdeProd,
        }
    }

    async gravar() {
        const itemDAO = new ItemDAO();
        await itemDAO.gravar(this);
    }

    async excluir() {
        const itemDAO = new ItemDAO();
        await itemDAO.excluir(this);
    }

    async alterar() {
        const itemDAO = new ItemDAO();
        await itemDAO.atualizar(this);
    }

    async consultar(termo) {
        const itemDAO = new ItemDAO();
        return await itemDAO.consultar(termo);
    }
}
