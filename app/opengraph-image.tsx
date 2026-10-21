import { ImageResponse } from "next/og";

export const alt = "BEFAC – Bachillerato Formal de Adultos del Cauca";
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
          backgroundColor: "#f7f5f1",
          borderTop: "16px solid #b21d25",
          padding: "70px 80px",
        }}
      >
        <span
          style={{
            color: "#b21d25",
            fontSize: 34,
            letterSpacing: 10,
            fontWeight: 700,
          }}
        >
          BEFAC
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              lineHeight: 1.05,
              color: "#181719",
              margin: 0,
              fontFamily: "Georgia, serif",
            }}
          >
            <span>Bachillerato Formal</span>
            <span>de Adultos del Cauca</span>
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#706b67",
              margin: "24px 0 0",
            }}
          >
            Popayán y El Tambo · Más de 30 años formando futuro
          </p>
        </div>
        <span style={{ fontSize: 26, color: "#978f89" }}>
          bachilleratodeadultosdelcauca.com
        </span>
      </div>
    ),
    size,
  );
}
