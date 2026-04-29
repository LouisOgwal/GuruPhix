import { useEffect, useState } from "react";

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("YOUR_GOOGLE_SHEET_CSV_URL")
      .then((res) => res.text())
      .then((text) => {
        const rows = text.split("\n").slice(1);

        const parsed = rows.map((r) => {
          const c = r.split(",");

          return {
            id: c[0],
            name: c[1],
            phone: c[2],
            device: c[3],
            issue: c[4],
            location: c[5]
          };
        });

        setData(parsed);
      });
  }, []);

  return (
    <div className="section">

      <h2>Admin Dashboard</h2>

      <div className="grid grid-3">

        {data.map((d, i) => (
          <div key={i} className="card">

            <h3>{d.name}</h3>
            <p>{d.device}</p>
            <p>{d.phone}</p>
            <p>{d.location}</p>

            <a
              href={`https://wa.me/254792871075?text=Repair%20Update%20for%20${d.id}`}
              className="btn"
              target="_blank"
            >
              WhatsApp Reply
            </a>

          </div>
        ))}

      </div>

    </div>
  );
}