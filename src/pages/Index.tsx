import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navigationButtons = [
    { label: "ОБРАЗЦЫ ДОКУМЕНТОВ", path: "/documents" },
    { label: "КОНТАКТЫ", path: "/contacts" },
    { label: "ИНФОРМАЦИЯ ДЛЯ ВОЕННОСЛУЖАЩИХ", path: "/military-info" },
    { label: "СПРАВКИ", path: "/certificates" },
    { label: "ДАННЫЕ ДЛЯ ПОСТРАДАВШИХ ВОЕННОСЛУЖАЩИХ", path: "/victims-data" },
    {
      label: "ДАННЫЕ ПО ОФОРМЛЕНИЮ ПОГИБШИХ ВОЕННОСЛУЖАЩИХ",
      path: "/deceased-data",
    },
    { label: "ЛЬГОТЫ ВОЕННОСЛУЖАЩИХ И ЧЛЕНОВ ИХ СЕМЕЙ", path: "/benefits" },
    { label: "ОТПУСКА", path: "/vacations" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-red-50">
      {/* Электронные часы */}
      <div className="absolute top-4 left-4 bg-black text-green-400 px-4 py-2 rounded font-mono text-xl">
        {currentTime.toLocaleTimeString("ru-RU")}
      </div>

      {/* Заголовок */}
      <div className="text-center pt-20 pb-8">
        <h1 className="text-2xl font-bold text-blue-800 mb-2">
          ЮЖНЫЙ АРКТИЧЕСКИЙ ВОЕННЫЙ ОКРУГ
        </h1>
        <h2 className="text-xl font-semibold text-blue-700 mb-1">
          180 ОБЩЕВОЙСКОВАЯ АРМИЯ
        </h2>
        <h3 className="text-lg font-medium text-blue-600">
          709 СТРЕЛКОВАЯ ДИВИЗИЯ
        </h3>
      </div>

      {/* Видеоплеер */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-4xl mx-4">
          <video
            className="w-full h-96 bg-black border-4 border-blue-700 rounded-lg shadow-lg"
            controls
            poster="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>

      {/* Навигационные кнопки */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {navigationButtons.map((button, index) => (
            <Button
              key={index}
              onClick={() => navigate(button.path)}
              className="h-20 text-sm font-medium bg-blue-700 hover:bg-blue-800 text-white border-2 border-blue-800 hover:border-blue-900 transition-all duration-200"
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
