import React from 'react';

const List = ({ products, onDelete }) => {
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
                {products.map((product) => (
                    <tr key={product.id}>
                        <td >{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td><button className='btn-delete' onClick={() => handleDelete(product.id)}>Delete</button></td>
                    </tr>
                ))}

            </table>
        );
    }
};

export default List;