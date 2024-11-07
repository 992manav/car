import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import ContactUs from "./pages/ContactUs";
import AllParts from "./pages/AllParts.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Part from "./components/Part.jsx";
import Parts from "./components/Parts.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import Detail from "./components/Detail.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import AddCar from "./pages/SellCar.jsx";
import SellCar from "./pages/SellCar.jsx";
import CarDetail from "./components/CarDetail.jsx";

// Custom Navbar component based on the route
const ConditionalNavbar = () => {
  const location = useLocation();

  // Render no navbar for the home route
  if (location.pathname === "/") {
    return null;
  }

  // Render the default navbar for all other routes
  return <Navbar2 />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/part/:types/:model" element={<Part />} />
          <Route path="/parts/:types" element={<Parts />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/sellcar" element={<SellCar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
