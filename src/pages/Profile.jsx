
import ProfileSidebar from "../components/profile/ProfileSidebar";
import AccountDetails from "../components/profile/AccountDetails";
import SavedPlaces from "../components/profile/SavedPlaces";
import SavedStories from "../components/profile/SavedStories";
import RecentlyExplored from "../components/profile/RecentlyExplored";
import FieldGuides from "../components/profile/FieldGuides";
import ListeningHistory from "../components/profile/ListeningHistory";

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#493722] sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-3 text-[#806D55]">
            Manage your account and explore your saved experiences.
          </p>
        </div>

        {/* Profile Layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

          {/* Left Sidebar */}
          <ProfileSidebar />

          {/* Right Content */}
          <div className="flex min-w-0 flex-1 flex-col gap-8">

            {/* Account Details */}
            <AccountDetails />

            {/* Saved Places */}
            <SavedPlaces />

            {/* Saved Stories */}
            <SavedStories />

            {/* Recently Explored */}
            <RecentlyExplored />

            {/* Field Guides */}
            <FieldGuides />

            {/* Listening History */}
            <ListeningHistory />

          </div>
        </div>
      </div>
    </main>
  );
}
