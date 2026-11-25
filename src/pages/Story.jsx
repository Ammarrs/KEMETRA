
import StoryIntroduction from './../components/story/StoryIntroduction';
import ListeningExperience from './../components/story/ListeningExperience';
import ContinueDiscovering from '../components/story/ContinueDiscovering';

const Story = () => {
  return (
    <div className='bg-background'>
      <div className='md:px-12 py-8 px-2'>
        <StoryIntroduction />
        <ListeningExperience />
      </div>
      <ContinueDiscovering />
    </div>
  )
}

export default Story