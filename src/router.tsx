import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Event from "./page/Event";
import DetailEvent from "./page/DetailEvent";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/detail" element={<DetailEvent />} />
      </Routes>
    </>
  );
};

export default Router;
