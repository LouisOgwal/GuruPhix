export default function Contact() {
  return (
    <div className="section">

      <h2 style={{ textAlign: "center" }}>Contact Us</h2>

      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          textAlign: "center",
          lineHeight: "2",
          background: "rgba(255,255,255,0.04)",
          padding: "25px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)"
        }}
      >

        <p>📍 Nairobi, Kenya</p>

        {/* PHONE CLICK */}
        <p>
          📞{" "}
          <a
            href="tel:+254792871075"
            style={{ color: "#00e5ff", textDecoration: "none" }}
          >
            +254 792 871 075
          </a>
        </p>

        {/* WHATSAPP CLICK */}
        <p>
          💬{" "}
          <a
            href="https://wa.me/254792871075"
            target="_blank"
            style={{ color: "#00ffa3", textDecoration: "none" }}
          >
            Chat on WhatsApp
          </a>
        </p>

        {/* EMAIL CLICK */}
        <p>
          📧{" "}
          <a
            href="mailto:yienlouis470@gmail.com"
            style={{ color: "#00e5ff", textDecoration: "none" }}
          >
            yienlouis470@gmail.com
          </a>
        </p>

        <p
          style={{
            opacity: 0.6,
            marginTop: "15px",
            fontSize: "13px"
          }}
        >
          We respond quickly to all repair inquiries and bookings.
        </p>

      </div>
    </div>
  );
}