import React from 'react';
//1. import HashRouter, Route, Link from 'react-router-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';

export default function App() {
    return (
        //2. Create a <Router> element <Router></Router>
        //3. Create a <Route path="/"> for each component
        //4. Include exact in <Route path="/">
        //5. Import Link, and Create Links for each component: <li></li>
        <Router>
            <div className="App">
                <h1>SPAs!</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/plants">Plants</Link>
                    </li>
                    <li>
                        <Link to="/animals">Animals</Link>
                    </li>
                </ul>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/plants">
                    <Plants />
                </Route>
                <Route path="/animals">
                    <Animals />
                </Route>
            </div>
        </Router>
    );
}
