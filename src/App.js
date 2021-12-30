import React, { createContext, useState } from "react";
import "./index.css";

import AppRouter from "./AppRouter";
import BooksContextProvider from "./BooksContext";
export const BooksContext = createContext();
export default function App() {
  // const [state, setState] = useState({ bookList: data, cart: [] });

  // const addCart = (book) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.find((cartItem) => cartItem.id === book.id)
  //       ? state.cart.map((cartItem) =>
  //           cartItem.id === book.id
  //             ? { ...cartItem, count: cartItem.count + 1 }
  //             : cartItem
  //         )
  //       : [...state.cart, { ...book, count: 1 }],
  //   });
  // };
  // const removeFromCart = (id) =>
  //   setState({
  //     ...state,
  //     cart: state.cart.filter((cartItem) => cartItem.id !== id),
  //   });
  // const increase = (id) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.map((cartItem) =>
  //       cartItem.id === id
  //         ? { ...cartItem, count: cartItem.count + 1 }
  //         : cartItem
  //     ),
  //   });
  // };
  // const decrease = (id) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.map((cartItem) =>
  //       cartItem.id === id
  //         ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
  //         : cartItem
  //     ),
  //   });
  // };

  return (
    <BooksContextProvider>
      <div className="App">
        <h1>The New York Times Best Seller</h1>
      </div>
      <AppRouter />
    </BooksContextProvider>
  );
}
