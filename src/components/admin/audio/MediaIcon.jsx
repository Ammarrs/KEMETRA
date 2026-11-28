import { FiBox, FiHeadphones } from "react-icons/fi";

const MediaIcon = ({ kind, className = "" }) => {
  const Icon = kind === "audio" ? FiHeadphones : FiBox;
  return <Icon aria-hidden="true" className={`shrink-0 text-lg text-primary ${className}`} />;
};
export default MediaIcon;
