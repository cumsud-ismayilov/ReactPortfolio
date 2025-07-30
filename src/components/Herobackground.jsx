import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" }, // Gradient üçün şəffaf saxladıq
      fpsLimit: 60,
      particles: {
        number: { value: 100, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" }, // ulduzlar ağ
        shape: { type: "circle" },
        opacity: { value: 1, random: true },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: false },
        },
        modes: { repulse: { distance: 50 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 h-[100vh]">
      {/* 🌌 Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0633] via-[#0d021f] to-black"  />

      {/* 🔵 Blur dairələr */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-800 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-700 opacity-20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-900 opacity-20 rounded-full blur-3xl" />

      {/* ⭐ Ulduz effektləri */}
      <Particles id="tsparticles" options={options} />
    </div>
  );
}
