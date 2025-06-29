import { ImageResponse } from "next/og";
import { baseURL, person } from "@/resources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    let url = new URL(request.url);
    let title = url.searchParams.get("title") || "Portfolio";

    // Construct avatar URL more carefully
    const avatarUrl = person.avatar.startsWith('http') 
      ? person.avatar 
      : `${baseURL}${person.avatar}`;

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "6rem",
          background: "#151515",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4rem",
            fontStyle: "normal",
            color: "white",
          }}
        >
          <span
            style={{
              padding: "1rem",
              fontSize: "6rem",
              lineHeight: "8rem",
              letterSpacing: "-0.05em",
              whiteSpace: "wrap",
              textWrap: "balance",
              overflow: "hidden"
            }}
          >
            {title}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <img
              src={avatarUrl}
              style={{
                width: "12rem",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "4.5rem",
                  lineHeight: "4.5rem",
                  whiteSpace: "pre-wrap",
                  textWrap: "balance",
                }}
              >
                {person.name}
              </span>
              <span
                style={{
                  fontSize: "2.5rem",
                  lineHeight: "2.5rem",
                  whiteSpace: "pre-wrap",
                  textWrap: "balance",
                  opacity: "0.6",
                }}
              >
                {person.role}
              </span>
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1280,
        height: 720,
      },
    );
  } catch (error) {
    console.error('OG generation error:', error);
    return new Response('Error generating OG image', { status: 500 });
  }
}