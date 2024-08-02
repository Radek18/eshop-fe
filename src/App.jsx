import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
