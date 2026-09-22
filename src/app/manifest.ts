import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tieko Media",
    short_name: "Tieko Media",
    description: "Business foundations, media, content and digital systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F0E7",
    theme_color: "#B42318",
    icons: [{ src: "/brand/tieko-logo.png", sizes: "500x499", type: "image/png" }],
  };
}
