import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Calendar from "@/components/ui/calendar";
import Ticker from "@/components/ui/ticker";
import LanguageSwitcher from "@/components/ui/language-switcher";
import MilitaryButton from "@/components/ui/military-button";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { t } = useLanguage();

  const navigationButtons = [
    { label: t("documents"), path: "/documents" },
    { label: t("contacts"), path: "/contacts" },
    { label: t("militaryInfo"), path: "/military-info" },
    { label: t("certificates"), path: "/certificates" },
    { label: t("victimsData"), path: "/victims-data" },
    { label: t("deceasedData"), path: "/deceased-data" },
    { label: t("benefits"), path: "/benefits" },
    { label: t("vacations"), path: "/vacations" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-red-50">
      {/* Верхняя панель с часами, календарем и переключателем языков */}
      <div className="flex justify-between items-start p-4">
        <div className="bg-black text-green-400 px-4 py-2 rounded font-mono text-xl">
          {currentTime.toLocaleTimeString("ru-RU")}
        </div>
        <Calendar />
        <LanguageSwitcher />
      </div>

      {/* Военная эмблема */}
      <div className="flex justify-center mb-4">
        <img
          src="https://cdn.poehali.dev/files/39625d85-77cc-4b6e-9195-52f484d3ce5d.png"
          alt="Военная эмблема"
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Заголовок в цветах российского флага */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-white bg-blue-700 px-2 py-1 rounded-l">
            ПУНКТ
          </span>
          <span className="text-blue-700 bg-white px-2 py-1 border-y border-blue-700">
            ВОЕННО
          </span>
          <span className="text-white bg-red-600 px-2 py-1 rounded-r">
            СОЦИАЛЬНОЙ РАБОТЫ
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-blue-700 mb-1">
          {t("subtitle1")}
        </h2>
        <h3 className="text-lg font-medium text-blue-600 mb-1">
          {t("subtitle2")}
        </h3>
        <h4 className="text-base font-medium text-blue-500">
          {t("subtitle3")}
        </h4>
      </div>

      {/* Бегущая строка */}
      <Ticker text={t("ticker")} />

      {/* Видеоплеер */}
      <div className="flex justify-center my-8">
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
            <MilitaryButton key={index} onClick={() => navigate(button.path)}>
              {button.label}
            </MilitaryButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
