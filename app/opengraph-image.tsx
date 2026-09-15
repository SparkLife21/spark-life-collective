import { ImageResponse } from "next/og";

export const alt = "Spark Life Collective — nonprofit ministry. Navy and gold wordmark.";
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
          justifyContent: "center",
          background: "#023550",
          padding: "72px",
        }}
      >
        <div
          style={{
            color: "#E4CB8A",
            fontSize: 28,
            marginBottom: 18,
          }}
        >
          Nonprofit ministry
        </div>
        <div
          style={{
            color: "#EEEEE9",
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 500,
          }}
        >
          Spark Life Collective
        </div>
        <div style={{ color: "#CC9752", fontSize: 28, marginTop: 20 }}>
          Free retreats. Rooted in faith. Open to anyone.
        </div>
      </div>
    ),
    { ...size },
  );
}
