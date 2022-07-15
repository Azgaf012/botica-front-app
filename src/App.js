import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/private/Dashboard";
import KardexList from "./pages/private/kardex/KardexList";
import ProductList from "./pages/private/Product/ProductList";
import Sale from "./pages/private/sale/Sale";
import { Login } from "./pages/public/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard/" element={<PrivateRoute />}>
            <Route path="" element={<Dashboard />} />
            <Route path="products" element={<ProductList />} />
            <Route path="kardex" element={<KardexList />} />
            <Route path="sale" element={<Sale />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
