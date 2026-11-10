import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "./../pages/About";
import Story from "./../pages/Story";
import ExploreMap from "./../pages/ExploreMap";
import Login from "../pages/Login";
import NotFound from "../pages/404/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UserLayout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/map" element={<ExploreMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default UserLayout;
