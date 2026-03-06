import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = { title: string; desc: string; icon: string };

type Props = { steps: Step[] };

const ServiceProcess = ({ steps }: Props) => {
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 80%"
            }
          }
        );
      }
      if (stepsRef.current.length) {
        gsap.from(stepsRef.current, {
          y: 18,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: stepsRef.current[0]?.parentElement,
            start: "top 80%"
          }
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-accent">Proces</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Samen van idee naar live</h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-soft">
          <div ref={lineRef} className="absolute left-6 right-6 top-1/2 hidden h-1 rounded-full bg-gradient-to-r from-accent to-indigo-500 lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                ref={(el) => {
                  if (el) stepsRef.current[idx] = el;
                }}
                className="relative flex h-full flex-col gap-2 rounded-2xl bg-white p-5 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.45)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-midnight text-white text-lg">
                    {step.icon}
                  </span>
                  <p className="text-sm font-semibold text-accent">Stap {idx + 1}</p>
                </div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;




