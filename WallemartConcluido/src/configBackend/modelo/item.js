const ItemDAO = require("../persistencia/itemDAO");

class Item {
    #id;
    #Nome_prod;
    #Data_fab;
    #Data_ven;
    #Tipo_prod;
    #Preco_prod;
    #Qtde_prod;

    constructor(id, Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod) {
        this.#id = id;
        this.#Nome_prod = Nome_prod;
        this.#Data_fab = Data_fab;
        this.#Data_ven = Data_ven;
        this.#Tipo_prod = Tipo_prod;
        this.#Preco_prod = Preco_prod;
        this.#Qtde_prod = Qtde_prod;
    }

    get id() {
        return this.#id;
    }
    set id(novoid) {
        this.#id = novoid;
    }

    get Nome_prod() {
        return this.#Nome_prod;
    }

    set Nome_prod(novoNome_prod) {
        this.#Nome_prod = novoNome_prod;
    }

    get Data_fab() {
        return this.#Data_fab;
    }

    set Data_fab(novaData_fab) {
        this.#Data_fab = novaData_fab;
    }

    get Data_ven() {
        return this.#Data_ven;
    }

    set Data_ven(novaData_ven) {
        this.#Data_ven = novaData_ven;
    }

    get Tipo_prod() {
        return this.#Tipo_prod;
    }

    set Tipo_prod(novoTipo_prod) {
        this.#Tipo_prod = novoTipo_prod;
    }

    get Preco_prod() {
        return this.#Preco_prod;
    }

    set Preco_prod(novoPreco_prod) {
        this.#Preco_prod = novoPreco_prod;
    }

    get Qtde_prod() {
        return this.#Qtde_prod;
    }

    set Qtde_prod(novaQtde_prod) {
        this.#Qtde_prod = novaQtde_prod;
    }

    toJSON() {
        return {
            id: this.#id,
            Nome_prod: this.#Nome_prod,
            Data_fab: this.#Data_fab,
            Data_ven: this.#Data_ven,
            Tipo_prod: this.#Tipo_prod,
            Preco_prod: this.#Preco_prod,
            Qtde_prod: this.#Qtde_prod,
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

    async atualizar() {
        const itemDAO = new ItemDAO();
        await itemDAO.atualizar(this);
    }

    async consultar(termo) {
        const itemDAO = new ItemDAO();
        return await itemDAO.consultar(termo);
    }
}

module.exports = Item;