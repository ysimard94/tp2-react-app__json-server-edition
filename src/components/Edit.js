import { useParams } from 'react-router-dom'
import { useState } from 'react'
const Edit = ({ products, editProduct }) => {
    let id = parseFloat(useParams().id)
    const product = products.find(product => product.id === id);

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [success, setSuccess] = useState('false');
    const [error, setError] = useState('false');

    const handleSubmit = (e) => {
        e.preventDefault()

        // Si un seul des champs est vide, afficher un message d'erreur qui disparaitra après 5 secondes
        if (!name || !description || !price || !category) {
            setError('true');

            setTimeout(() => {
                setError('false')
            }, 5000)
        } else {
            // Pour que le message d'erreur disparaisse si la personne a rempli tous les champs rapidement après son affichage
            setError('false');

            // Modifier le produit et afficher un message de succès qui va disparaitre après 5 secondes
            editProduct(id, name, description, price, category);
            setSuccess('true');

            setTimeout(() => {
                setSuccess('false');
            }, 5000);
        }
    }

    if (!product) {
        return <p>There are no product corresponding.</p>
    }

    return (
        <>
            <h1>Edit product</h1>
            <form className='product-form' onSubmit={handleSubmit}>
                {error === 'true' && <p className='error fade-out'>Please fill in all the fields</p>}
                {success === 'true' && <p className='success'>The product was modified successfully</p>}
                <label>Product name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Category</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                <button type="submit">Save</button>
            </form>
        </>
    )
}
export default Edit