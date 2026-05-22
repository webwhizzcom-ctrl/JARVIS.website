import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JARVIS Devs AI — Futuristic AI Assistant Interface by DEV";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          color: "#e4e4e7",
          fontFamily: "monospace",
        }}
      >
        {/* Arc Reactor ring */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "3px solid rgba(212, 162, 47, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: "2px solid rgba(212, 162, 47, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "#d4a22f",
                boxShadow: "0 0 40px rgba(212, 162, 47, 0.8)",
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "0.06em",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          JARVIS <span style={{ color: "#d4a22f" }}>Devs AI</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 20,
            color: "#71717a",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginTop: 16,
          }}
        >
          Futuristic AI Assistant by DEV
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 13,
            color: "#52525b",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Iron Man Inspired · Voice Controlled · Personal AI System
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
