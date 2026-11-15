
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import HistoryTimeline from "../pages/HistoryTimeline";
import Story from "../pages/Story";
import ExploreMap from "../pages/ExploreMap";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import NotFound from "../pages/404/NotFound";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

import Header from "../components/Header";
import Footer from "../components/Footer";

function UserLayout() {
  return (
    <div>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/map" element={<ExploreMap />} />
        <Route path="/explore-map" element={<ExploreMap />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/create-account"
          element={<CreateAccount />}
        />
        <Route path="/timeline" element={<HistoryTimeline />} />
        <Route path="/settings" element={<Settings />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default UserLayout;
