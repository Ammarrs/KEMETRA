
import { CgTranscript } from 'react-icons/cg';
import { FiChevronUp, FiPlay, FiVolume2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';

const AudioPlaybackControls = () => {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(150px,1fr)_auto] lg:items-center">

        {/* Play & Track Info */}
        <div className="flex items-center gap-5">
          <Button
            isIconOnly
            aria-label="Play story"
            className="size-11 min-w-11 rounded-full bg-primary text-secondary transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-background focus-visible:outline-offset-4"
          >
            <FiPlay size={18} />
          </Button>
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-tight text-background">
              Giza: a horizon in stone
            </h3>

            <p className="mt-1 text-[9px] text-background/50">
              Paused · English · Sample narration
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex min-w-0 flex-col justify-center">
          <div className="relative h-0.5 bg-background/15">
            <span className="absolute -top-0.75 left-0 size-1.75 rounded-full bg-primary" />
          </div>

          <div className="mt-3 flex justify-between text-[9px] text-background/50">
            <span>00:00</span>
            <span>02:40 · sample</span>
          </div>
        </div>

        {/* Extra Controls */}
        <div className="flex flex-wrap items-center gap-4 text-background/70">

          <span className="rounded-sm border border-background/15 px-2 py-2 text-[9px]">
            1x
          </span>

          <div className="flex items-center gap-2">
            <FiVolume2 size={15} />

            <div className="relative h-0.5 w-10 bg-background/20">
              <div className="h-full w-[70%] bg-primary" />
              <span className="absolute -top-0.75 left-[70%] size-1.75 rounded-full bg-primary" />
            </div>
          </div>

          <Link
            className="flex items-center gap-1.5 text-[10px] text-primary transition-colors hover:text-background focus-visible:outline-2 focus-visible:outline-primary"
          >
            <CgTranscript />
            Transcript
            <FiChevronUp size={12} />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default AudioPlaybackControls;
