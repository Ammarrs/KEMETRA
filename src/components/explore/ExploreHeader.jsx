
function ExploreHeader({
  title = "Explore the Map",
  description = "Discover the ancient wonders and historical treasures of Egypt.",
}) {
  return (
    <header className="mb-4">
      <h1 className="mb-[5px] font-display text-[32px] font-bold text-foreground">
        {title}
      </h1>

      <p className="font-body text-[13px] leading-[1.5] text-muted-foreground">
        {description}
      </p>
    </header>
  )
}

export default ExploreHeader
