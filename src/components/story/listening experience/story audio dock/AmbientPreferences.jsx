import { FiHeadphones, FiVolumeX } from 'react-icons/fi';

const AmbientPreferences = () => {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-primary">
        <FiHeadphones size={14} />

        <span className="text-[9px] font-semibold tracking-[0.18em]">
          THE KEMETRA LISTENING ROOM
        </span>
      </div>

      <div className="flex items-center gap-2 text-[9px] text-background/60">
        <FiVolumeX size={13} />
        <span>Ambient music OFF · opt in separately</span>
      </div>
    </div>
  );
};

export default AmbientPreferences;
