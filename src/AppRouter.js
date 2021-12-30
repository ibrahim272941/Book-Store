import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
