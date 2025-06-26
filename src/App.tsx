import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreatorAbout from "./pages/CreatorAbout";
import CreatorCreate from "./pages/CreatorCreate";
import CreatorListing from "./pages/CreatorListing";
import CreatorUpdate from "./pages/CreatorUpdate";

function App() {
  return (
    <>
      <h1>Creator-verse</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">View all creators</Link>
          </li>
          <li>
            <Link to="/new">Add a creator</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CreatorListing />} />
        <Route path="/new" element={<CreatorCreate />} />
      </Routes>
    </>
  );
}

export default App;
