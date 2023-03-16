import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Products from './components/Products'
import Form from './components/Form';
import List from './components/List';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (name, description, price, category) => {
    const newProduct = {
      name,
      description,
      price,
      category
    };

    console.log(newProduct)
    const id = Math.floor(Math.random() * 1000)
    newProduct.id = id;
    console.log(newProduct)

    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><Form addProduct={addProduct} /></>} />
        </Routes>
        <Routes>
          <Route path="/products" element={<><Products /><List products={products} onDelete={deleteProduct}/></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;