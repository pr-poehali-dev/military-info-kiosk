import React from "react";

interface TickerProps {
  text: string;
}

const Ticker: React.FC<TickerProps> = ({ text }) => {
  return (
    <div className="bg-red-700 text-white py-2 overflow-hidden relative border-y-2 border-red-800">
      <div className="animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        <span className="inline-block px-4 font-bold text-sm">
          🚨 {text} 🚨
        </span>
      </div>
    </div>
  );
};

export default Ticker;
