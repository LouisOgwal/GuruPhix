import { useState } from "react";

/* ================= DATA ================= */

// ✅ AUTO LOAD ALL IMAGES (repair1 → repair25)
const items = [
  ...Array.from({ length: 25 }, (_, i) => ({
    type: "image",
    src: `/media/repair${i + 1}.jpg`
  })),

  // 🎥 VIDEO
  {
    type: "video",
    src: "/media/video1.mp4"
  }
];

/* ================= COMPONENT ================= */

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: "60px 40px" }}>

      <h2 style={{ textAlign: "center" }}>
        Repair Gallery
      </h2>

      <p style={{ textAlign: "center", opacity: 0.6 }}>
        Real repair work from GuruPhix
      </p>

      {/* GRID */}
      <div style={grid}>

        {items.map((item, i) => (
          <div
            key={i}
            style={card}
            onClick={() => setSelected(item)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >

            {item.type === "image" ? (
              <img
                src={item.src}
                style={img}
                onError={(e) => {
                  e.target.style.display = "none"; // hide missing images
                }}
              />
            ) : (
              <video
                src={item.src}
                style={img}
                autoPlay
                muted
                loop
              />
            )}

          </div>
        ))}

      </div>

      {/* FULLSCREEN PREVIEW */}
      {selected && (
        <div style={overlay} onClick={() => setSelected(null)}>

          {selected.type === "image" ? (
            <img src={selected.src} style={full} />
          ) : (
            <video src={selected.src} controls autoPlay style={full} />
          )}

        </div>
      )}

    </div>
  );
}

/* ================= STYLES ================= */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "15px",
  marginTop: "20px"
};

const card = {
  cursor: "pointer",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "0.3s"
};

const img = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "12px"
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999
};

const full = {
  maxWidth: "90%",
  maxHeight: "90%",
  borderRadius: "12px"
};