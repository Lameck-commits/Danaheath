import { createFileRoute } from "@tanstack/react-router";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Music2, RotateCcw } from "lucide-react";
import { Room, Studio } from "@/game/Studio";
import { setMusicMuted, startMusic } from "@/game/music";
import {
  DEFAULT_LOOK,
  ITEMS,
  THEMES,
  scoreLook,
  type Look,
  type Slot,
  type Vibe,
} from "@/game/wardrobe";

export const Route = createFileRoute("/")({ component: Home });

const SLOTS: { id: Slot; label: string }[] = [
  { id: "hair", label: "Hair" },
  { id: "top", label: "Top" },
  { id: "bottom", label: "Bottom" },
  { id: "shoes", label: "Shoes" },
  { id: "extra", label: "Extra" },
];

function loadLook(): Look {
  try {
    const raw = localStorage.getItem("lumen-look");
    if (!raw) return { ...DEFAULT_LOOK };
    const parsed = JSON.parse(raw) as Look;
    return { ...DEFAULT_LOOK, ...parsed };
  } catch {
    return { ...DEFAULT_LOOK };
  }
}

function Home() {
  const [started, setStarted] = useState(false);
  const [look, setLook] = useState<Look>(DEFAULT_LOOK);
  const [slot, setSlot] = useState<Slot>("hair");
  const [theme, setTheme] = useState<Vibe>("glam");
  const [left, setLeft] = useState(45);
  const [score, setScore] = useState<number | null>(null);
  const [best, setBest] = useState(0);
  const [pose, setPose] = useState<"idle" | "runway">("idle");
  const [muted, setMuted] = useState(false);
  const [intro, setIntro] = useState<"wait" | "play" | "done">("wait");
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const joy = useRef({ x: 0, y: 0 });
  const qaKeys = useRef<string[] | null>(null);
  const stick = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    setLook(loadLook());
    const b = Number(localStorage.getItem("lumen-best") || "0");
    if (!Number.isNaN(b)) setBest(b);
    setTheme(THEMES[Math.floor(Math.random() * THEMES.length)]!.id);
    if (localStorage.getItem("dana-intro") === "1") {
      setIntro("done");
      setStarted(true);
    } else {
      setIntro("play");
    }
  }, []);

  useEffect(() => {
    if (!started || score != null) return;
    const id = window.setInterval(() => {
      setLeft((s) => {
        if (s <= 1) {
          window.clearInterval(id);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [started, score]);

  useEffect(() => {
    if (left !== 0 || !started || score != null) return;
    const s = scoreLook(look, theme);
    setScore(s);
    setPose("runway");
    setBest((b) => {
      const next = Math.max(b, s);
      localStorage.setItem("lumen-best", String(next));
      return next;
    });
  }, [left, started, score, look, theme]);

  useEffect(() => {
    localStorage.setItem("lumen-look", JSON.stringify(look));
  }, [look]);

  const themeMeta = useMemo(() => THEMES.find((t) => t.id === theme)!, [theme]);
  const options = ITEMS.filter((i) => i.slot === slot);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (intro !== "play") return;
    const v = videoRef.current;
    if (!v) return;
    void v.play().catch(() => undefined);
  }, [intro]);

  useEffect(() => {
    if (intro !== "done") return;
    const go = () => startMusic();
    window.addEventListener("pointerdown", go);
    window.addEventListener("keydown", go);
    return () => {
      window.removeEventListener("pointerdown", go);
      window.removeEventListener("keydown", go);
    };
  }, [intro]);

  function finishIntro() {
    localStorage.setItem("dana-intro", "1");
    setIntro("done");
    setStarted(true);
    startMusic();
  }

  function again() {
    setScore(null);
    setLeft(45);
    setPose("idle");
    setTheme(THEMES[Math.floor(Math.random() * THEMES.length)]!.id);
  }

  function onPointer(e: React.PointerEvent, active: boolean) {
    const el = stick.current;
    if (!el) return;
    if (!active) {
      dragging.current = false;
      joy.current = { x: 0, y: 0 };
      el.style.transform = "translate(0px, 0px)";
      return;
    }
    dragging.current = true;
    const r = el.parentElement!.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const max = 36;
    const len = Math.hypot(dx, dy) || 1;
    if (len > max) {
      dx = (dx / len) * max;
      dy = (dy / len) * max;
    }
    joy.current = { x: dx / max, y: dy / max };
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  return (
    <main className="relative h-full min-h-screen overflow-hidden bg-ink text-paper">
      <Canvas
        shadows
        camera={{ position: [0, 1.5, -2], fov: 35 }}
        className="absolute inset-0 h-full w-full touch-none"
      >
        <color attach="background" args={["#f8d5e4"]} />
        <hemisphereLight args={["#fff0f6", "#e7b7c8", 0.85]} />
        <directionalLight position={[3, 6, 4]} intensity={1.1} castShadow />
        <Suspense fallback={null}>
          <Room />
          <Studio
            look={look}
            pose={pose}
            joy={joy}
            qaKeys={qaKeys}
            onMoved={() => {}}
            onReady={() => setReady(true)}
          />
        </Suspense>
      </Canvas>

      <header className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
        <div className="pointer-events-auto rounded-2xl bg-panel/90 px-4 py-3 text-ink shadow-lg backdrop-blur">
          <p className="font-display text-xl leading-none">Dana Heath</p>
        </div>
        <div className="pointer-events-auto rounded-2xl bg-ink/80 px-4 py-3 text-right backdrop-blur">
          <p className="font-display text-lg leading-tight">{themeMeta.label}</p>
          <p className="mt-1 text-sm">
            {score == null ? `${left}s` : `${score} pts`} · best {best}
          </p>
        </div>
      </header>

      <aside className="absolute inset-x-0 bottom-0 flex max-h-[42vh] flex-col gap-2 p-3 md:inset-x-auto md:right-4 md:bottom-4 md:max-h-none md:w-80">
        <div className="rounded-2xl bg-panel p-3 text-ink shadow-xl">
          <div className="mb-2 flex gap-1 overflow-x-auto">
            {SLOTS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSlot(s.id)}
                className={
                  "min-h-11 shrink-0 rounded-full px-3 text-sm font-semibold " +
                  (slot === s.id ? "bg-rose text-paper" : "bg-paper text-ink")
                }
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="grid max-h-36 grid-cols-2 gap-2 overflow-y-auto md:max-h-64">
            {options.map((item) => {
              const on = look[item.slot] === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLook((l) => ({ ...l, [item.slot]: item.id }))}
                  className={
                    "flex min-h-11 items-center gap-2 rounded-xl border px-2 py-2 text-left text-sm " +
                    (on ? "border-rose bg-paper" : "border-transparent bg-paper/70")
                  }
                >
                  <span
                    className="size-6 shrink-0 rounded-full border border-ink/10"
                    style={{ background: item.color }}
                  />
                  <span className="block font-semibold leading-tight">{item.name}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-ink text-paper"
              onClick={() => setMuted((m) => {
                const next = !m;
                setMusicMuted(next);
                return next;
              })}
            >
              <Music2 className="size-4" />
              {muted ? "Sound off" : "Sound on"}
            </button>
            <button
              type="button"
              className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-rose text-paper"
              onClick={again}
            >
              <RotateCcw className="size-4" />
              New theme
            </button>
          </div>
        </div>
      </aside>

      <div
        className="absolute bottom-[46vh] left-4 size-24 rounded-full bg-ink/35 md:hidden"
        onPointerDown={(e) => onPointer(e, true)}
        onPointerMove={(e) => dragging.current && onPointer(e, true)}
        onPointerUp={(e) => onPointer(e, false)}
        onPointerCancel={(e) => onPointer(e, false)}
      >
        <div ref={stick} className="absolute top-7 left-7 size-10 rounded-full bg-paper" />
      </div>

      {intro === "play" && (
        <div className="absolute inset-0 z-40 bg-[#03101f]">
          <video
            ref={videoRef}
            src="/intro.mp4"
            className="h-full w-full object-cover"
            autoPlay
            playsInline
            onEnded={finishIntro}
            onError={finishIntro}
          />
          <button
            type="button"
            onClick={finishIntro}
            className="absolute right-4 bottom-4 min-h-11 rounded-full bg-[#03101f]/80 px-4 text-sm text-[#d7ecff]"
          >
            Skip
          </button>
        </div>
      )}

      {intro === "wait" && !ready && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#03101f]">
          <img src="/brand.png" alt="Wempsy Productions" className="w-[min(78vw,440px)]" />
        </div>
      )}

      {score != null && (
        <div className="pointer-events-none absolute top-28 left-1/2 -translate-x-1/2 rounded-full bg-ink px-5 py-2 text-paper shadow-lg">
          {score}
        </div>
      )}
    </main>
  );
}
