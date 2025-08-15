import BoatScene from "./BoatScene.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold">Boat House Portfolio</h1>
        <p className="mt-1 opacity-80">
          React • Three.js • @react-three/fiber • Tailwind
        </p>
      </header>

      {/* 3D Canvas */}
      <main className="max-w-6xl mx-auto px-6">
        <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
          <BoatScene />
        </div>
      </main>

      {/* Footer filler so we see scrolling */}
      <footer className="max-w-6xl mx-auto px-6 py-10 opacity-70">
        © {new Date().getFullYear()} You — All Rights Reserved
      </footer>
    </div>
  );
}
