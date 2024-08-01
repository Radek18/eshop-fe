import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
