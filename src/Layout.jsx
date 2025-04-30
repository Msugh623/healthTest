import React from "react";
import { Route, Routes } from "react-router-dom";
import AppBody from "./components/AppBody";

const Layout = () => {
  return (
    <main className="main" style={{
          minWidth:'940px'
        }}>
      <Routes>
        <Route path="/" element={<AppBody />} />
      </Routes>
    </main>
  );
};

export default Layout;
