import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import urlBaseItem from '../uti/configitem';

export default function FormularioItens(props) {
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
            width: '100px',
            margin: '10px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#3cb371',
            color: 'white',
            borderRadius: '10%',
            cursor: 'pointer',
            textDecoration: 'none',
        },
        botaovoltar: {
            width: '100px',
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


    const [item, setItem] = useState(props.modoEdicaoItem ? props.itemSelecionado : {
        Nome_prod: "",
        Data_fab: "",
        Data_ven: "",
        Tipo_prod: "",
        Preco_prod: "",
        Qtde_prod: "",
    });

    //ta funcionando
    async function enviarItemBackend() {
        try {
            const resposta = await fetch(urlBaseItem, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_item = await resposta.json();
            alert(resposta_item.mensagem);
            return true;
        } catch (erro) {
            alert('Não foi possível estabelecer uma comunicação com o backend: ' + erro.message);
            return false;
        }
    }
    
    async function alterarItemBackend(){
        try {
            const resposta = await fetch(urlBaseItem, {
                method: 'PUTPATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_item = await resposta.json();
            alert(resposta_item.mensagem);
            return true;
        } catch (erro) {
            alert('Não foi possível estabelecer uma comunicação com o backend: ' + erro.message);
            return false;
        }
    }

    const [valido, setValidado] = useState(false);

    function manipularEnvio(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        const form = evento.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
        } else {
            setValidado(false);
            if (!props.modoEdicaoItem){
                if (enviarItemBackend()){
                    props.setListaItens([...props.listaItens, item]);
                } else {
                    props.setListaItens([...props.listaItens, item]);
                }
            }
            else{
                const novaListaItens = props.listaItens.filter(item => item.Nome_prod !== props.itemSelecionado.Nome_prod);
                props.setListaItens([...novaListaItens, item]);   
            }
            props.setExibirTabelaItens(true);   
        }
    }

    function manipularMudança(evento) {
        const componente = evento.currentTarget;
        setItem({ ...item, [componente.name]: componente.value });
    }

    return (
        <div style={estiloFormulario}>
            <h3>Cadastre um Item!</h3>
            <br/>
            <Form noValidate validated={valido} onSubmit={manipularEnvio}>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="campo1">
                    <Form.Label>Nome do produto</Form.Label>
                    <Form.Control type="text" placeholder="Nome do produto" required value={item.Nome_prod} id="Nome_prod" name="Nome_prod" onChange={manipularMudança}/>
                    <Form.Control.Feedback type='invalid'>Insira o nome do produto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo2">
                    <Form.Label>Data de Fabricação do Produto</Form.Label>
                    <Form.Control type="date" placeholder="Data de Fabricação" required value={item.Data_fab} onChange={manipularMudança} id="Data_fab" name="Data_fab"/>
                    <Form.Control.Feedback type='invalid'>Insira sua data de fabricação correta!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo2">
                    <Form.Label>Data de Vencimento do Produto</Form.Label>
                    <Form.Control type="date" placeholder="Data de Vencimento" required value={item.Data_ven} onChange={manipularMudança} id="Data_ven" name="Data_ven"/>
                    <Form.Control.Feedback type='invalid'>Insira sua data de vencimento correta!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo3">
                    <Form.Label>Tipo de Produto</Form.Label>
                    <Form.Control as="select" required value={item.Tipo_prod} onChange={manipularMudança} id="Tipo_prod" name="Tipo_prod">
                        <option value="">Selecione...</option>
                        <option>Beleza</option>
                        <option>Tecnológico</option>
                        <option>Vestimenta</option>
                        <option>Acessórios</option>
                        <option>Higienico</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione o tipo de produto!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo11">
                    <Form.Label>Preço por item</Form.Label>
                    <Form.Control type="text" placeholder="Preço" required value={item.Preco_prod} onChange={manipularMudança} id="Preco_prod" name="Preco_prod"/>
                    <Form.Control.Feedback type='invalid'>Insira o preço corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo13">
                    <Form.Label>Quantidade de produtos</Form.Label>
                    <Form.Control as="select" required value={item.Qtde_prod} onChange={manipularMudança} id="Qtde_prod" name="Qtde_prod">
                        <option value="">Selecione...</option>
                        <option>Entre 10 itens</option>
                        <option>Entre 50 itens</option>
                        <option>Entre 100 itens</option>
                        <option>Entre 500 itens</option>
                        <option>Entre 1000 itens</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione a quantidade de itens!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <br/>
            <Button type="submit" style={estiloMenu.botao}> {props.modoEdicaoItem ? "Salvar" : "Enviar"}</Button> 

            <Button style={estiloMenu.botaovoltar} onClick={() => {
                props.setModoEdicaoItem(false);
                props.setExibirTabelaItens(true);
            }}>Voltar</Button>

        </Form>
        </div> 
    );

}