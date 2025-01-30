import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import CarInfo from "./pages/CarInfo";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PremiumCollection from "./pages/PremiumCollection";
import type React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/premium-collection" element={<PremiumCollection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="car_info/:id" element={<CarInfo />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
