import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Home from "../src/components/Home";
import Dashboard from "../src/components/Dashboard";
import AboutUs from "../src/components/AboutUs";
import ContactUs from "../src/components/ContactUs";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route
                path="/home"
                element={<Home name={name} setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/about/:id" element={<AboutUs />} />
              <Route path="/contact/:id" element={<ContactUs />} />
            </>
          ) : (
            <Route
              path="/"
              element={
                <Dashboard
                  setIsLoggedIn={setIsLoggedIn}
                  name={name}
                  setName={setName}
                />
              }
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}
