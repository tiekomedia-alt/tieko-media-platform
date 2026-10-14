import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { getStoreProduct } from "@/lib/store-products";

export const alt = "Tieko Store product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const accentColours = {
  red: "#E5252A",
  gold: "#B1882B",
  green: "#28795F",
  ink: "#252321",
} as const;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getStoreProduct(slug);
  if (!product) notFound();
  const accent = accentColours[product.accent];
  const imageExtension = product.image?.split(".").pop()?.toLowerCase();
  const imageMimeType = imageExtension === "webp" ? "image/webp" : imageExtension === "png" ? "image/png" : "image/jpeg";
  const imageSrc = product.image
    ? `data:${imageMimeType};base64,${await readFile(join(process.cwd(), "public", product.image), "base64")}`
    : null;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#F4F0E7", color: "#111111", padding: "64px 72px", fontFamily: "Arial, sans-serif" }}>
        {imageSrc && (
          <div style={{ position: "absolute", display: "flex", left: 0, top: 0, bottom: 0, width: "53%", overflow: "hidden", background: "#252321" }}>
            <img src={imageSrc} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}
        <div style={{ position: "absolute", width: 600, height: 150, borderRadius: 999, background: accent, right: -235, bottom: 100, transform: "rotate(-24deg)" }} />
        <div style={{ position: "absolute", width: 340, height: 340, borderRadius: 999, border: `2px solid ${accent}`, right: 95, top: 90, opacity: 0.5 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: imageSrc ? "52%" : "100%", marginLeft: imageSrc ? "auto" : 0, position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#B42318", fontSize: 24, letterSpacing: 5, fontWeight: 700 }}>TIEKO STORE</span>
            <span style={{ color: "#5F5B55", fontSize: 22 }}>{product.category.toUpperCase()}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 900 }}>
            <span style={{ color: accent, fontSize: 23, letterSpacing: 4, marginBottom: 20, textTransform: "uppercase" }}>{product.format}</span>
            <span style={{ fontSize: product.title.length > 42 ? 68 : 84, lineHeight: 0.98, fontWeight: 800, letterSpacing: -3 }}>{product.title}</span>
          </div>
          <span style={{ color: "#5F5B55", fontSize: 24 }}>tiekomedia.com/store</span>
        </div>
      </div>
    ),
    size,
  );
}
