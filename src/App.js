
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import About from './pages/About';

import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>
  );
}

export default App;
