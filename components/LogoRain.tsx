import Image from "next/image";

const drops = Array.from({ length: 30 }).map((_, index) => ({
  id: index,
  left: `${(index * 7 + (index % 3) * 4) % 100}%`,
  size: `${28 + (index % 6) * 10}px`,
  duration: `${9 + (index % 7)}s`,
  delay: `${(index % 9) * -1.6}s`,
  top: `${-12 - (index % 5) * 15}%`,
  opacity: 0.14 + (index % 5) * 0.02
}));

export function LogoRain() {
  return (
    <div className="logoRain" aria-hidden>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="logoDrop"
          style={{
            left: drop.left,
            top: drop.top,
            ["--size" as string]: drop.size,
            ["--duration" as string]: drop.duration,
            ["--delay" as string]: drop.delay,
            opacity: drop.opacity
          }}
        >
          <Image src="/mushee-logo.jpg" alt="" fill sizes="80px" style={{ objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}
