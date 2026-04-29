import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    issue: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
`🔥 NEW REPAIR BOOKING - GuruPhix

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📱 Device: ${form.device}
📍 Location: ${form.location}
🛠 Issue: ${form.issue}

🚀 Please respond ASAP`;

    const url = `https://wa.me/254745054505?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="section">

      <h2 style={{ textAlign: "center" }}>Book a Repair</h2>

      <p style={{ textAlign: "center", opacity: 0.6 }}>
        All bookings are sent instantly to WhatsApp
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>

        <input name="name" placeholder="Full Name" onChange={handleChange} style={input} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} style={input} />
        <input name="device" placeholder="Device (e.g iPhone 13)" onChange={handleChange} style={input} />

        <select name="location" onChange={handleChange} style={input}>
          <option value="">Select Location</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Kisumu</option>
          <option>Mail-in Service</option>
        </select>

        <textarea
          name="issue"
          placeholder="Describe issue"
          onChange={handleChange}
          style={{ ...input, height: "100px" }}
        />

        <button className="btn">
          Send via WhatsApp
        </button>

      </form>
    </div>
  );
}

const formStyle = {
  maxWidth: "600px",
  margin: "auto",
  display: "grid",
  gap: "15px"
};

const input = {
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "white"
};