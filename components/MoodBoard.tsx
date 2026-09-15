import Image from "next/image";

const tiles = [
  {
    src: "/images/mood/horse.jpg",
    alt: "A woman standing with a white horse in a sunlit desert landscape.",
    caption: "Spark the real You",
    className: "lg:col-span-2",
  },
  {
    src: "/images/mood/dance.jpg",
    alt: "A circle of people dancing around a bonfire at dusk.",
  },
  {
    src: "/images/mood/couple.jpg",
    alt: "A couple in floral crowns, holding hands with their foreheads together.",
  },
  {
    src: "/images/mood/hands-sun.jpg",
    alt: "Cupped hands catching sunlight.",
    caption: "Do more of what sets your soul on fire!",
  },
  {
    src: "/images/mood/gathering.jpg",
    alt: "A diverse group gathered in a circle indoors.",
    className: "lg:col-span-2",
  },
] as const;

export function MoodBoard() {
  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <figure
            key={tile.src}
            className={`relative min-h-56 overflow-hidden ${"className" in tile ? tile.className : ""}`}
          >
            <Image
              src={tile.src}
              alt={tile.alt}
              width={973}
              height={666}
              className="h-full min-h-56 w-full object-cover"
              sizes="(max-width: 1024px) 50vw, 40vw"
            />
            {"caption" in tile && tile.caption ? (
              <figcaption className="absolute inset-x-0 bottom-0 bg-navy/60 px-4 py-4 font-script text-2xl leading-tight text-gold-light">
                {tile.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
