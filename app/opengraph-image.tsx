import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8f7f2",
          color: "#161615",
          padding: 72,
          border: "18px solid #161615",
          fontFamily: "Georgia"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: 38, letterSpacing: 3, textTransform: "uppercase" }}>WhiteSpc</div>
          <div style={{ maxWidth: 850, fontSize: 96, lineHeight: 0.94 }}>
            Quiet strategy. Campaigns that make noise.
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 30 }}>
            <span>Strategy</span>
            <span>Performance</span>
            <span>Content</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 86,
            top: 92,
            width: 210,
            height: 210,
            background: "#dfe56a",
            border: "6px solid #161615"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 160,
            bottom: 92,
            width: 250,
            height: 90,
            background: "#c35b35"
          }}
        />
      </div>
    ),
    size
  );
}
