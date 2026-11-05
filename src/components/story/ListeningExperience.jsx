import StoryAudioDock from './listening experience/StoryAudioDock'
import EditorialReadingLayout from './listening experience/EditorialReadingLayout'
import ExpandedNarrationTranscript from './listening experience/ExpandedNarrationTranscript'

const ListeningExperience = () => {
  return (
    <div>
      <StoryAudioDock />
      <EditorialReadingLayout />
      <ExpandedNarrationTranscript />
    </div>
  )
}

export default ListeningExperience