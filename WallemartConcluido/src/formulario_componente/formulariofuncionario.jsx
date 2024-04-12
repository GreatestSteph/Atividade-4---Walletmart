import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import urlBaseFuncionario from '../uti/configfuncionario';


export default function FormularioFuncionarios(props) {
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

    const [funcionario, setFuncionario] = useState(props.modoEdicaoFuncionario ? props.funcionarioSelecionado : {
        Nome_func: "",
        Data_nas_func: "",
        Genero_func: "",
        EstadoCivil_func: "",
        RG_func: "",
        CEP_func: "",
        Telefone_func: "",
        Email_func: "",
        Cargo_func: "",
        Salario_func: "",
        Beneficios_func: "",
        Escolaridade_func: "",
    });

    //ta funcionando
    async function enviarFuncionarioBackend() {
        try {
            const resposta = await fetch(urlBaseFuncionario, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(funcionario),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_funcionario = await resposta.json();
            alert(resposta_funcionario.mensagem);
            return true;
        } catch (erro) {
            alert('Não foi possível estabelecer uma comunicação com o backend: ' + erro.message);
            return false;
        }
    }
    
    async function alterarFuncionarioBackend(){
        try {
            const resposta = await fetch(urlBaseFuncionario, {
                method: 'PUTPATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(funcionario),
            });
    
            if (!resposta.ok) {
                throw new Error('Erro ao enviar dados para o servidor');
            }
    
            const resposta_funcionario = await resposta.json();
            alert(resposta_funcionario.mensagem);
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
            if (!props.modoEdicaoFuncionario) {
                if (enviarFuncionarioBackend()){
                    props.setListaFuncionarios([...props.listaFuncionarios, funcionario]);
                } 
            }
            else{
                const novaListaFuncionarios = props.listaFuncionarios.filter(funcionario => funcionario.Nome_func !== props.funcionarioSelecionado.Nome_func);
                props.setListaFuncionarios([...novaListaFuncionarios, funcionario]);   
            }
            props.setExibirTabelaFuncionarios(true);   
        }
    }

    function manipularMudança(evento) {
        const componente = evento.currentTarget;
        setFuncionario({ ...funcionario, [componente.name]: componente.value });
    }


    return (
        <div style={estiloFormulario}>
            <h3>Cadastre um Funcionário!</h3>
            <br/>
            <Form noValidate validated={valido} onSubmit={manipularEnvio}>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="campo1">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control type="text" placeholder="Nome Completo" required value={funcionario.Nome_func} id="Nome_func" name="Nome_func" onChange={manipularMudança}/>
                    <Form.Control.Feedback type='invalid'>Insira o nome completo e corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo2">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="Data de Nascimento" required value={funcionario.Data_nas_func} onChange={manipularMudança} id="Data_nas_func" name="Data_nas_func"/>
                    <Form.Control.Feedback type='invalid'>Insira sua data de nascimento correta!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo3">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control as="select" required value={funcionario.Genero_func} onChange={manipularMudança} id="Genero_func" name="Genero_func">
                        <option value="">Selecione...</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione seu sexo!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo4">
                    <Form.Label>Estado Civil</Form.Label>
                    <Form.Control as="select" required value={funcionario.EstadoCivil_func} onChange={manipularMudança} id="EstadoCivil_func" name="EstadoCivil_func">
                        <option value="">Selecione...</option>
                        <option>Solteiro(a)</option>
                        <option>Casado(a)</option>
                        <option>Divorciado(a)</option>
                        <option>Viúvo(a)</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione seu estado civil!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo6">
                    <Form.Label>RG</Form.Label>
                    <Form.Control type="text" placeholder="RG" required value={funcionario.RG_func} onChange={manipularMudança} id="RG_func" name="RG_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o RG corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo7">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="CEP" required value={funcionario.CEP_func} onChange={manipularMudança} id="CEP_func" name="CEP_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o CEP corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo8">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="tel" placeholder="Telefone" required value={funcionario.Telefone_func} onChange={manipularMudança} id="Telefone_func" name="Telefone_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o telefone corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo9">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" required value={funcionario.Email_func} onChange={manipularMudança} id="Email_func" name="Email_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o email corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo10">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control type="text" placeholder="Cargo" required value={funcionario.Cargo_func} onChange={manipularMudança} id="Cargo_func" name="Cargo_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o cargo corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo11">
                    <Form.Label>Salário</Form.Label>
                    <Form.Control type="text" placeholder="Salário" required value={funcionario.Salario_func} onChange={manipularMudança} id="Salario_func" name="Salario_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o salário corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo12">
                    <Form.Label>Benefícios</Form.Label>
                    <Form.Control type="text" placeholder="Benefícios" required value={funcionario.Beneficios_func} onChange={manipularMudança} id="Beneficios_func" name="Beneficios_func"/>
                    <Form.Control.Feedback type='invalid'>Insira o benefício corretamente!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="campo13">
                    <Form.Label>Escolaridade</Form.Label>
                    <Form.Control as="select" required value={funcionario.Escolaridade_func} onChange={manipularMudança} id="Escolaridade_func" name="Escolaridade_func">
                        <option value="">Selecione...</option>
                        <option>Fundamental</option>
                        <option>Médio</option>
                        <option>Superior</option>
                        <option>Pós-graduação</option>
                        <option>Doutorado</option>
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>Selecione sua escolaridade!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <br/>
            <Button type="submit" style={estiloMenu.botao}> {props.modoEdicaoFuncionario ? "Salvar" : "Enviar"}</Button>

            <Button style={estiloMenu.botaovoltar} onClick={() => {
                props.setModoEdicaoFuncionario(false);
                props.setExibirTabelaFuncionarios(true);
            }}>Voltar</Button>

        </Form>
        </div>       
    );
}