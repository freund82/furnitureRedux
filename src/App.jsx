import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Интернет-магазин мебели</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;