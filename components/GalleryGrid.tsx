import Image from "next/image";
import { galleryItems } from "@/lib/content/gallery";

const categoryBadge: Record<string, string> = {
  "교육": "bg-care-500",
  "나눔": "bg-amber-500",
  "예배": "bg-blue-500",
  "공동체": "bg-primary-600",
};

type Props = { limit?: number; columns?: 2 | 3 };

export default function GalleryGrid({ limit, columns = 3 }: Props) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;
  const gridCols = columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-5 md:gap-6`}>
      {items.map((g, i) => (
        <figure
          key={g.id}
          className="relative rounded-2xl overflow-hidden shadow-lg group animate-fade-in-up bg-warm-100 aspect-[4/3]"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <Image
            src={g.src}
            alt={g.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sacred-900/85 via-sacred-900/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-semibold text-white px-2.5 py-1 rounded-full ${categoryBadge[g.category]}`}>
              {g.category}
            </span>
          </div>
          <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="font-medium text-sm md:text-base leading-snug">{g.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
