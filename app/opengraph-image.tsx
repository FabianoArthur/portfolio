import { ImageResponse } from "next/og";

export const alt = "Fabiano Arthur — Software with quiet precision.";
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
          padding: "72px 80px",
          color: "#e8e6e3",
          background: "#0a0a0c",
          backgroundImage:
            "radial-gradient(ellipse 900px 500px at 50% -5%, rgba(180,140,255,.35), transparent 60%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #b48cff, #6ad2ff)",
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>Zhyorg</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              fontWeight: 600,
            }}
          >
            Software with quiet precision.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(232,230,227,0.7)",
              maxWidth: 880,
              letterSpacing: "-0.01em",
              lineHeight: 1.35,
            }}
          >
            Fabiano Arthur — full-stack developer. I build products that work,
            scale, and respect the people who use them.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "rgba(232,230,227,0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#7CFF9C",
                display: "flex",
              }}
            />
            <div style={{ display: "flex" }}>
              Available for hire · June 2026 →
            </div>
          </div>
          <div style={{ display: "flex" }}>fabianoarthur47@gmail.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
