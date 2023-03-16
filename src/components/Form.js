import { useState } from 'react';

const Form = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [success, setSuccess] = useState('false');
    const [error, setError] = useState('false');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !price || !category) {
            setError('true');

            setTimeout(() => {
                setError('false');
            }, 5000);
        }
        else {
            // Pour que le message d'erreur disparaisse si la personne a rempli tous les champs rapidement après son affichage
            setError('false');

            addProduct(name, description, price, category);
            setSuccess('true');

            setTimeout(() => {
                setSuccess('false');
            }, 5000);
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='product-form'>
            {error === 'true' && <p className='error fade-out'>Please fill in all the fields</p>}
            {success === 'true' && <p className='success'>The product was added successfully</p>}
            <input
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter product description"
                className='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter product name"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter product name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default Form;