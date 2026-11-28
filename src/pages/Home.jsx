import React from "react";

// Sections
import Hero from "../components/Hero";
import QuickStrip from "../components/QuickStrip";
import Immersive from "../components/Immersive";
import HistoryGlance from "../components/HistoryGlance";
import HeritageLenses from "../components/HeritageLenses";
import AncientPlaces from "../components/AncientPlaces";
import MapSection from "../components/MapSection";
import FeaturedStories from "../components/FeaturedStories";

function Home() {
  return (
    <main>
      <Hero />
      <QuickStrip />
      <Immersive />
      <HistoryGlance />
      <HeritageLenses />
      <AncientPlaces />
      <MapSection />
      <FeaturedStories />
    </main>
  );
}

export default Home;
