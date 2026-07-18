import { HERO_BENEFITS } from "../config";

export const HeroBenefits = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      {HERO_BENEFITS.map((benefit) => (
        <li key={benefit.id} className="flex items-center gap-2">
          {benefit.icon}
          <span className="text-sm font-medium text-on-surface">
            {benefit.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
