import dynamic from "next/dynamic";
import BlurFade from "@/components/magicui/blur-fade";
import { LabCard } from "@/components/lab-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

type WidgetKey = (typeof DATA.lab)[number]["widget"];

const WIDGETS: Record<WidgetKey, React.ComponentType> = {
  "genre-classifier": dynamic(() =>
    import("@/components/lab/genre-classifier").then((m) => m.GenreClassifier)
  ),
  "agent-terminal": dynamic(() =>
    import("@/components/lab/agent-terminal").then((m) => m.AgentTerminal)
  ),
  "nix-tree": dynamic(() =>
    import("@/components/lab/nix-tree").then((m) => m.NixTree)
  ),
  "primate-chart": dynamic(() =>
    import("@/components/lab/primate-chart").then((m) => m.PrimateChart)
  ),
};

export default function LabSection() {
  return (
    <section id="lab">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Lab</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Experiments & explorations
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Projects that don&apos;t have a public-facing website get their
              own interactive playground here.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[800px] mx-auto w-full">
          {DATA.lab.map((item, id) => {
            const Widget = WIDGETS[item.widget];
            return (
              <BlurFade
                key={item.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <LabCard
                  title={item.title}
                  description={item.description}
                  technologies={item.technologies}
                  links={item.links}
                >
                  <Widget />
                </LabCard>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
