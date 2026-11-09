import { FiMapPin } from "react-icons/fi";

export default function LoginInvitation() {
  return (
    <section className="relative overflow-hidden rounded-md lg:h-full h-90">
      <img
        src="login/bg-login.jpg"
        alt="The columns of Karnak, Luxor"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Theme-aware gradient overlay */}
      <div className="dark absolute inset-0 bg-linear-to-t from-background/20 via-background/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:p-8 ">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Your next chapter
        </span>

        <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight text-accent sm:text-4xl">
          Keep the places that stay with you.
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-accent/80">
          Save a place, return to a story, and follow your curiosity
          across Egypt's many layers of heritage.
        </p>

        <div className="mt-2 flex items-center justify-between border-t text-accent/75 border-divider pt-4">
          <span className="text-xs font-medium ">
            The columns of Karnak · Luxor
          </span>

          <FiMapPin className="text-xl text-primary" />
        </div>
      </div>
    </section>
  );
}
