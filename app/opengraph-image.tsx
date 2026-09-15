import { ImageResponse } from "next/og";

export const alt =
  "Spark Life Collective — a nonprofit ministry. Symbolic dawn over still ground; no people.";
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
          justifyContent: "flex-end",
          background: "#14110f",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "#CC9752",
            opacity: 0.35,
            left: 340,
            top: 220,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 220,
            background: "#1a1210",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#E4CB8A",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Nonprofit ministry
          </div>
          <div
            style={{
              color: "#ECEEE9",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 500,
            }}
          >
            Spark Life Collective
          </div>
          <div style={{ color: "#E4CB8A", fontSize: 28, marginTop: 16 }}>
            Free retreats. Rooted in faith. Open to anyone.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
