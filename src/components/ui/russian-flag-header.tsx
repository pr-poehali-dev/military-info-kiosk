interface RussianFlagHeaderProps {
  className?: string;
}

const RussianFlagHeader = ({ className = "" }: RussianFlagHeaderProps) => {
  return (
    <div className={`w-full text-center py-4 ${className}`}>
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
        <span className="text-white drop-shadow-lg">ПУНКТ </span>
        <span className="text-blue-700">ВОЕННО </span>
        <span className="text-red-600">СОЦИАЛЬНОЙ </span>
        <span className="text-white drop-shadow-lg">РАБОТЫ</span>
      </h1>
    </div>
  );
};

export default RussianFlagHeader;
