export default function Location() {

  const phone = "254745054505";

  const message =
`📍 LOCATION REQUEST - GuruPhix

Hello 👋
I would like to visit your repair shop.

📌 Location:
Mwalimu Cooperative House
Tom Mboya Street, Nairobi CBD, Kenya

Kindly share exact directions / floor details.`;

  const whatsappUrl =
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  const mapsUrl =
    "https://www.google.com/maps?q=Mwalimu+Cooperative+House+Tom+Mboya+Street+Nairobi&output=embed";

  const openMaps =
    "https://www.google.com/maps/search/?api=1&query=Mwalimu+Cooperative+House+Tom+Mboya+Street+Nairobi";

  return (
    <div className="section">

      <h2 style={{ textAlign: "center" }}>
        📍 Visit Our Shop
      </h2>

      <p style={{ textAlign: "center", opacity: 0.7 }}>
         Located in Nairobi CBD for fast walk-in repairs
      </p>

      {/* LOCATION CARD */}
      <div style={card}>

        <h3>GuruPhix Repair Center</h3>

        <p style={{ opacity: 0.8 }}>
          Mwalimu Cooperative House, 8th Floor <br />
          Tom Mboya Street, Nairobi CBD <br />
          Kenya
        </p>

        {/* BUTTONS */}
        <div style={btnRow}>

          <a href={openMaps} target="_blank" rel="noreferrer">
            <button className="btn">
              Open in Google Maps
            </button>
          </a>

          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <button style={btnAlt}>
              Ask Location on WhatsApp
            </button>
          </a>

        </div>

      </div>

      {/* MAP */}
      <div style={{ marginTop: "30px" }}>
        <iframe
          title="location"
          src={mapsUrl}
          style={map}
          loading="lazy"
        />
      </div>

    </div>
  );
}

/* ===== STYLES ===== */

const card = {
  maxWidth: "700px",
  margin: "auto",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  padding: "25px",
  borderRadius: "18px",
  backdropFilter: "blur(12px)",
  textAlign: "center"
};

const btnRow = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "15px"
};

const btnAlt = {
  padding: "12px 22px",
  borderRadius: "12px",
  border: "1px solid white",
  background: "transparent",
  color: "white",
  cursor: "pointer"
};

const map = {
  width: "100%",
  height: "350px",
  border: "0",
  borderRadius: "14px"
};