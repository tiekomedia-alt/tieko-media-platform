import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getInsight } from "@/lib/insights";

export const alt = "Tieko Media insight";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accentColours = {
  red: "#E5252A",
  gold: "#B1882B",
  ink: "#252321",
} as const;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const accent = accentColours[insight.accent];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F4F0E7",
          color: "#111111",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#B42318", fontSize: 24, letterSpacing: 5, fontWeight: 700 }}>TIEKO MEDIA / INSIGHTS</span>
            <span style={{ fontSize: 24, color: "#5F5B55" }}>{insight.coverNumber}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 940 }}>
            <span style={{ color: accent, fontSize: 23, letterSpacing: 4, marginBottom: 20, textTransform: "uppercase" }}>{insight.category}</span>
            <span style={{ fontSize: insight.title.length > 65 ? 62 : 76, lineHeight: 1.02, fontWeight: 800, letterSpacing: -2.5 }}>{insight.title}</span>
          </div>
          <span style={{ fontSize: 24, color: "#5F5B55" }}>tiekomedia.com</span>
        </div>
        <div style={{ position: "absolute", width: 620, height: 145, borderRadius: 999, background: accent, right: -260, bottom: 115, transform: "rotate(-24deg)", opacity: 0.96 }} />
        <div style={{ position: "absolute", width: 330, height: 330, borderRadius: 999, border: `2px solid ${accent}`, right: 100, top: 85, opacity: 0.45 }} />
      </div>
    ),
    size,
  );
}
