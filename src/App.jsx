import React from "react";
import Scene3D from "./components/Scene3D";
import "./index.css"; // make sure Tailwind styles load

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Scene3D />
    </div>
  );
}
