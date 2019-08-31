import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../frontend/home'
import Market from "../frontend/market";

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/market' component={Market}/>
    </BrowserRouter>
);

export default App;
