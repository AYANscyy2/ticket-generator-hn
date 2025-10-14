import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);

    const name = searchParams.get("name") || "Participant Name";
    const team = searchParams.get("team") || "Team Alpha";
    const theme = searchParams.get("theme") || "blue";

    const themeColors = {
      blue: "#00C2FF",
      green: "#14F195",
      violet: "#510072",
    };
    const color = themeColors[theme] || themeColors.blue;

    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              width: "1100px",
              height: "500px",
              borderRadius: "20px",
              background: `linear-gradient(90deg, ${color}33, #fff)`,
              border: `6px solid ${color}`,
              padding: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "70px", color }}>{name}</h1>
            <h3 style={{ fontSize: "40px", color: "#333" }}>Team: {team}</h3>
            <p style={{ fontSize: "28px", color: "#777", marginTop: "20px" }}>
              HackNITR 7.0 Ticket
            </p>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (e) {
    return new Response("Failed to generate image", { status: 500 });
  }
}