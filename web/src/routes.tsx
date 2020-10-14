import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
     return (
          <BrowserRouter>
               <Switch>
                    <Route path="/" exact component={Landing} /> 
                    <Route path="/app" component={OrphanagesMap} />
               </Switch>               
          </BrowserRouter>
     )
}

export default Routes;


/* exact dá primeira rota pro react-router-dom fazer a comparação estritamente igual o valor da rota, ou seja, a rota de baixo 
   que também contém o "/", não vai ser chamado, caso a url no navegador seja somente "/"

   Switch => garante que apenas uma rota será chamada por vez 

*/