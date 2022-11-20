import "./App.css";
import React from "react";
import HomePage from "../src/components/pages/HomePage";
import ProjectBuilderPage from "../src/components/pages/ProjectBuilderPage";
import CMSPage from "../src/components/pages/CMSPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cms" element={<CMSPage />}></Route>
        <Route path="/project-builder" element={<ProjectBuilderPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
