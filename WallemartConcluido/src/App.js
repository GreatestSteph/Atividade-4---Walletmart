import React, { useState } from 'react';

import Cabecalho from "./cabecalho_componente/cabecalho.jsx";
import MenuWalleMart from "./menu_componente/menu_wallemart.jsx";

import ContextoUsuario from "./contexto/contexto.jsx";
import WallemartLogin from "./menu_componente/login_wallemart.jsx";

import ExibirCadastroFuncionarios from "./tabelas/funcionariosCadastrados.jsx";
import ExibirCadastroItens from "./tabelas/itensCadastrados.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Usuario, setUsuario] = useState({
    nome:'',
    logado: false
  });

  if (!Usuario.logado) {
    return (
      <ContextoUsuario.Provider value={[Usuario, setUsuario] }>
        <Cabecalho/>
        <WallemartLogin/>
      </ContextoUsuario.Provider>  
    );
  }

  return (
    <div className="App">
      <ContextoUsuario.Provider value={[Usuario, setUsuario] }>
        <BrowserRouter>
          <Routes>
            <Route path="cadastrofuncionario" element={  
              <div>
                <br/>
                <Cabecalho/>
                <br/>
                <br/>
                <br/>
                <ExibirCadastroFuncionarios/> 
              </div>
            }/>

            <Route path="/" element={ 
              <div>
                <br/>
                <Cabecalho/>
                <br/>
                <MenuWalleMart/>
              </div>
            }/>

            <Route path="cadastroitens" element={  
              <div>
                <br/>
                <Cabecalho/>
                <br/>
                <br/>
                <br/>
                <ExibirCadastroItens/> 
              </div>
            }/>
          </Routes>
        </BrowserRouter>
      </ContextoUsuario.Provider>
    </div>
  );
}

export default App;
