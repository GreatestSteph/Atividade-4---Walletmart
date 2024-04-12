import { Button, Table } from "react-bootstrap";

export default function TabelaItens(props){ //lista os itens já cadastrados
    function excluirItens(Nome_prod){
        const novaListaItens = props.listaItens.filter(item => item.Nome_prod !== Nome_prod)
        props.setListaItens(novaListaItens);
    };

    function alterarItens(item){
        props.setItemSelecionado(item);
        props.setModoEdicaoItem(true);
        props.setExibirTabelaItens(false);
    };

    const estiloFormulario = {
        width: '100%',            
        padding: '10px',          
        color: 'black',
    };

    const estiloMenu = {
        botoesContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        botao: {
            width: '300px',
            margin: '10px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#000000',
            color: 'white',
            borderRadius: '10%',
            cursor: 'pointer',
            textDecoration: 'none',
        },
    };

    return(
        <div style={estiloFormulario}>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome produto</th>
                        <th>Data fabricação</th>
                        <th>Data vencimento</th>
                        <th>Tipo</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaItens?.map((item, index) => {
                            const dataFabFormatada = new Date(item.Data_fab).toLocaleDateString('pt-BR'); // Formatando a data de fabricação
                            const dataVenFormatada = new Date(item.Data_ven).toLocaleDateString('pt-BR'); // Formatando a data de vencimento                    
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Nome_prod}</td>
                                    <td>{dataFabFormatada}</td> {/* Exibindo a data de fabricação formatada */}
                                    <td>{dataVenFormatada}</td> {/* Exibindo a data de vencimento formatada */}
                                    <td>{item.Tipo_prod}</td>
                                    <td>{item.Preco_prod}</td>
                                    <td>{item.Qtde_prod}</td>
                                    <td>

                                    <Button variant="primary" onClick={() => {
                                        alterarItens(item);
                                    }}
                                    >Alterar</Button>

                                    <Button variant="danger"onClick={() => {
                                        excluirItens(item.Nome_prod);
                                    }}
                                    >Excluir</Button>
                                    
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <br/>
            <br/>
            <Button style={estiloMenu.botao} onClick={() => {
                props.setExibirTabelaItens(false);
                props.setModoEdicaoItem(false);
            }}>
                Cadastrar Novo Item
            </Button>
        </div>
    )
}
