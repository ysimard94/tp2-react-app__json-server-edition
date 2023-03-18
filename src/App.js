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

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      console.log(productsFromServer)
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()

    return data
  }

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()

    return data
  }



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

      const updatedProducts = products.map((product) => (product.id === id ? updatedProduct : product));
      setProducts(updatedProducts);
    }
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
    
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