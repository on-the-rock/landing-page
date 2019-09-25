import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../frontend/home'
import Market from "../frontend/market";
import PreRegister from "../frontend/preRegister";

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/market' component={Market}/>
        <Route exact path='/pre-register' component={PreRegister}/>
    </BrowserRouter>
);

export default App;
