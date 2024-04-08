import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ContextoUsuario from '../contexto/contexto';

export default function MenuWalleMart(props) {
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
        width: '600px',
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

  return (
    <div style={estiloMenu.conteudo}>
      <div style={estiloMenu.botoesContainer}>
      <h1>Bem vindo(a) ao Gerenciamento do WalletMart!</h1>
      <h5>{props?.texto}</h5><span>Você é: {Usuario.nome}</span>
        <br/>
        <br/>
        <Link to="/cadastrofuncionario" style={estiloMenu.botao}>
          Cadastrar Funcionário
        </Link>
        <br/>
        <Link to="/cadastroitens" style={estiloMenu.botao}>
          Cadastrar Itens
        </Link>
      </div>
    </div>
  );
}
