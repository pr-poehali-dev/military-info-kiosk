import React from "react";

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Понедельник = 0
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const days = [];

  // Пустые ячейки для начала месяца
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-6 h-6"></div>);
  }

  // Дни месяца
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div
        key={day}
        className={`w-6 h-6 text-xs flex items-center justify-center rounded ${
          day === currentDate
            ? "bg-red-600 text-white font-bold"
            : "text-green-400 hover:bg-green-700"
        }`}
      >
        {day}
      </div>,
    );
  }

  return (
    <div className="bg-black text-green-400 p-3 rounded font-mono text-xs border border-green-400">
      <div className="text-center font-bold mb-2">
        {monthNames[currentMonth]} {currentYear}
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
          <div key={day} className="text-center text-green-300 font-bold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{days}</div>
    </div>
  );
};

export default Calendar;
