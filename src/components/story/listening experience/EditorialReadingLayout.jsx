
import WrittenStory from "./editorial reading layout/WrittenStory";
import StoryCompanion from "./editorial reading layout/StoryCompanion";


const EditorialReadingLayout = () => {
  return (
    <div>
      <section className="bg-paper  py-16 font-body text-ink ">
        <div className="mx-auto grid max-w-266.25 grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,640px)_335px] lg:gap-22.5">

          {/* Main Article */}
          <WrittenStory />
          {/* Sidebar */}
          <StoryCompanion />
        </div>
      </section>

    </div>
  )
}

export default EditorialReadingLayout