import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ products, onDelete }) => {
    // Si le tableau est vide, retourner un message, sinon retourner la liste des produits
    if (products.length === 0) {
        return <p>There are no products added yet.</p>
    }
    else {
        const handleDelete = (id) => {
            onDelete(id);
        };

        return (

            <table className='product-list'>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
                {/* Va boucler à traver le tableau de produits pour afficher une liste de tous les produits */}
                {products.map((product) => (
                    <tr key={product.id}>
                        <td >{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
                        <td><button className='btn-delete' onClick={() => handleDelete(product.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
        );
    }
};

export default List;