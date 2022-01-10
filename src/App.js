import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Fruits from "./pages/Fruits";
import Grains from "./pages/Grains";
import Vegetables from "./pages/Vegetables";
import Legumes from "./pages/Legumes";
import Nuts from "./pages/Nuts";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import OurStory from "./pages/NavPages/OurStory";
import Locations from "./pages/NavPages/Locations";
import CartProvider from "./store/CartProvider";
import Carrer from "./pages/NavPages/Carrer";
import AboutUs from "./pages/FooterPages/AboutUs";
import Contact from "./pages/FooterPages/Contact";

function App() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <CartProvider>
        {showModal && <Cart onCloseModal={closeModal} />}
        <Header onOpenModal={openModal} />
        <main className="my-10">
          <Routes>
            <Route path="/" element={<Meals />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/grains" element={<Grains />} />
            <Route path="/legumes" element={<Legumes />} />
            <Route path="/nuts" element={<Nuts />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/carrer" element={<Carrer />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
