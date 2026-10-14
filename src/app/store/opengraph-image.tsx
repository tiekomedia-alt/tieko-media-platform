import { ImageResponse } from "next/og";

export const alt = "Tieko Store";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#F4F0E7", color: "#111111", padding: "68px 76px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ position: "absolute", width: 520, height: 150, borderRadius: 999, background: "#E5252A", right: -190, top: 245, transform: "rotate(-28deg)" }} />
        <div style={{ position: "absolute", width: 320, height: 320, borderRadius: 999, border: "2px solid #B1882B", right: 105, top: 105 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#B42318", fontSize: 26, letterSpacing: 5, fontWeight: 700 }}>TIEKO MEDIA</span>
            <span style={{ color: "#5F5B55", fontSize: 22 }}>STORE / LAGOS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <span style={{ color: "#B42318", fontSize: 24, letterSpacing: 4, marginBottom: 22 }}>KNOWLEDGE / INFRASTRUCTURE / OBJECTS</span>
            <span style={{ fontSize: 92, lineHeight: 0.94, fontWeight: 800, letterSpacing: -3 }}>Useful things, properly explained.</span>
          </div>
          <span style={{ color: "#5F5B55", fontSize: 26 }}>tiekomedia.com/store</span>
        </div>
      </div>
    ),
    size,
  );
}
