import Header from "./components/Header/Header";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import TrustedPartners from "./components/pages/TrustedPartners/TrustedPartners";
import ContactUs from "./components/pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/TrustedPartners" element={<TrustedPartners/>} />
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      <ScrollButton />
      <Footer />
    </Router>
  );
}

export default App;
