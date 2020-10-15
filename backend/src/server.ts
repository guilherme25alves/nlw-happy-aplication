import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes); // Tem que ser sempre depois do express.json()

// Adicionando acesso as imagens como se fossem rotas
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Adicionando tratativa de erros genérica para nosso Server
app.use(errorHandler);

/*
 Avisando para o Express utilizar o padrão Json para lidar com dados 

 Rota = conjunto de tudo 
 Recurso = users

 Métooods HTTP = GET, POST, PUT, DELETE

 Parâmetros 
     - Query Params: http://localhost:3333/users?search=guilherme&page=2
     - Route Params: http://localhost:3333/users/1 (Identificar um recurso => update/delete por exemplo)
     - Body : Parâmetros que vão no corpo da requisição, geralmente de forms (POST/PUT), maior fluxo de dados 

app.get('/users/:id', (request, response) => {
      Query Params 
     console.log(request.query);

      Route Params (tem que ser adicionado na rota => /:id)
     console.log(request.params);

      Body 
     console.log(request.body);

     return response.json({ message: 'Olá, seja bem vindo a API!'});
});
*/

app.get('/users', (request, response) => {
    return response.json({ message: 'Olá, seja bem vindo a API!'});
});






app.listen(3333);



/*
     Formas de manipulação de banco de dados 

          - Driver nativo => sqlite3 , permite executar queries nativas pela linguagem,
               no mesmo formato do banco de dados, sem abstrair por exemplos de outros bancos, tendo que fazer manutenção da querie em
               uma futura troca


          - Query Builder => por exemplo o Knex.js => Escrevemos as nossas queries com o JS, com a "linguagem" do query builder,
               um construtor de querie que vai converter para uma querie que o SQL vai entender e executar


          - ORM (Object Relational Mapping) => Uma classe que simboliza uma tabela no banco de dados, sintaxe parecida com a da QueryBuilder,
            cada linha retornada vai representar um objeto ORM da tabela do banco, ex dos Beans do Java
             tb_user 
             class User 
             3 rows tb_user => 3 instâncias do objeto da classe User

*/