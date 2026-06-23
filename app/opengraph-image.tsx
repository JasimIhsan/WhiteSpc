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
          fontFamily: "Georgia",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(90deg, rgba(22, 22, 21, 0.045) 1px, transparent 1px), linear-gradient(rgba(22, 22, 21, 0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            zIndex: 0
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", width: "55%", zIndex: 10 }}>
          <div
            style={{
              color: "#6f6a60",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 20,
              fontFamily: "sans-serif"
            }}
          >
            Digital marketing studio
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              color: "#161615",
              marginBottom: 28,
              fontWeight: 500
            }}
          >
            Quiet strategy.<br />
            Campaigns that<br />
            make noise.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#6f6a60",
              lineHeight: 1.5,
              fontFamily: "sans-serif",
              maxWidth: "500px"
            }}
          >
            WhiteSpc builds focused digital marketing systems for brands that need
            clearer positioning, stronger demand, and launch momentum without the clutter.
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "32px", fontFamily: "sans-serif" }}>
            <div style={{ background: "#161615", color: "#f8f7f2", padding: "12px 24px", fontSize: 14, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
              View work
            </div>
            <div style={{ border: "2px solid #161615", color: "#161615", padding: "10px 24px", fontSize: 14, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase" }}>
              Start a brief
            </div>
          </div>
        </div>

        <div style={{ display: "flex", width: "40%", justifyContent: "center", alignItems: "center", zIndex: 10, marginRight: "20px" }}>
          <svg width="460" height="364" viewBox="0 0 960 760" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="64" y="62" width="690" height="564" fill="#F8F7F2" stroke="#161615" strokeWidth="3"/>
            <rect x="108" y="112" width="256" height="166" fill="#FFFFFF" stroke="#161615" strokeWidth="2"/>
            <rect x="134" y="143" width="92" height="13" fill="#C35B35"/>
            <rect x="134" y="178" width="174" height="12" fill="#161615" opacity=".22"/>
            <rect x="134" y="207" width="120" height="12" fill="#161615" opacity=".22"/>
            <rect x="134" y="236" width="190" height="12" fill="#6D7A3D"/>
            <rect x="410" y="112" width="296" height="166" fill="#235F7F" stroke="#161615" strokeWidth="2"/>
            <path d="M454 229C490 170 528 202 558 154C588 106 632 132 664 130" stroke="#F8F7F2" strokeWidth="7" strokeLinecap="square"/>
            <rect x="446" y="238" width="190" height="12" fill="#DFE56A"/>
            <rect x="108" y="324" width="206" height="214" fill="#DFE56A" stroke="#161615" strokeWidth="2"/>
            <rect x="136" y="357" width="92" height="92" fill="#F8F7F2" stroke="#161615" strokeWidth="2" transform="rotate(-8 136 357)"/>
            <rect x="138" y="475" width="130" height="12" fill="#161615"/>
            <rect x="138" y="503" width="84" height="12" fill="#161615" opacity=".32"/>
            <rect x="360" y="324" width="346" height="214" fill="#FFFFFF" stroke="#161615" strokeWidth="2"/>
            <rect x="394" y="362" width="54" height="132" fill="#C35B35"/>
            <rect x="474" y="412" width="54" height="82" fill="#6D7A3D"/>
            <rect x="554" y="382" width="54" height="112" fill="#235F7F"/>
            <rect x="634" y="344" width="54" height="150" fill="#161615"/>
            <path d="M100 614H766" stroke="#161615" strokeWidth="2"/>
            <rect x="720" y="254" width="164" height="164" fill="#F8F7F2" stroke="#161615" strokeWidth="3" transform="rotate(9 720 254)"/>
            <path d="M746 342L785 309L811 354L852 286" stroke="#C35B35" strokeWidth="8" strokeLinecap="square" strokeLinejoin="bevel"/>
            <rect x="767" y="383" width="68" height="10" fill="#161615" opacity=".42" transform="rotate(9 767 383)"/>
            <rect x="504" y="548" width="202" height="126" fill="#6D7A3D" stroke="#161615" strokeWidth="2"/>
            <rect x="532" y="582" width="118" height="14" fill="#F8F7F2"/>
            <rect x="532" y="616" width="72" height="14" fill="#F8F7F2" opacity=".72"/>
            <circle cx="728" cy="114" r="58" fill="#DFE56A" stroke="#161615" strokeWidth="3"/>
            <path d="M708 114H748M728 94V134" stroke="#161615" strokeWidth="5"/>
            <path d="M53 538L18 584L73 605" stroke="#235F7F" strokeWidth="12" strokeLinejoin="bevel"/>
            <path d="M780 594L898 650" stroke="#161615" strokeWidth="3"/>
            <path d="M808 556L926 612" stroke="#161615" strokeWidth="3"/>
            <rect x="802" y="600" width="86" height="86" fill="#C35B35" stroke="#161615" strokeWidth="3" transform="rotate(-12 802 600)"/>
          </svg>
        </div>
      </div>
    ),
    size
  );
}
