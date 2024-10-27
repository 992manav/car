import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import ContactUs from "./pages/ContactUs";
import AllParts from "./pages/AllParts.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Part from "./components/Part.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/part/:types" element={<Part />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
