import FormularioItens from "../formulario_componente/formularioitens";
import TabelaItens from "../tabelas/telaTabelaItens";
import React, { useState, useEffect } from 'react';
import urlBaseItem from "../uti/configitem"

export default function ExibirCadastroItens(props) {
    
    const [exibirTabelaItens, setExibirTabelaItens] = useState(true);
    const [listaItens, setListaItens] = useState([]);
    const [itemSelecionado, setItemSelecionado] = useState({});
    const [modoEdicaoItem, setModoEdicaoItem] = useState(false);

    useEffect(() => { //ou aqui
        fetch(urlBaseItem,{method:"GET"})
        .then(resposta_item => resposta_item.json())
        .then(backend_item => setListaItens(backend_item));
    }, []);

    if (exibirTabelaItens) {
        return (
            <div>
                <h1>Itens Cadastrados</h1>
                <br/>
                <TabelaItens 
                    listaItens={listaItens} 
                    setListaItens={setListaItens}
                    setExibirTabelaItens={setExibirTabelaItens}
                    setItemSelecionado={setItemSelecionado}
                    setModoEdicaoItem={setModoEdicaoItem}
                />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Itens Cadastrados</h1>
                <br/>
                <FormularioItens 
                    setExibirTabelaItens={setExibirTabelaItens}
                    listaItens={listaItens}
                    setListaItens={setListaItens}
                    itemSelecionado={itemSelecionado}
                    setModoEdicaoItem={setModoEdicaoItem}
                    modoEdicaoItem={modoEdicaoItem}
                />
            </div>
        )
    }
}
