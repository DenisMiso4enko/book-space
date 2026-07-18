type ListingAboutProps = {
  description: string;
};

export function ListingAbout({ description }: ListingAboutProps) {
  const paragraphs = description
    .split(/\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  const content =
    paragraphs.length > 1
      ? paragraphs
      : [
          description,
          "Members enjoy flexible day passes, high-speed connectivity, and a calm floor plan designed for deep work and small team sessions.",
        ];

  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-on-surface 640:text-2xl">
        About the space
      </h2>
      <div className="space-y-4 text-base leading-7 text-on-surface-variant">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
