import React from 'react';
//1. import HashRouter, Route, Link from 'react-router-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

//imported components
import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../AnimalDetail/AnimalDetail.jsx';

export default function App() {
    return (
        //2. Create a <Router> element <Router></Router>
        //3. Create a <Route path="/"> for each component
        //4. Include exact in <Route path="/">
        //5. Import Link, and Create Links for each component: <li></li>

        //6. Create new <Route path="/animals/:id">
        //7. Create new AnimalDetails component
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

                <Route path="/plants" exact>
                    <Plants />
                </Route>

                <Route path="/animals" exact>
                    <Animals />
                </Route>

                <Route path="/animals/:id" exact>
                    <AnimalDetail />
                </Route>
            </div>
        </Router>
    );
}
