"use client";
import { useRef, useState } from "react";

const GamificationWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<any>(null);
  const [wheelDeg, setWheelDeg] = useState(0);
  const wheelRef = useRef<HTMLDivElement | null>(null);

  // Prizes (replace with API if needed)
  const prizes = [
    { id: 1, text: "1 Points" },
    { id: 2, text: "5 Points" },
    { id: 3, text: "5 Points" },
    { id: 4, text: "5 Points" },
    { id: 5, text: "5 Points" },
    { id: 6, text: "5 Points" },
  ];

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setWinner(null);

    // Generate a random spin (5-10 full rotations + offset to land on a segment)
    const fullRotations = 5 + Math.floor(Math.random() * 5); // 5-10 full rotations
    const randomOffset = Math.floor(Math.random() * 360); // Random position within a circle
    const totalDegrees = fullRotations * 360 + randomOffset;
    const newDegrees = wheelDeg + totalDegrees;

    if (wheelRef.current) {
      wheelRef.current.style.transition =
        "transform 5s cubic-bezier(0.17, 0.67, 0.21, 0.99)";
      wheelRef.current.style.transform = `rotate(${newDegrees}deg)`;
    }

    setTimeout(() => {
      // Calculate which segment the pointer landed on
      const normalizedDegrees = newDegrees % 360;
      const segmentAngle = 360 / prizes.length;

      // The pointer is at the top (0 degrees), so we need to adjust for that
      // We subtract from 360 because the wheel rotates clockwise but our calculation needs to be counterclockwise
      const adjustedDegrees = (360 - normalizedDegrees) % 360;

      // Determine which segment the pointer landed on
      const prizeIndex = Math.floor(adjustedDegrees / segmentAngle);

      setWinner(prizes[prizeIndex]);
      setSpinning(false);
      setWheelDeg(newDegrees);

      setTimeout(() => {
        if (wheelRef.current) {
          wheelRef.current.style.transition = "none";
        }
      }, 100);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Modal-style box */}
      <div className="w-[400px] bg-white rounded-xl shadow-xl border border-gray-200 p-6">
        {/* Title */}
        <h2 className="text-center text-xl font-bold text-gray-900">
          Spin & Win Big!
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Spin for exclusive deals and prizes!
        </p>

        {/* Wheel */}
        <div
          className="relative flex justify-center items-center mx-auto"
          style={{ width: "280px", height: "280px" }}
        >
          {/* Wheel container */}
          <div
            ref={wheelRef}
            className="relative w-full h-full rounded-full border-4 border-black overflow-hidden"
            style={{
              transform: `rotate(${wheelDeg}deg)`,
              transition: "transform 0s",
              background:
                "conic-gradient(#5D5FEF 0deg 60deg, #7C3AED 60deg 120deg, #5D5FEF 120deg 180deg, #7C3AED 180deg 240deg, #5D5FEF 240deg 300deg, #7C3AED 300deg 360deg)",
            }}
          >
            {/* Prize labels */}
            {prizes.map((prize, i) => {
              const rotation = i * (360 / prizes.length);
              return (
                <div
                  key={prize.id}
                  className="absolute w-full h-full flex justify-center items-start"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <span
                    className="text-white font-bold text-sm mt-4"
                    style={{
                      transform: `rotate(${30}deg)`,
                      transformOrigin: "center 70px",
                    }}
                  >
                    {prize.text}
                  </span>
                </div>
              );
            })}

            {/* Center Button */}
            <button
              disabled={spinning}
              onClick={spinWheel}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-4 border-purple-600 text-sm font-bold text-purple-600 z-10"
            >
              Spin
            </button>
          </div>

          {/* Pointer */}
          <div
            className="absolute top-0 w-4 h-6 bg-black"
            style={{
              clipPath: "polygon(50% 100%, 0 0, 100% 0)",
              transform: "translateY(-100%)",
            }}
          ></div>
        </div>

        {/* Winner display */}
        {winner && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 text-center rounded-lg">
            Congratulations! You won: <strong>{winner.text}</strong>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={spinWheel}
          disabled={spinning}
          className={`w-full mt-6 py-3 rounded-lg font-bold text-white text-lg transition ${
            spinning
              ? "bg-gray-400"
              : "bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90"
          }`}
        >
          {spinning ? "Spinning..." : "Spin the Wheel"}
        </button>
      </div>
    </div>
  );
};

export default GamificationWheel;
