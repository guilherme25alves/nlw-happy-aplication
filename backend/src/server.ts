import express from 'express';

const app = express();

/*
 Avisando para o Express utilizar o padrão Json para lidar com dados 
app.use(express.json());

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
