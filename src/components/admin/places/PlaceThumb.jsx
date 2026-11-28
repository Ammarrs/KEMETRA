// Thumbnail shown only when the place has an image (matches the design,
// where records without an image simply start at the text).
const PlaceThumb = ({ src, className = "size-12" }) =>
  src ? (
    <img
      src={src}
      alt=""
      loading="lazy"
      className={`${className} shrink-0 rounded-sm bg-surface-secondary object-cover`}
    />
  ) : null;
export default PlaceThumb;
