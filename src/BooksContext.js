import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const BooksContext = createContext();

const apiKey = "0oT6qnsaYYkGg27ScdjxmKllkRENXeBH";
const apiId = "c5e2de00-0408-40cc-8c73-2d9d8b2eb876";
const baseUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`;
const BooksContextProvider = ({ children }) => {
  const [state, setState] = useState({
    bookList: [],
    cart: [],
  });
  useEffect(() => {
    bookList();
    searchBook();
  }, []);
  const author = "agatha christie";
  const searchUrl = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`;
  const searchBook = async () => {
    const data = await axios.get(searchUrl);
    const bookList = data.data.results.lists;
    const list = bookList.map((book) => book.books);

    const reduce = [list].map((book) => {
      return [].concat.apply([], [...book]);
    });
    reduce.map((book) =>
      // book.rank === state.bookList.title &&
      setState({ ...state, bookList: book })
    );
  };
  const bookList = async () => {
    const data = await axios.get(baseUrl);
    const booksArr = data.data.results.books;

    // setState({ ...state, bookList: booksArr });
  };
  const addCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.rank === book.rank)
        ? state.cart.map((cartItem) =>
            cartItem.rank === book.rank
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };
  const removeFromCart = (rank) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.rank !== rank),
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
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
