import type { CSSProperties } from "react";

const accentColours = {
  red: "#E5252A",
  gold: "#B1882B",
  ink: "#252321",
} as const;

type InsightCoverProps = {
  number: string;
  category: string;
  accent: keyof typeof accentColours;
  compact?: boolean;
};

export default function InsightCover({
  number,
  category,
  accent,
  compact = false,
}: InsightCoverProps) {
  return (
    <div
      className={`insight-cover ${compact ? "insight-cover-compact" : ""}`}
      style={{ "--insight-accent": accentColours[accent] } as CSSProperties}
      aria-hidden="true"
    >
      <span className="insight-cover-grid" />
      <span className="insight-cover-orbit insight-cover-orbit-one" />
      <span className="insight-cover-orbit insight-cover-orbit-two" />
      <span className="insight-cover-ribbon" />
      <span className="insight-cover-number">{number}</span>
      <span className="insight-cover-label">{category}</span>
    </div>
  );
}
