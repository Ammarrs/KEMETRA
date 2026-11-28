import { FiVolume2 } from 'react-icons/fi'

export default function AmbientButton({ t, playing, onClick }) {
  return (
    <button className="sound-status" type="button" onClick={onClick} aria-pressed={playing} aria-label={playing ? t.ambientOn : t.ambientOff}>
      <span className="sound-icon" aria-hidden="true">
        {playing ? <FiVolume2 /> : <img draggable={false} src="/images/volume-x.svg" alt="" />}
      </span>
      <span>{playing ? t.ambientOn : t.ambientOff}</span>
    </button>
  )
}
