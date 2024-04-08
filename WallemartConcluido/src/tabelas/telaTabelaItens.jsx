import { Button, Table } from "react-bootstrap";

export default function TabelaItens(props){
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
                        <th>Nome_prod</th>
                        <th>Data_fab</th>
                        <th>Data_ven</th>
                        <th>Tipo_prod</th>
                        <th>Preco_prod</th>
                        <th>Qtde_prod</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaItens?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Nome_prod}</td>
                                    <td>{item.Data_fab}</td>
                                    <td>{item.Data_ven}</td>
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
