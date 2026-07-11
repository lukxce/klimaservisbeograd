import { ImageResponse } from "next/og";

import { getSiteSettings } from "@/lib/data";

export const alt = "Klima Servis Beograd";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const settings = await getSiteSettings();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a2e33 0%, #11444b 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "#14b8a6",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            ❄
          </div>
          <div style={{ fontSize: 28, color: "#9fc9c4", letterSpacing: 2 }}>
            {settings.city.toUpperCase()}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            marginTop: 40,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {settings.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#c3dad6",
            marginTop: 24,
            maxWidth: 850,
          }}
        >
          {settings.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
