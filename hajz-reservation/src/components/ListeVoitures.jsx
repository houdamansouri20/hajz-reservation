import React, { useState } from 'react';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const ListeVoitures = () => {
    const [voitures, setVoitures] = useState([
        { id: 'v1', Marque: 'AUDI RS Q8S', TypeCarburant: 'Diesel', PrixLocation: 800, image: 'img4.jpg' },
        { id: 'v2', Marque: 'Peugeot 208', TypeCarburant: 'Essence', PrixLocation: 400, image: 'img2.jpg' },
    ]);

    const ajouterVoiture = (voiture) => {
        setVoitures([...voitures, voiture]);
    };

    const supprimerVoiture = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?")) {
            setVoitures(voitures.filter(voiture => voiture.id !== id));
        }
    };

    return (
        <div>
            <AjouterVoiture onAdd={ajouterVoiture} />
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Marque</th>
                        <th>Type de Carburant</th>
                        <th>Prix de Location (MAD)</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {voitures.map(voiture => (
                        <Voiture key={voiture.id} voiture={voiture} onDelete={supprimerVoiture} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListeVoitures;
