import React, { useState } from "react";
import { Button } from "./button";

interface MilitaryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const MilitaryButton: React.FC<MilitaryButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <Button
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`
        h-20 text-sm font-medium transition-all duration-150 transform
        ${
          isPressed
            ? "bg-green-600 border-green-700 scale-95 shadow-inner"
            : "bg-blue-700 hover:bg-blue-800 border-blue-800 hover:border-blue-900 shadow-lg hover:shadow-xl"
        }
        text-white border-2 hover:scale-102 active:scale-95
        ${className}
      `}
      style={{
        boxShadow: isPressed
          ? "inset 0 4px 8px rgba(0,0,0,0.3)"
          : "0 6px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {children}
    </Button>
  );
};

export default MilitaryButton;
