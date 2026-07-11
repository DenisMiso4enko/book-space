type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-sm font-semibold text-secondary">{eyebrow}</span>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-6 text-on-surface-variant sm:text-lg sm:leading-7">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
