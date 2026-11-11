import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
const RelatedTimelineCard = ({ to, label, title, description, action, note, image, imageAlt }) => (
  <Link className="group grid overflow-hidden border border-border text-foreground no-underline transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:grid-cols-[42%_1fr]" to={to}>
    <div className="overflow-hidden bg-surface-secondary"><img className="h-full min-h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" src={image} alt={imageAlt} /></div>
    <div className="flex min-h-64 flex-col p-7"><p className="font-body text-[0.63rem] font-extrabold uppercase tracking-[0.13em] text-primary">{label}</p><h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{title}</h3><span className="mt-3 font-body text-sm leading-6 text-muted-foreground">{description}</span><strong className="mt-auto flex items-center gap-2 pt-7 font-body text-sm text-primary">{action}<FiArrowRight aria-hidden="true" /></strong>{note && <small className="mt-2 font-body text-xs text-muted-foreground">{note}</small>}</div>
  </Link>
);
export default RelatedTimelineCard;
