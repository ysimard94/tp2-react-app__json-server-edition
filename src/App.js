import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Products from './components/Products'
import Form from './components/Form';
import List from './components/List';
import Edit from './components/Edit';

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

  const editProduct = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><Form addProduct={addProduct} /></>} />
          <Route path="/products" element={<><Products /><List products={products} onDelete={deleteProduct}/></>} />
          <Route path="/edit/:id" element={<Edit products={products}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;