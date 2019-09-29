import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../frontend/home'
import Market from "../frontend/market";
import QA from "../frontend/qa";

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/market' component={Market}/>
        <Route exact path='/qa' component={QA}/>
    </BrowserRouter>
);

export default App;
