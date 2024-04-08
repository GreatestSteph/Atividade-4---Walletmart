import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl, FormLabel } from 'react-bootstrap';
import { useContext, useState } from 'react';
import ContextoUsuario from '../contexto/contexto.jsx'

export default function WallemartLogin(props) {
    const estiloMenu = {
        conteudo: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '65vh',
        },
        botoesContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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

    const [Usuario, setUsuario] = useContext(ContextoUsuario);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function verificarUsuario(){
        if (nomeUsuario === 'Administrador' && senha === 'Administrador'){
            setUsuario({
                nome: nomeUsuario,
                logado: true
            })
        }
        else if (nomeUsuario === 'Funcionário' && senha === 'Funcionario'){
            setUsuario({
                nome: nomeUsuario,
                logado: true
            })
        }
    }


    return (
        <div style={estiloMenu.conteudo}>
            <div style={estiloMenu.botoesContainer}>
                <Form>
                    <Form.Group>
                        <FormLabel>Usuário:</FormLabel>
                        <FormControl 
                            type="text"
                            placeholder='Digite seu usuario'
                            id="nomeUsuario"
                            name="nomeUsuario"
                            value={nomeUsuario}
                            onChange={(e) => setNomeUsuario(e.target.value)}
                        ></FormControl>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <FormLabel>Senha:</FormLabel>
                        <FormControl
                            type="password"
                            placeholder='Digite sua senha'
                            id="senha"
                            name="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            ></FormControl>
                    </Form.Group>
                    <br/>
                    <Button 
                    variant="primary" 
                    type="button"
                    onClick={() => {
                        verificarUsuario();
                    }}
                    style={estiloMenu.botao}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}