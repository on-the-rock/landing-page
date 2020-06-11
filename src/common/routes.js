import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../frontend/home'
import Market from "../frontend/market";
import QA from "../frontend/qa";
import AboutGame from "../frontend/aboutGame";

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/market' component={Market}/>
        <Route exact path='/qa' component={QA}/>
        <Route exact path='/about-game' component={AboutGame}/>
    </BrowserRouter>
);

export default App;
