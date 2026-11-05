import SectionIntroduction from './continue discovering/SectionIntroduction'
import RelatedStoriesAndPlaces from './continue discovering/RelatedStoriesAndPlaces'

const ContinueDiscovering = () => {
  return (
    <div>
      <section className="bg-sand px-5 py-12 sm:px-8 lg:px-10 lg:py-12.5">
        <div className="mx-auto">
          {/* Header */}

          <SectionIntroduction />
          <RelatedStoriesAndPlaces />

        </div>
      </section >
    </div >
  )
}

export default ContinueDiscovering