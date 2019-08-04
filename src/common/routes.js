import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../frontend/home/index'

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home}/>
    </BrowserRouter>
);

export default App;
