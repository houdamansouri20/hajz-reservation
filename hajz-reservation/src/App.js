import React from 'react';
import ListeVoitures from './components/ListeVoitures';
import './App.css';

function App() {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Gestion des Voitures de Location</h1>
            <ListeVoitures />
        </div>
    );
}

export default App;
