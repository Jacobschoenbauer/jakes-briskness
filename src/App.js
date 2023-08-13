import React from "react";
// npm i react-dom
// npm install
// npx create-react-app (Name of project)
//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceOne from "./pages/ServiceOne";
import ServiceTwo from "./pages/ServiceTwo";
function App() {
  return (
    <div className="main">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/serviceOne" element={<ServiceOne />} />
          <Route path="/ServiceTwo" element={<ServiceTwo />} />
        </Routes>
      </Router>
      <ServiceOne />
      <ServiceTwo />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
