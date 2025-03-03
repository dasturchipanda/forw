import React from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NoDirect from "./pages/NoDirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoDirect />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
