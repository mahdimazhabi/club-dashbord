"use client";
import { useRef, useState } from "react";

const GamificationWheel = () => {
  const [spinning, setSpinning] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [winner, setWinner] = useState<any>(null);
  const [wheelDeg, setWheelDeg] = useState(0);
  const wheelRef = useRef<HTMLDivElement | null>(null);

  const prizes = [
    { id: 1, text: "1 Points" },
    { id: 2, text: "2 Points" },
    { id: 3, text: "3 Points" },
    { id: 4, text: "4 Points" },
    { id: 5, text: "5 Points" },
    { id: 6, text: "6 Points" },
  ];

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setWinner(null);

    const fullRotations = 5 + Math.floor(Math.random() * 5);
    const randomOffset = Math.floor(Math.random() * 360);
    const totalDegrees = fullRotations * 360 + randomOffset;
    const newDegrees = wheelDeg + totalDegrees;

    if (wheelRef.current) {
      wheelRef.current.style.transition =
        "transform 5s cubic-bezier(0.17, 0.67, 0.21, 0.99)";
      wheelRef.current.style.transform = `rotate(${newDegrees}deg)`;
    }

    setTimeout(() => {
      const normalizedDegrees = newDegrees % 360;
      const segmentAngle = 360 / prizes.length;
      const adjustedDegrees = (360 - normalizedDegrees) % 360;
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="w-[420px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple-400/40 p-6 relative">
        <h2 className="text-center text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          🎉 Spin & Win Big! 🎉
        </h2>
        <p className="text-center text-purple-200 text-sm mb-6">
          Try your luck for exclusive prizes
        </p>

        {/* Wheel */}
        <div className="relative flex justify-center items-center mx-auto">
          <div
            ref={wheelRef}
            className="relative w-[300px] h-[300px] rounded-full border-[6px] border-purple-400 shadow-[0_0_40px_rgba(124,58,237,0.8)] overflow-hidden"
            style={{
              transform: `rotate(${wheelDeg}deg)`,
              transition: "transform 0s",
              background:
                "conic-gradient(#7C3AED 0deg 60deg, #2563EB 60deg 120deg, #9333EA 120deg 180deg, #3B82F6 180deg 240deg, #7C3AED 240deg 300deg, #2563EB 300deg 360deg)",
            }}
          >
            {prizes.map((prize, i) => {
              const rotation = i * (360 / prizes.length);
              return (
                <div
                  key={prize.id}
                  className="absolute w-full h-full  flex justify-center items-start"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <span
                    className={`text-white font-bold text-sm mt-6 drop-shadow-md `}
                    style={{
                      transformOrigin: "center 90px",
                      transform: `rotate(${35}deg)`,
                    }}
                  >
                    {prize.text}
                  </span>
                </div>
              );
            })}

            {/* Spin button inside wheel */}
            <button
              disabled={spinning}
              onClick={spinWheel}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 border-4 border-white shadow-[0_0_30px_rgba(124,58,237,0.9)] text-white font-bold text-lg hover:scale-105 active:scale-95 transition"
            >
              Spin
            </button>
          </div>

          {/* Pointer */}
          <div
            className="absolute top-0 w-6 h-8 bg-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.8)] rounded-b-sm"
            style={{
              clipPath: "polygon(50% 100%, 0 0, 100% 0)",
              transform: "translateY(-70%)",
            }}
          />
        </div>

        {/* Winner */}
        {winner && (
          <div className="mt-4 p-3 bg-green-400/20 border border-green-500 text-green-200 text-center rounded-lg font-semibold animate-pulse">
            🎊 Congratulations! You won:{" "}
            <strong className="text-green-300">{winner.text}</strong>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={spinWheel}
          disabled={spinning}
          className={`w-full mt-6 py-3 rounded-xl font-bold text-lg transition ${
            spinning
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:opacity-90 text-white"
          }`}
        >
          {spinning ? "Spinning..." : "Spin the Wheel"}
        </button>
      </div>
    </div>
  );
};

export default GamificationWheel;
