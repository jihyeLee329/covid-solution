import React, { useState } from "react";
import "./styles.css";
import { GlobalStyle } from "./css/GlobalStyle";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SearchHospital from "./routes/SearchHospital";
import CheckList from "./routes/CheckList";
export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/CheckList" element={<CheckList />} />
        <Route path="/" element={<SearchHospital />} />
      </Routes>
    </div>
  );
}
