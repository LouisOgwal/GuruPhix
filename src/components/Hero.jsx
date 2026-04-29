export default function Hero() {
  return (
    <div
      className="hero relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/media/hero.jpg')",
        backgroundSize: "110%",          // 
        backgroundPosition: "center 30%", // 
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="hero-content relative z-10 px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
           iPhix / Guru
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold mb-6 text-cyan-400">
            Precision Phone Repair & Advanced Data Recovery
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We restore dead devices, repair logic boards, and recover lost data using professional tools and microsoldering.
        </p>

        <button className="btn">
           Get Repair Quote
        </button>

      </div>
    </div>
  );
}