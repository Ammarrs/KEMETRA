import AmbientPreferences from './story audio dock/AmbientPreferences';
import AudioPlaybackControls from './story audio dock/AudioPlaybackControls';

const StoryAudioDock = () => {
  return (
    <section className="mx-3 mt-5 rounded-sm border-t-2 border-primary bg-secondary px-5 py-5 text-background sm:mx-4 sm:px-6 sm:py-6">
      <AmbientPreferences />
      <AudioPlaybackControls />

      <div className="mt-6 border-t border-background/10 pt-5">
        <p className="text-[9px] leading-5 text-background/50">
          Audio interface preview · No recording attached. Story narration
          and optional ambient music are separate controls; nothing autoplays.
        </p>
      </div>
    </section>
  );
};

export default StoryAudioDock;
