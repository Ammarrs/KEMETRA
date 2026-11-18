import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import ExploreMap from "../pages/ExploreMap";
import HistoryTimeline from "../pages/HistoryTimeline";
import Story from "../pages/Story";
import About from "../pages/About";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/404/NotFound";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ForgotPassword from "../pages/ForgotPassword";

function UserLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">
        <Routes>
          {/* Main Navigation Pages */}
          <Route index element={<Home />} />
          <Route path="/explore-map" element={<ExploreMap />} />
          <Route path="/map" element={<ExploreMap />} />
          <Route path="/timeline" element={<HistoryTimeline />} />
          <Route path="/stories" element={<Story />} />
          <Route path="/story/:id" element={<Story />} />
          <Route path="/about" element={<About />} />

          {/* Auth & User Account Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

          {/* 404 Fallback Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default UserLayout;
