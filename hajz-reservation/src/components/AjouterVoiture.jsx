import React, { useState } from 'react';

const AjouterVoiture = ({ onAdd }) => {
    const [nouvelleVoiture, setNouvelleVoiture] = useState({
        Marque: '', TypeCarburant: '', PrixLocation: '', image: ''
    });

    const handleChange = (e) => {
        setNouvelleVoiture({ ...nouvelleVoiture, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ ...nouvelleVoiture, id: `v${Date.now()}` });
        setNouvelleVoiture({ Marque: '', TypeCarburant: '', PrixLocation: '', image: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-row">
                <div className="col">
                    <input className="form-control" name="Marque" value={nouvelleVoiture.Marque} onChange={handleChange} placeholder="Marque" required />
                </div>
                <div className="col">
                    <input className="form-control" name="TypeCarburant" value={nouvelleVoiture.TypeCarburant} onChange={handleChange} placeholder="Type de Carburant" required />
                </div>
                <div className="col">
                    <input className="form-control" name="PrixLocation" value={nouvelleVoiture.PrixLocation} onChange={handleChange} placeholder="Prix de Location" required />
                </div>
                <div className="col">
                    <input className="form-control" name="image" value={nouvelleVoiture.image} onChange={handleChange} placeholder="Image" required />
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </div>
            </div>
        </form>
    );
};

export default AjouterVoiture;
