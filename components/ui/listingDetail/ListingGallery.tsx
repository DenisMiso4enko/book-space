import Image from "next/image";

type ListingGalleryProps = {
  title: string;
  images: string[];
};

export function ListingGallery({ title, images }: ListingGalleryProps) {
  const [primary, ...rest] = images;

  return (
    <div className="grid grid-cols-1 gap-3 768:grid-cols-2 768:gap-4">
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-surface-container-low 768:aspect-auto 768:min-h-[420px]">
        <Image
          src={primary}
          alt={`${title} — main view`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 768:grid-cols-1 768:gap-4">
        {rest.slice(0, 3).map((src, index) => (
          <div
            key={src}
            className="relative aspect-square overflow-hidden rounded-xl bg-surface-container-low 768:aspect-[16/9]"
          >
            <Image
              src={src}
              alt={`${title} — gallery ${index + 2}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
