import { useState } from "react";

const services = [

  /* 🔧 HARDWARE ISSUES */
  {
    title: "Screen Damage / Display Issues",
    desc: "Cracked screen, black display, lines, flickering, or touch failure.",
    details:
      "We replace and restore damaged displays using premium quality parts with full calibration and testing."
  },
  {
    title: "Battery Problems",
    desc: "Fast draining, swelling, overheating, or random shutdowns.",
    details:
      "We install high-quality batteries to restore original performance and battery health."
  },
  {
    title: "Charging Issues",
    desc: "Not charging, slow charging, loose or damaged charging port.",
    details:
      "We repair or replace charging ports and fix power delivery issues."
  },
  {
    title: "Water / Liquid Damage",
    desc: "Phone dropped in water, moisture damage, corrosion or short circuit.",
    details:
      "We perform deep ultrasonic cleaning and board-level diagnostics for recovery."
  },
  {
    title: "Phone Not Turning On",
    desc: "Dead phone, black screen, or no response at all.",
    details:
      "We diagnose motherboard, power IC, and battery issues to revive dead devices."
  },
  {
    title: "Speaker / Audio Issues",
    desc: "No sound, low volume, or distorted audio output.",
    details:
      "We repair or replace faulty speakers and audio components."
  },
  {
    title: "Microphone Issues",
    desc: "Voice not heard during calls or recordings failing.",
    details:
      "We fix microphone hardware and audio input circuits."
  },
  {
    title: "Camera Issues",
    desc: "Blurry camera, black screen, or camera not opening.",
    details:
      "We repair front and rear camera modules and connections."
  },
  {
    title: "Button Failures",
    desc: "Power, volume, or home button not responding.",
    details:
      "We repair or replace faulty physical buttons."
  },

  /* 💻 SOFTWARE ISSUES */
  {
    title: "Software Crash / Freezing",
    desc: "Apps crashing, lagging, or phone freezing randomly.",
    details:
      "We fix system errors, optimize performance, and restore stability."
  },
  {
    title: "Boot Loop / Stuck Logo",
    desc: "Phone stuck on startup or restarting repeatedly.",
    details:
      "We repair firmware issues and restore proper boot sequence."
  },
  {
    title: "Operating System Errors",
    desc: "System bugs, failed updates, or corrupted OS.",
    details:
      "We reinstall or repair operating system software safely."
  },
  {
    title: "Forgot Password / Locked Phone",
    desc: "Screen lock, pattern lock, or device locked issues.",
    details:
      "We help unlock devices while preserving data where possible."
  },
  {
    title: "Storage / Slow Performance",
    desc: "Phone lagging, freezing, or running out of space.",
    details:
      "We clean system junk, optimize storage, and boost performance."
  },
  {
    title: "Virus / Malware Issues",
    desc: "Popups, ads, or suspicious apps affecting phone.",
    details:
      "We remove malware and secure your device from threats."
  },

  /* 📡 NETWORK ISSUES */
  {
    title: "No Network / SIM Issues",
    desc: "No service, SIM not detected, or weak signal.",
    details:
      "We fix SIM reader, baseband, and network issues."
  },
  {
    title: "WiFi / Bluetooth Issues",
    desc: "WiFi not connecting or Bluetooth not pairing.",
    details:
      "We repair wireless connectivity hardware and software faults."
  },

  /* ⚙️ ADVANCED REPAIR */
  {
    title: "Logic Board Repair",
    desc: "Microsoldering for motherboard-level issues.",
    details:
      "We repair IC chips, circuits, and deep board-level faults under microscope."
  },
  {
    title: "Data Recovery",
    desc: "Recover lost photos, videos, and files from dead devices.",
    details:
      "We extract data from damaged or non-working phones."
  }
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  // 🚀 FIXED WHATSAPP (MOBILE-FIRST + DESKTOP SAFE)
  const handleRequest = (service) => {

    const priority =
      service.title.includes("Water")
        ? "HIGH PRIORITY 🚨"
        : service.title.includes("Board")
        ? "EXPERT LEVEL 🔧"
        : service.title.includes("Software")
        ? "SOFTWARE ISSUE 💻"
        : "STANDARD";

    const message =
`🛠 NEW REPAIR REQUEST - iPhix Guru

🏷 Service Type: ${service.title}
📄 Issue Category: ${service.title}

🧾 Description:
${service.desc}

⚠️ Priority Tag:
${priority}

📍 Status: Pending Review
🚀 Action Required: Respond ASAP`;

    const phone = "254745054505";
    const text = encodeURIComponent(message);

    // ✅ BEST UNIVERSAL FIX (mobile + desktop + app fallback)
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;

    // IMPORTANT: same-tab navigation prevents desktop override bugs
    window.location.href = url;
  };

  return (
    <div className="section">

      <h2 style={{ textAlign: "center" }}>
        Our Repair Services
      </h2>

      <p style={{ textAlign: "center", opacity: 0.7, marginBottom: "40px" }}>
        Select your issue and send a repair request instantly.
      </p>

      {/* GRID */}
      <div className="grid grid-3">

        {services.map((s, i) => (
          <div
            key={i}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(s)}
          >
            <h3>{s.title}</h3>
            <p style={{ opacity: 0.7, fontSize: "14px" }}>
              {s.desc}
            </p>
          </div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div style={overlay}>
          <div style={modal}>

            <h2>{selected.title}</h2>

            <p style={{ opacity: 0.8 }}>
              {selected.details}
            </p>

            <button
              className="btn"
              onClick={() => handleRequest(selected)}
              style={{ marginTop: "20px", width: "100%" }}
            >
              Request via WhatsApp
            </button>

            <button
              onClick={() => setSelected(null)}
              style={closeBtn}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

/* ===== STYLES ===== */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999
};

const modal = {
  background: "#111",
  padding: "30px",
  borderRadius: "16px",
  width: "90%",
  maxWidth: "500px",
  border: "1px solid rgba(255,255,255,0.1)"
};

const closeBtn = {
  marginTop: "10px",
  width: "100%",
  padding: "10px",
  background: "transparent",
  border: "1px solid white",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer"
};