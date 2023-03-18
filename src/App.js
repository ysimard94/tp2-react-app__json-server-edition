import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Products from './components/Products'
import Form from './components/Form';
import List from './components/List';
import Edit from './components/Edit';

function App() {
    const [products, setProducts] = useState([]);

    // Va servir à récupérer les données de l'API et les insérer dans le tableau products
    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()

            setProducts(productsFromServer)
        }

        getProducts()
    }, [])

    // Va récupérer tous les produits de l'API et les retourner
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()

        return data
    }

    // Va ajouter un produit à l'API et mettre à jour le tableau products avec cette donnée
    const addProduct = async (product) => {
        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const newProduct = await res.json()

        setProducts([...products, newProduct])
    };

    // Va modifier un produit de l'API et mettre à jour le tableau products avec cette donnée
    const editProduct = async (id, name, description, price, category) => {
        {
            const product = { id, name, description, price, category };
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            const updatedProduct = await res.json();

            // Va boucler à travers le tableau de produit, et si l'id du produit est égal à l'id
            // du produit à modifier, on remplace la vieille donnée avec la nouvelle, sinon
            // on laisse la donnée telle quelle
            const updatedProducts = products.map((product) => (product.id === id ? updatedProduct : product));
            setProducts(updatedProducts);
        }
    };

    // Va supprimer un produit de l'API et ensuite enlever celle-ci du tableau products
    const deleteProduct = async (id) => {
        await fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })

        // Va filtrer le tableau de produits et ne garder que ceux qui n'ont pas l'id du produit
        setProducts(products.filter((product) => product.id !== id))
    };

    return (
        <BrowserRouter>
            <h1 className='title'>Product Manager</h1>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<><Home /><Form addProduct={addProduct} /></>} />
                    <Route path="/products" element={<><Products /><List products={products} onDelete={deleteProduct} /></>} />
                    <Route path="/edit/:id" element={<><Edit products={products} editProduct={editProduct} /></>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;