import { ImageResponse } from "next/og";

// Rendered once at build time into out/opengraph-image.png (a real file with a
// .png extension, which GitHub Pages serves with the right content type).
export const dynamic = "force-static";

export function GET() {
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
          color: "#ecebe8",
          background: "#0a0a0c",
          backgroundImage:
            "radial-gradient(ellipse 900px 500px at 50% -5%, rgba(180,140,255,.35), transparent 60%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, fontWeight: 600 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #b894ff, #6ad2ff)",
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>Fabiano Arthur</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 92, lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 600 }}>
            Software with quiet precision.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "rgba(236,235,232,0.72)", maxWidth: 900, lineHeight: 1.35 }}>
            Full-stack developer · multi-agent workflows for Claude Code, web apps and APIs.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "rgba(236,235,232,0.6)" }}>
          github.com/FabianoArthur
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
