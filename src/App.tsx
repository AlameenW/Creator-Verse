import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreatorAbout from "./pages/CreatorAbout";
import CreatorCreate from "./pages/CreatorCreate";
import CreatorListing from "./pages/CreatorListing";
import CreatorUpdate from "./pages/CreatorUpdate";
import "@picocss/pico/css/pico.min.css";
function App() {
  return (
    <div>
      <h1 className="header" >CREATORVERSE</h1>
      <nav className="nav-container">
        <ul>
          <li className="nav-link">
            <Link to="/">
              <button>View All Creators</button>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/new">
              <button>View All Creators</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CreatorListing />} />
        <Route path="/new" element={<CreatorCreate />} />
      </Routes>
    </div>
  );
}

export default App;
