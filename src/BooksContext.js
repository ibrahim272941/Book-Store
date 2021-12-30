import { createContext, useState } from "react";
import { data } from "./data";
export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [state, setState] = useState({ bookList: data, cart: [] });

  const addCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };
  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };
  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };
  return (
    <BooksContext.Provider
      value={{ state: state, addCart, increase, decrease, removeFromCart }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
