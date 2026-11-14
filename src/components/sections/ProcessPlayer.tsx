"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { processSteps } from "@/lib/process";
import { cn } from "@/lib/utils";

const SCENE_MS = 5000;
const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeReduced(cb: () => void) {
  const m = window.matchMedia(REDUCED);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}
const getReduced = () => window.matchMedia(REDUCED).matches;
const getReducedServer = () => false;

const delay = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

function Icon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function SceneIdea() {
  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <div
        className="pop flex h-20 w-20 items-center justify-center rounded-full bg-teal-light/20 text-teal-light shadow-[0_0_60px_10px_rgba(111,177,196,0.35)]"
        style={delay(0)}
      >
        <Icon className="h-9 w-9">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </Icon>
      </div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {["A business", "A school", "A learning platform"].map((t, i) => (
          <span
            key={t}
            className="pop rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
            style={delay(0.4 + i * 0.35)}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SceneDesign() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4 px-4">
      <div
        className="pop w-full rounded-xl border border-white/20 bg-white/5 p-3"
        style={delay(0)}
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="ml-2 h-2.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="pop mb-3 flex gap-3" style={delay(0.3)}>
          <span className="h-2 w-10 rounded-full bg-white/30" />
          <span className="h-2 w-10 rounded-full bg-white/30" />
          <span className="h-2 w-10 rounded-full bg-white/30" />
        </div>
        <div
          className="pop mb-3 rounded-lg bg-white/10 p-3"
          style={delay(0.5)}
        >
          <div className="mb-2 h-2.5 w-2/3 rounded-full bg-white/70" />
          <div className="mb-3 h-2 w-1/2 rounded-full bg-white/30" />
          <div className="h-6 w-20 rounded-full bg-ocean" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0.8, 0.95, 1.1].map((d) => (
            <div
              key={d}
              className="pop h-12 rounded-lg bg-white/10"
              style={delay(d)}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        {["bg-ocean", "bg-teal-light", "bg-mist-soft", "bg-white"].map(
          (c, i) => (
            <span
              key={c}
              className={cn("pop h-6 w-6 rounded-full", c)}
              style={delay(1.4 + i * 0.2)}
            />
          )
        )}
      </div>
    </div>
  );
}

function SceneBuild() {
  const lines = [
    ["w-1/3", "bg-teal-light"],
    ["w-2/3", "bg-white/60"],
    ["w-1/2", "bg-white/30"],
    ["w-3/4", "bg-ocean"],
    ["w-2/5", "bg-white/40"],
  ];
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-5 px-4">
      <div className="w-full rounded-xl border border-white/20 bg-white/5 p-4">
        <div className="flex flex-col gap-2.5">
          {lines.map(([w, c], i) => (
            <div
              key={i}
              className={cn("grow-x h-2.5 rounded-full", w, c)}
              style={delay(0.15 + i * 0.25)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {["Fast", "Secure", "Responsive"].map((t, i) => (
          <span
            key={t}
            className="pop inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-navy"
            style={delay(1.5 + i * 0.4)}
          >
            <Icon className="h-4 w-4 text-ocean">
              <path d="M20 6 9 17l-5-5" />
            </Icon>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SceneGrow() {
  const bars = [
    { label: "Launch", h: "h-16" },
    { label: "Support", h: "h-28" },
    { label: "Scale", h: "h-40" },
  ];
  return (
    <div className="flex flex-col items-center gap-3 px-4">
      <div className="pop text-teal-light" style={delay(1.4)}>
        <Icon className="h-8 w-8">
          <path d="M16 7h6v6" />
          <path d="m22 7-8.5 8.5-5-5L2 17" />
        </Icon>
      </div>
      <div className="flex items-end gap-4 sm:gap-6">
        {bars.map((b, i) => (
          <div key={b.label} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "grow-y w-16 rounded-t-xl bg-linear-to-t from-ocean to-teal-light sm:w-20",
                b.h
              )}
              style={delay(0.2 + i * 0.45)}
            />
            <span className="text-xs font-bold text-white/80 sm:text-sm">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const scenes = [
  <SceneIdea key="idea" />,
  <SceneDesign key="design" />,
  <SceneBuild key="build" />,
  <SceneGrow key="grow" />,
];

export function ProcessPlayer() {
  const reduced = useSyncExternalStore(
    subscribeReduced,
    getReduced,
    getReducedServer
  );
  // null = follow the visitor's motion setting, true/false = they pressed the button
  const [choice, setChoice] = useState<boolean | null>(null);
  const playing = choice ?? !reduced;

  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const indexRef = useRef(0);

  // Progress is written straight to a CSS variable, so the page does not re-render every frame.
  const setProgress = useCallback((v: number) => {
    progressRef.current = v;
    rootRef.current?.style.setProperty("--p", String(v));
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView) return;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;
      let p = progressRef.current + dt / SCENE_MS;
      if (p >= 1) {
        p = 0;
        indexRef.current = (indexRef.current + 1) % processSteps.length;
        setIndex(indexRef.current);
      }
      setProgress(p);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, inView, setProgress]);

  function goTo(i: number) {
    indexRef.current = i;
    setIndex(i);
    setProgress(0);
  }

  const step = processSteps[index];

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-3xl bg-linear-to-br from-navy to-[#12485c] p-4 text-white shadow-[0_30px_60px_-30px_rgba(11,42,54,0.8)] sm:p-6"
    >
      <div className="flex min-h-68 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a2430] py-8 sm:min-h-80">
        <div aria-hidden="true" key={index} className="flex w-full justify-center">
          {scenes[index]}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1 sm:mt-6">
        <p className="text-sm font-semibold text-teal-light">
          Step {index + 1}: {step.label}
        </p>
        <h3 className="text-2xl font-extrabold tracking-tight">{step.title}</h3>
        <p className="text-white/75">{step.text}</p>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setChoice(!playing)}
          aria-label={playing ? "Pause animation" : "Play animation"}
          className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-mist-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            {playing ? (
              <>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </>
            ) : (
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
            )}
          </svg>
        </button>

        <ol className="grid flex-1 grid-cols-4 gap-2">
          {processSteps.map((s, i) => (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to step ${i + 1}: ${s.label}`}
                aria-current={i === index ? "step" : undefined}
                className="flex min-h-11 w-full touch-manipulation flex-col justify-center gap-1.5 rounded text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-light"
              >
                <span className="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                  <span
                    className="block h-full rounded-full bg-teal-light"
                    style={{
                      width:
                        i < index
                          ? "100%"
                          : i === index
                            ? "calc(var(--p, 0) * 100%)"
                            : "0%",
                    }}
                  />
                </span>
                <span
                  className={cn(
                    "text-xs font-semibold sm:text-sm",
                    i === index ? "text-white" : "text-white/55"
                  )}
                >
                  {s.label}
                </span>
              </button>
            </li>
          ))}
        </ol>

        <span className="shrink-0 text-xs font-semibold tabular-nums text-white/60 sm:text-sm">
          {index + 1} / {processSteps.length}
        </span>
      </div>
    </div>
  );
}