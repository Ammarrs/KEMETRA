import { useState } from "react";
import TimelineHero from "../components/timeline/TimelineHero";
import EraRail from "../components/timeline/EraRail";
import EraFeature from "../components/timeline/EraFeature";
import EraNavigation from "../components/timeline/EraNavigation";
import RelatedTimelineContent from "../components/timeline/RelatedTimelineContent";

const timelineImage = "/story/592b737b45f754171d2663cd232cf9bd1602e461.jpg";

const eras = [
  { id: "predynastic", name: "Predynastic and Early Dynastic", period: "c. 6000–2686 BCE", subtitle: "Origins take form.", category: "Pharaonic", description: "The Nile landscape supported communities whose craft, belief, and political organization shaped the foundations of ancient Egypt.", landscape: "Upper and Lower Egypt", focus: "Settlement, ritual and early kingship", closer: "Burial grounds, ceremonial objects and early cities" },
  { id: "old-kingdom", name: "Old Kingdom", period: "c. 2686–2181 BCE", subtitle: "A horizon takes shape.", category: "Pharaonic", description: "The pyramid landscapes offer a way into the Old Kingdom. Look beyond their silhouettes to a wider world of architecture, belief and human endeavour.", landscape: "Giza Plateau · Memphis region", focus: "Architecture, kingship and remembrance", closer: "Pyramid complexes, tombs and connecting spaces" },
  { id: "middle-kingdom", name: "Middle Kingdom", period: "c. 2055–1650 BCE", subtitle: "The kingdom is renewed.", category: "Pharaonic", description: "A renewed state connected royal authority with regional traditions, literature, engineering and a changing sacred landscape.", landscape: "Thebes · Fayoum · Middle Egypt", focus: "Renewal, literature and regional power", closer: "Temples, settlements and royal building programmes" },
  { id: "new-kingdom", name: "New Kingdom", period: "c. 1550–1069 BCE", subtitle: "Egypt looks beyond its borders.", category: "Pharaonic", description: "Monumental temples, international exchange and richly decorated tombs reveal an era of expansion and cultural production.", landscape: "Thebes · Nile Valley", focus: "Empire, devotion and royal memory", closer: "Temple precincts, tombs and processional routes" },
  { id: "late-period", name: "Late Period", period: "c. 664–332 BCE", subtitle: "Tradition meets a changing world.", category: "Pharaonic", description: "Older forms were revisited as Egypt navigated renewed local rule, foreign powers and far-reaching Mediterranean connections.", landscape: "Delta · Memphis · Upper Egypt", focus: "Revival, exchange and resilience", closer: "Temple additions, sculpture and sacred animal sites" },
  { id: "greco-roman", name: "Greco-Roman", period: "332 BCE–395 CE", subtitle: "Cultures gather along the Nile.", category: "Greco-Roman", description: "Egyptian, Greek and Roman traditions met in cities, temples, ports and everyday life across the country.", landscape: "Alexandria · Delta · Nile Valley", focus: "Cultural exchange, cities and belief", closer: "Libraries, temples, ports and domestic life" },
  { id: "coptic", name: "Coptic Egypt", period: "c. 1st–7th centuries CE", subtitle: "Faith reshapes the landscape.", category: "Coptic", description: "Churches, monasteries, manuscripts and textiles trace the growth of Christian communities within Egypt’s layered heritage.", landscape: "Old Cairo · Desert monasteries · Upper Egypt", focus: "Faith, community and pilgrimage", closer: "Churches, monasteries, manuscripts and textiles" },
  { id: "islamic", name: "Islamic Egypt", period: "from 641 CE", subtitle: "A city of learning and craft grows.", category: "Islamic", description: "Mosques, schools, markets and workshops reveal connected traditions of worship, learning, architecture and urban life.", landscape: "Historic Cairo · Delta · regional cities", focus: "Urban life, learning and craftsmanship", closer: "Mosques, madrasas, streets and decorative arts" },
];

const HistoryTimeline = () => {
  const [activeId, setActiveId] = useState("old-kingdom");
  const activeIndex = eras.findIndex((era) => era.id === activeId);
  const selectEra = (index) => {
    const safeIndex = Math.max(0, Math.min(eras.length - 1, index));
    setActiveId(eras[safeIndex].id);
  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TimelineHero />
      <EraRail eras={eras} activeId={activeId} activeIndex={activeIndex} onSelect={selectEra} />
      <EraFeature era={eras[activeIndex]} image={timelineImage} />
      <EraNavigation eras={eras} activeIndex={activeIndex} onSelect={selectEra} />
      <RelatedTimelineContent image={timelineImage} />
    </main>
  );
};
export default HistoryTimeline;
