import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDescription from "./pages/ProductDescription";
import Services from "./pages/Services";
import NewsEvents from "./pages/NewsEvents";
import Projects from "./pages/Projects";
import Blog from "./pages/Blogs.jsx";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { Box } from "@chakra-ui/react";
import TheGroup from "./pages/about-us/TheGroup.jsx";
import CompanyProfile from "./pages/about-us/CompanyProfile.jsx";
import ContactForm from "./pages/ContactUs.jsx";
import ThankYou from "./pages/ThankYou.jsx";

const App = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "923221389551"; // Replace with your WhatsApp number
    const message = "Hello, I have a question about your services."; // Replace with your custom message

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/safety-sealers/" replace />} />

        <Route path="/safety-sealers/" element={<Home />} />
        <Route
          path="/safety-sealers/about-us/the-group"
          element={<TheGroup />}
        />
        <Route
          path="/safety-sealers/about-us/company-profile"
          element={<CompanyProfile />}
        />
        <Route path="/safety-sealers/products" element={<Products />} />
        <Route
          path="/safety-sealers/products/:productName"
          element={<ProductDescription />}
        />
        <Route path="/safety-sealers/services" element={<Services />} />
        <Route path="/safety-sealers/news-events" element={<NewsEvents />} />
        <Route path="/safety-sealers/projects" element={<Projects />} />
        <Route path="/safety-sealers/blog" element={<Blog />} />
        <Route path="/safety-sealers/contact-us" element={<ContactForm />} />
        <Route path="/safety-sealers/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="1000"
        onClick={handleWhatsAppClick}
        cursor="pointer"
        color="green.500"
      >
        <BiLogoWhatsappSquare size="60px" />
      </Box>
    </>
  );
};

export default App;
