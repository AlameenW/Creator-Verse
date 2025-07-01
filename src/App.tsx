import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreatorAbout from "./pages/CreatorAbout";
import CreatorCreate from "./pages/CreatorCreate";
import CreatorListing from "./pages/CreatorListing";
import CreatorUpdate from "./pages/CreatorUpdate";
import { supabase } from "./client.ts";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  // useEffect(() => {
  //   const getCreators = async () => {
  //     const { data, error } = await supabase.from("Creators").select();
  //     if (error) console.log(error.message);
  //     else console.log(data);
  //   };

  //   getCreators();
  // },[])
  return (
    <div>
      <h1 className="header">CREATORVERSE</h1>
      <nav>
        <ul className="nav-container">
          <li className="nav-link">
            <Link to="/">
              <button className="btn btn-primary">View All Creators</button>
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/new">
              <button className="btn btn-primary">Add a creator</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CreatorListing />} />
        <Route path="/new" element={<CreatorCreate />} />
        <Route path="/about/:id" element={<CreatorAbout />} />
      </Routes>
    </div>
  );
}

export default App;
