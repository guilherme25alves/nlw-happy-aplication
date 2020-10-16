import axios from 'axios';

const api = axios.create({
     baseURL: 'http://192.168.0.43:3333', // temos que colocar o IP da nossa máquina na rede, pois o nosso smartphone por ex não é o nosso localhost
});

export default api;
