import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDescription from "./pages/ProductDescription";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/safety-sealers/" replace />} />

        <Route path="/safety-sealers/" element={<Home />} />
        <Route path="/safety-sealers/products" element={<Products />} />
        <Route
          path="/safety-sealers/products/:productName"
          element={<ProductDescription />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
