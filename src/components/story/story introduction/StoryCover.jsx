const StoryCover = () => {
  return (
    <div>
      {/* Hero Image */}
      <div className="overflow-hidden rounded-sm bg-linear-to-br from-surface via-primary to-foreground">
        <img
          src="story/592b737b45f754171d2663cd232cf9bd1602e461.jpg"
          alt="The three great pyramids of Giza across the desert plateau"
          className="aspect-[2.92/1] w-full object-cover max-md:aspect-4/3"
        />
      </div>

      {/* Image Caption */}
      <div className="mt-2 flex flex-col justify-between gap-2 text-[12px] text-muted-foreground sm:flex-row sm:items-center">
        <p>
          The Giza pyramid complex, seen across the desert plateau.
        </p>

        <p>Illustrative site image</p>
      </div>
    </div>
  );
};

export default StoryCover;
