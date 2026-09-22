import { ImageResponse } from "next/og";

export const alt = "Tieko Media, business foundations, media and digital systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#F4F0E7",
        color: "#111111",
        padding: "68px 76px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "78%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: 24, fontWeight: 700 }}>
          <span style={{ width: 18, height: 18, background: "#B42318", display: "flex" }} />
          Tieko Media
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ color: "#B42318", fontSize: 21, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
            Business foundations · Media · Digital systems
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 0.96, letterSpacing: "-3px", textTransform: "uppercase" }}>
            Build a business people can find, trust and choose.
          </div>
        </div>
        <div style={{ color: "#5F5B55", fontSize: 22 }}>Built in Lagos. Useful anywhere.</div>
      </div>
      <div style={{ position: "absolute", right: -110, top: -65, width: 400, height: 760, background: "#E5252A", transform: "rotate(12deg)", display: "flex", opacity: 0.96 }} />
      <div style={{ position: "absolute", right: 80, bottom: 42, width: 210, height: 26, background: "#7A1712", transform: "rotate(-8deg)", display: "flex" }} />
    </div>,
    size,
  );
}
