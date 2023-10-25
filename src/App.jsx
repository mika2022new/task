import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Arrival } from "./components/arrival";
import { Groups } from "./components/groups";
import { Goods } from "./components/goods";
import { Users } from "./components/users";
import { Settings } from "./components/settings";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="arrival" element={<Arrival />} />
          <Route path="groups" element={<Groups />} />
          <Route path="goods" element={<Goods />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
