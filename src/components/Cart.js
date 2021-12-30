import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../BooksContext";

const Cart = () => {
  const context = useContext(BooksContext);
  console.log(context);
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
      <div className="cart-box-nav">
        <h2>
          <Link to="/">Book Lists</Link>{" "}
        </h2>
        {context ? <span></span> : <span>My Cart({totalCartCount})</span>}
      </div>

      {/* <h3>Total Cart Price: €{totalCartAmount.toFixed(2)}</h3> */}

      {context.state.cart.map((book, i) => {
        console.log(book.buy_links[0].url);
        return (
          <div key={i} className="book-cart">
            <div className="selected-book">
              <img src={book.book_image} />
              {/* <button onClick={() => context.removeFromCart(book.rank)}>
                Remove
              </button> */}
              {/* <p>Price: €{book.price}</p>
              <p>Total: €{(book.price * book.count).toFixed(2)}</p>
              <p>You have a total of {book.count} of this book in your cart.</p>
              <button onClick={() => context.decrease(book.id)}>-</button>
              
              <button onClick={() => context.increase(book.id)}>+</button> */}
            </div>
            <div className="book-info">
              <p>Author: {book.author}</p>
              <p>{book.description}</p>
              <p>
                Click more information and buy to
                <a href={book.buy_links[0].url}> {book.buy_links[0].name}</a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
