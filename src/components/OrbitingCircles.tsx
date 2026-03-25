"use client";

import React from "react";
import ParticleSphereAnimation from "./ParticleSphere";

const orbits = [
  {
    size: "w-[196px] h-[196px] md:w-[315px] md:h-[315px]",
    duration: 18,
    icons: [
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg", alt: "Rust", angle: -60 },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", alt: "React", angle: 0 },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "Python", angle: 60 },
    ],
  },
  {
    size: "w-[266px] h-[266px] md:w-[385px] md:h-[385px]",
    duration: 24,
    icons: [
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript", angle: 0 },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", alt: "MongoDB", angle: -90 },
    ],
  },
  {
    size: "w-[336px] h-[336px] md:w-[455px] md:h-[455px]",
    duration: 30,
    icons: [
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", alt: "Docker", angle: -60 },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", alt: "C++", angle: 0 },
      { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", alt: "Linux", angle: 60 },
    ],
  },
];

export default function OrbitingCirclesGlobe() {
  return (
    <div className="relative w-full h-[210px] md:h-[350px] overflow-hidden flex justify-center items-center my-12">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square pointer-events-none w-[126px] md:w-[245px] z-10 opacity-80">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-6 origin-bottom flex flex-col justify-start items-center"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="p-2 md:p-3 border border-primary/20 rounded-full bg-background/80 backdrop-blur-sm -mt-6 relative z-10 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <img
                    src={iconData.src}
                    alt={iconData.alt}
                    width={32}
                    height={32}
                    className="w-5 h-5 md:w-8 md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
