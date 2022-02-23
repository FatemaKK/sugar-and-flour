import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from "react";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import IndexPage from "./Pages/IndexPage";
import DetailsPage from "./Pages/DetailsPage";
import EditPage from "./Pages/EditPage";
import NewPage from "./Pages/NewPage";

function App() {
  return (
    <div>
      <h1>Hello Sugar!</h1>
      <BrowserRouter>
        <NavBar />
        <section>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bakedItems" element={<IndexPage />} />
            <Route exact path="/bakedItems/:id" element={<DetailsPage />} />
            <Route exact path="/bakedItems/:id/edit" element={<EditPage />} />
            <Route exact path="/bakedItems/new" element={<NewPage />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
