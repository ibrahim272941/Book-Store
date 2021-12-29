import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Cart = () => {
  const context = useContext(BooksContext);

  const totalCartAmount = context.state.cart.reduce(
    (total, book) => (total = total + book.price * book.count),
    0
  );
  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <div>
      <h2>
        <Link to="/">Book Lists</Link> <span>My Cart({totalCartCount})</span>
      </h2>

      <h3>Total Cart Price: €{totalCartAmount.toFixed(2)}</h3>

      {context.state.cart.map((book, i) => (
        <div key={i} className="book-cart">
          <img src={book.image} />

          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: €{book.price}</p>
            <p>Total: €{(book.price * book.count).toFixed(2)}</p>
            <p>You have a total of {book.count} of this book in your cart.</p>
            <button onClick={() => context.decrease(book.id)}>-</button>
            <button onClick={() => context.removeFromCart(book.id)}>
              Remove
            </button>
            <button onClick={() => context.increase(book.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
