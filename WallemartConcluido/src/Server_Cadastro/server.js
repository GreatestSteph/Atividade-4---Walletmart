import express from 'express';
import cors from 'cors';
import rotasdofuncionario from './rotas/rotasdofuncionario.js';
import rotasdoitem from './rotas/rotasdoitem.js';
import funcionarioclasse from "./modelo/funcionario.js"
import itemclasse from './modelo/item.js';

const localizaçaohostname = 'localhost'; 
const numeroporta = 3001; //numero porta
const aplicacao = express();  

aplicacao.use(express.urlencoded({extended: true})); 
aplicacao.use(cors()); // Habilitando o CORS para todas as origens

aplicacao.get('/', (requisicao, resposta) => { 
    resposta.redirect('http://localhost:3000/'); 
});

aplicacao.get('/login', (requisicao, resposta) => { 
    resposta.redirect('http://localhost:3000/'); 
});

aplicacao.listen(numeroporta, localizaçaohostname, () => {
    console.log('O servidor está funcionando em ' + localizaçaohostname + ', na porta: ' + numeroporta); 
});

aplicacao.use(express.json());
aplicacao.use('/funcionariobackend', rotasdofuncionario)
aplicacao.use('/itembackend', rotasdoitem)

//ate aqui ta ok
//-------------------------------------------------------------------------------------------------------


//testar se o banco de dados está funcionando

// funcionario adicionado
//const funcionario = new funcionarioclasse(3, 'Maria Oliveira', '1985-10-20', 'Feminino', 'Casado(a)', '987654321', '54321-876', '(11) 98765-4321', 'maria@example.com', 'Gerente de Vendas', 7000.00, 'Plano de saúde', 'Pós-graduação');

// item adicionado
//const item = new itemclasse(3, 'Iphone', '2024-01-05', '2055-01-05', 'Tecnológico', 1500.00, 'Entre 10 itens');







//gravar funcionando 

//funcionario.gravar().then(() => {
//    console.log('Funcionário gravado com sucesso');
//}).catch((erro) => {
//    console.log('Não foi possível gravar o funcionário no banco de dados:' + erro.message)
//})

//item.gravar().then(() => {
//    console.log('Item gravado com sucesso');
//}).catch((erro) => {
//    console.log('Não foi possível gravar o item no banco de dados:' + erro.message)
//})








//atualizar funcionando

//funcionario.atualizar().then(() =>{
//    console.log('Funcionário atualizado com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível atualizar o usuário no banco de dados:' + erro.message)
//})

//item.atualizar().then(() =>{
//    console.log('Item atualizado com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível atualizar o usuário no banco de dados:' + erro.message)
//})






//exclui funcionario funcionando

//funcionario.excluir().then(() =>{
//    console.log('Funcionário excluido com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível excluir o funcionário no banco de dados:' + erro.message)
//})

//item.excluir().then(() =>{
//    console.log('Item excluido com sucesso!');
//}).catch((erro) => {
 //   console.log('Não foi possível excluir o item no banco de dados:' + erro.message)
//})









//consulta funcionando

//funcionario.consultar().then((listaFuncionarios) => {
//   for (const funcionario of listaFuncionarios){
//        console.log(funcionario.toJSON())
//    }
//}).catch((erro) => {
//    console.log('Não foi possível consultar o funcionário!' + erro.message);
//})

//item.consultar().then((listaItens) => {
//   for (const item of listaItens){
//        console.log(item.toJSON())
//    }
//}).catch((erro) => {
//    console.log('Não foi possível consultar o item!' + erro.message);
//})
