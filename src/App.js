import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import CheckOut from "./pages/CheckOut/CheckOut";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CheckOut />} />
      </Routes>
    </Layout>
  );
};

export default App;
