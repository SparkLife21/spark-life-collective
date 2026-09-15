import { ImageResponse } from "next/og";

export const alt =
  "Root & Rise — October 6–7, 2026. Anchored faith through hardship. A sacred reset. Symbolic dawn; no people.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#14110f",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            color: "#E4CB8A",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Spark Life Collective
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ECEEE9",
              fontSize: 84,
              lineHeight: 1,
              fontWeight: 500,
            }}
          >
            Root & Rise
          </div>
          <div style={{ color: "#E4CB8A", fontSize: 32, marginTop: 20 }}>
            Anchored faith through hardship. A sacred reset.
          </div>
          <div style={{ color: "#ECEEE9", fontSize: 24, marginTop: 36, opacity: 0.85 }}>
            October 6–7, 2026 · Free virtual retreat · 1:00 PM ET
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
