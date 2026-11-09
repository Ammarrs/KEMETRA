
import React from 'react';

const WrittenStory = () => {
  return (
    <div>
      <article className="min-w-0">

        {/* Introduction */}
        <div className="mb-9">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Look beyond the silhouette
          </p>

          <h2 className="mb-5 font-display text-[30px] font-semibold leading-tight tracking-tight text-foreground sm:text-[32px]">
            A familiar wonder, seen anew.
          </h2>

          <p className="text-[16px] leading-[1.75] text-muted-foreground sm:text-[17px]">
            Some places feel known before we arrive. Giza is one of
            them. Yet standing on the plateau reveals something no
            distant image can fully explain: the relationship between
            stone, sky and the world around it.
          </p>
        </div>

        {/* Section One */}
        <div id="landscape" className="mb-9 scroll-mt-8">
          <h3 className="mb-3 font-display text-[21px] font-semibold leading-tight text-foreground">
            A landscape, not a single monument
          </h3>

          <div className="space-y-3 text-[13px] leading-[1.75] text-muted-foreground">
            <p>
              The Giza pyramids form part of a larger funerary
              landscape. Tombs, temple remains and the spaces between
              them help place the famous forms in context. Rather than
              treating each pyramid as an isolated object, look at how
              the complex occupies the plateau and meets the desert edge.
            </p>

            <p>
              Associated with the Old Kingdom, this landscape offers a
              starting point for exploring ancient ideas of kingship
              and remembrance. Its many layers reward a slower, more
              attentive encounter.
            </p>
          </div>
        </div>

        {/* Section Two */}
        <div id="human-scale" className="mb-8 scroll-mt-8">
          <h3 className="mb-3 font-display text-[21px] font-semibold leading-tight text-foreground">
            The human scale of stone
          </h3>

          <div className="space-y-3 text-[13px] leading-[1.75] text-muted-foreground">
            <p>
              Monumental scale can make human effort disappear from
              view. Look more closely and it returns: in the rhythm of
              masonry, the handling of surfaces and the patient
              repetition of construction. These details invite
              questions about skill, organisation and the lives
              behind the monuments.
            </p>

            <p>
              There is no need to reduce that story to a single theory
              or an easy explanation. Archaeology is an ongoing
              conversation, shaped by evidence, interpretation and
              new questions.
            </p>
          </div>
        </div>

        {/* Pull Quote */}
        <blockquote className="my-9 border-l-[3px] border-foreground/20 bg-surface/50 py-5 pl-5 pr-4 sm:pl-6">
          <p className="font-display text-[21px] italic leading-[1.55] text-muted-foreground">
            “A place becomes richer when we learn not only what to
            look at, but how to look.”
          </p>
        </blockquote>

        {/* Section Three */}
        <div id="heritage" className="mb-9 scroll-mt-8">
          <h3 className="mb-3 font-display text-[21px] font-semibold leading-tight text-foreground">
            A heritage still in conversation
          </h3>

          <p className="text-[13px] leading-[1.75] text-muted-foreground">
            Giza is both an ancient site and part of present-day
            Egypt. The city nearby, the work of caring for the
            plateau and the perspectives of its visitors all belong
            to its continuing story. Leave room for that living
            context alongside the ancient one.
          </p>
        </div>

        {/* Curatorial Note */}
        <div className="border-t border-foreground/15 pt-5">
          <p className="text-[10px] leading-[1.8] text-muted-foreground">
            Curatorial note: this is sample editorial copy for the
            design, not a research reference. Historical
            interpretation and final narration require specialist
            review before publication.
          </p>
        </div>

      </article>
    </div>
  );
};

export default WrittenStory;
