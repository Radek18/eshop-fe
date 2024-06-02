import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Products />}></Route>
        <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
