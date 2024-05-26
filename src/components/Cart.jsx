
import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} рублей
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;