import React from 'react';
import RelatedStory from './Related stories and places/RelatedStory';
import RelatedPlaceCollection from './Related stories and places/RelatedPlaceCollection';

const stories = [
  {
    category: "COPTIC",
    categoryColor: "bg-terracotta",
    image: "story/church.jpg",
    imageAlt:
      "Interior of a Coptic church with carved wooden iconostasis and warm natural light",
    title: "A sanctuary above the city",
    description:
      "Light, carved wood and an enduring place of devotion in Coptic Cairo.",
    location: "THE HANGING CHURCH · CAIRO",
    storyLink: "/stories/hanging-church",
    placeLink: "/places/hanging-church",
  },
  {
    category: "ISLAMIC",
    categoryColor: "bg-teal",
    image: "public/story/islamic.jpg",
    imageAlt:
      "Courtyard of Sultan Hassan mosque with stone arches and a central fountain",
    title: "The art of the courtyard",
    description:
      "Discover a different sense of scale in the monumental spaces of historic Cairo.",
    location: "SULTAN HASSAN · CAIRO",
    storyLink: "/stories/sultan-hassan",
    placeLink: "/places/sultan-hassan",
  },
];

const RelatedStoriesAndPlaces = () => {
  return (
    <div className="mt-10 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4.5">
      {stories.map((story) => (
        <RelatedStory key={story.category} story={story} />
      ))}

      <RelatedPlaceCollection />
    </div>
  );
};

export default RelatedStoriesAndPlaces;