import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/users-panel/menu/Menu";
import ShoppingCart from "./components/users-panel/cart/ShoppingCart";
import AddMenuItem from "./components/admin-panel/menu/AddItem";
import AdminPanel from "./components/admin-panel/AdminPanel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/categories" element={<AddMenuItem />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
