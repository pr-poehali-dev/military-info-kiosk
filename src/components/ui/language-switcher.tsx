import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { code: "ru", flag: "🇷🇺", name: "РУС" },
    { code: "en", flag: "🇺🇸", name: "ENG" },
    { code: "pt", flag: "🇧🇷", name: "POR" },
    { code: "wo", flag: "🇸🇳", name: "WOL" },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code as any)}
          className={`px-2 py-1 rounded text-xs font-bold transition-all duration-200 ${
            currentLanguage === lang.code
              ? "bg-blue-700 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
