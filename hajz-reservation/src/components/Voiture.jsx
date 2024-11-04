import React from 'react';

const Voiture = ({ voiture, onDelete }) => (
    <tr>
        <td>{voiture.Marque}</td>
        <td>{voiture.TypeCarburant}</td>
        <td>{voiture.PrixLocation} MAD</td>
        <td><img src={voiture.image} alt={voiture.Marque} width="100" /></td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(voiture.id)}>
                Supprimer
            </button>
        </td>
    </tr>
);

export default Voiture;
