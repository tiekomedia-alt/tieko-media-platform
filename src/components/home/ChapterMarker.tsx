type ChapterMarkerProps = {
  number: "01" | "02" | "03" | "04";
  tone?: "light" | "dark";
};

export default function ChapterMarker({ number, tone = "light" }: ChapterMarkerProps) {
  return (
    <div className={`chapter-marker chapter-marker-${tone}`} aria-hidden="true">
      <span>{number}</span>
      <i />
      <b />
    </div>
  );
}
