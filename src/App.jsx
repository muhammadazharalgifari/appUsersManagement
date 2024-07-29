import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ListUsers from "./screen/ListUsers";
import LatihanuseEffect from "./screen/LatihanuseEffect";
import DetailUsers from "./screen/DetailUsers";
import AddUsers from "./screen/AddUsers";
import EditUsers from "./screen/EditUsers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/listusers" element={<ListUsers />} />
      <Route path="/detailusers" element={<DetailUsers />} />
      <Route path="/addusers" element={<AddUsers />} />
      <Route path="/editusers" element={<EditUsers />} />
      <Route path="/latihan" element={<LatihanuseEffect />} />
    </Routes>
  );
};

export default App;
