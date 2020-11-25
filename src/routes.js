
import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Estudante from './pages/Estudante';
import ListarEstudante from './pages/ListarEstudante';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/home" component={Homer}/>
        <Route path="/estudante" component={Estudante}/>
        <Route path="/listarestudante" component={ListarEstudante}/> 
        </Switch>
        </BrowserRouter>
     );
    } 