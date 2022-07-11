import React from 'react';
import './App.css';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';

export default function App() {
    return (
        <div className="App">
            <h1>SPAs!</h1>
            <Home />
            <Plants />
            <Animals />
        </div>
    );
}
