interface RussianFlagHeaderProps {
  className?: string;
}

const RussianFlagHeader = ({ className = "" }: RussianFlagHeaderProps) => {
  return (
    <div className={`w-full text-center py-6 mb-4 ${className}`}>
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
        <span className="bg-white text-blue-700 px-3 py-2 rounded-l border-2 border-blue-700">
          ПУНКТ
        </span>
        <span className="bg-blue-700 text-white px-3 py-2 border-y-2 border-blue-700">
          ВОЕННО-СОЦИАЛЬНОЙ
        </span>
        <span className="bg-red-600 text-white px-3 py-2 rounded-r border-2 border-red-600">
          РАБОТЫ
        </span>
      </h1>
    </div>
  );
};

export default RussianFlagHeader;
