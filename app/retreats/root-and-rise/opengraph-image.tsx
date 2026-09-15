import { ImageResponse } from "next/og";

export const alt =
  "Root & Rise — October 14–15, 2026, 1–2 PM ET. Anchored faith through hardship. A sacred reset.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#023550",
          padding: "64px 72px",
        }}
      >
        <div style={{ color: "#E4CB8A", fontSize: 22 }}>Spark Life Collective</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#EEEEE9", fontSize: 84, lineHeight: 1, fontWeight: 500 }}>
            Root & Rise
          </div>
          <div style={{ color: "#CC9752", fontSize: 32, marginTop: 20 }}>
            Anchored faith through hardship. A sacred reset.
          </div>
          <div style={{ color: "#EEEEE9", fontSize: 24, marginTop: 36, opacity: 0.85 }}>
            October 14–15, 2026 · Free virtual retreat · 1–2 PM ET
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
