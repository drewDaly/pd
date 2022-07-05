import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import TrustedPartners from "./components/pages/TrustedPartners/TrustedPartners";
import ContactUs from "./components/pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/Home' element={<Home/>} exact/>
        <Route path="/AboutUs" element={AboutUs} />
        <Route path="/TrustedPartners" element={TrustedPartners} />
        <Route path="/ContactUs" element={ContactUs}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
