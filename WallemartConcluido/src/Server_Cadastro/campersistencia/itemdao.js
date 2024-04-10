import itemclasse from '../modelo/item.js'; //ok //usa a classe de objetos
import conecta from "./conectar.js"; //ok

export default class item_dao {
    async gravar(item) {
        if (item instanceof itemclasse) {
            const conexao = await conecta();
            const sql = "INSERT INTO item (Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod) VALUES (?, ?, ?, ?, ?, ?)";
            const parametros = [item.Nome_prod, item.Data_fab, item.Data_ven, item.Tipo_prod, item.Preco_prod, item.Qtde_prod];
            const resultado = await conexao.query(sql, parametros);
            item.id = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async atualizar(item) {
        if (item instanceof itemclasse) {
            const conexao = await conecta();
            const sql = "UPDATE item SET Nome_prod = ?, Data_fab = ?, Data_ven = ?, Tipo_prod = ?, Preco_prod = ?, Qtde_prod = ? WHERE id = ?";
            const parametros = [item.Nome_prod, item.Data_fab, item.Data_ven, item.Tipo_prod, item.Preco_prod, item.Qtde_prod, item.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async excluir(item) {
        if (item instanceof itemclasse) {
            const conexao = await conecta();
            const sql = "DELETE FROM item WHERE id = ?";
            const parametros = [item.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar() {
        let listaItens = [];
        const conexao = await conecta();
        const sql = 'SELECT * FROM item ORDER BY Nome_prod';
        const [rows, fields] = await conexao.query(sql);
    
        for (const registro of rows) {
            const item = new itemclasse(registro.id, registro.Nome_prod, registro.Data_fab, registro.Data_ven, registro.Tipo_prod, registro.Preco_prod, registro.Qtde_prod);
            listaItens.push(item);
        }
        return listaItens;
    }    
}
