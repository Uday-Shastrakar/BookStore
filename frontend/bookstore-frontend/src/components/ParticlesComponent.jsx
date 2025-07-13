import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id = "tsparticles" }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    background: {
      color: { value: "#1a1a1a" },
    },
    fullScreen: { enable: false }, // We're using custom container sizing
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
          parallax: { enable: true, force: 30, smooth: 10 },
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        grab: {
          distance: 160,
          links: {
            opacity: 0.5,
          },
        },
        repulse: {
          distance: 120,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          area: 900,
        },
      },
      color: {
        value: ["#ffffff", "#cccccc", "#aaaaaa"], // Subtle gray mix
      },
      links: {
        enable: true,
        color: "#888",
        distance: 140,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        outModes: { default: "bounce" },
        random: true,
        straight: false,
      },
      opacity: {
        value: 0.6,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
    },
    detectRetina: true,
  }), []);

  return init ? (
    <Particles
      id={id}
      options={options}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  ) : null;
};

export default ParticlesComponent;
