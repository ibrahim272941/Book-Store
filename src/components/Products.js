import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../BooksContext";

const Products = () => {
  const context = useContext(BooksContext);
  console.log(context);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <>
      <nav>
        <span>Book Lists</span>

        <Link style={{ textDecoration: "none" }} to="/cart">
          My Cart <span style={{ color: "red" }}>{totalCartCount}</span>
        </Link>
      </nav>

      <div className="book-lists">
        {context.state.bookList.map((book, i) => (
          <div key={i} className="book">
            <img src={book.image} />
            <div>
              <h4>{book.name}</h4>
              <p>Author: {book.author}</p>
              <p>Price: € {book.price}</p>
              <button onClick={() => context.addCart(book)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
