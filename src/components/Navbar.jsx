export default function Navbar() {
  return (
    <div className="navbar">

      <h2>
        Guru<span style={{ color: "#00e5ff" }}>Phix</span>
      </h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>

        <a href="#home" style={linkStyle}>Home</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#gallery" style={linkStyle}>Work</a>
        <a href="#booking" style={linkStyle}>Book</a>
        <a href="#contact" style={linkStyle}>Contact</a>

        <a href="https://wa.me/254745054505" target="_blank">
          <button className="btn">
            WhatsApp Us
          </button>
        </a>

      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "14px"
};