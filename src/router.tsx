import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Event from "./page/Event";
import DetailEvent from "./page/DetailEvent";
import Contact from "./page/Contact";
import PayStore from "./page/PayStore";
import CompletePayStore from "./page/CompletePayStore";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/detail/:id" element={<DetailEvent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paystore/:id" element={<PayStore />} />
        <Route path="/paystore/complete/:id" element={<CompletePayStore />} />
      </Routes>
    </>
  );
};

export default Router;
