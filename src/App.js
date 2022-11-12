import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Accomodations from "./components/Accomodations";
import Modal from "./components/Modal";
import useModal from "./components/useModal";
import Footer from "./components/Footer";

function App() {
  const { isShowing, toggle } = useModal();
  return (
    <Router>
      <div className="">
        <Navbar onToggle={toggle} />

        <Modal isShowing={isShowing} hide={toggle} />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/accomodations"
            element={<Accomodations />}
          ></Route>
          {/* <Modal isShowing={isShowing} hide={toggle} /> */}

          {/* <Route exact path="/modal" element={<Modal />}></Route> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
