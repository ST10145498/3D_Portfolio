import BoatScene from "./BoatScene";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Boat House</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </nav>
      </header>

      {/* 3D Hero Scene */}
      <main id="home" className="flex-grow">
        <BoatScene />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        © {new Date().getFullYear()} Boat House Portfolio
      </footer>
    </div>
  );
}
