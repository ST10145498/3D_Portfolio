import React from "react";
import BoatScene from "./BoatScene";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-blue-100">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold">Welcome to My Boat Portfolio</h1>
        <p className="mt-4 text-lg">Showcasing my skills and projects with a nautical touch.</p>
      </div>
      <div className="flex-1 h-[500px]">
        <BoatScene />
      </div>
    </section>
  );
}
