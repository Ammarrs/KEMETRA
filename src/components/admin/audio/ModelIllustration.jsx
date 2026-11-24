// Static, clearly-labelled illustration — NOT a scan, reconstruction or interactive model.
const ModelIllustration = ({ place }) => (
  <figure className="mt-5 overflow-hidden rounded-sm bg-secondary p-5">
    <figcaption className="font-body text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
      {place || "No place"} / Illustrative geometry
    </figcaption>
    <svg
      viewBox="0 0 400 190"
      role="img"
      aria-label="Static wireframe illustration of pyramid forms"
      className="mx-auto mt-2 h-auto w-full max-w-md text-primary">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.9">
        <path d="M70 160 L165 30 L255 160 Z" />
        <path d="M165 30 L195 160 M165 30 L130 160" opacity="0.6" />
        <path d="M70 160 L195 160 L255 160" />
        <path d="M215 160 L305 52 L370 150 L255 160" />
        <path d="M305 52 L255 160 M305 52 L330 156" opacity="0.6" />
        <path d="M95 128 L235 128 M110 108 L215 108 M128 84 L200 84 M146 60 L186 60" opacity="0.4" />
      </g>
    </svg>
    <p className="mt-3 font-body text-xs leading-5 text-background/70">
      Not connected · Static illustration
      <br />
      Not a scan, reconstruction or interactive model
    </p>
  </figure>
);
export default ModelIllustration;
