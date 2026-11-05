import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f5f0",
          color: "#121210",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 28 28">
            <rect width="28" height="28" rx="7" fill="#121210" />
            <path
              d="M8 20.5 14 7.5l6 13"
              fill="none"
              stroke="#f7f5f0"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="14" cy="16.25" r="2" fill="#3fb98a" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>Avenor</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 76, fontWeight: 600, letterSpacing: -3, lineHeight: 1.02, maxWidth: 900 }}>
            {site.tagline}
          </span>
          <span style={{ fontSize: 30, color: "#69675f" }}>
            Verified business identity, AI agent permissions, and global settlement.
          </span>
        </div>
      </div>
    ),
    size,
  );
}
