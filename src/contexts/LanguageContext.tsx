import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en" | "pt" | "wo";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    title: "ПУНКТ ВОЕННО СОЦИАЛЬНОЙ РАБОТЫ",
    subtitle1: "ЮЖНЫЙ АРКТИЧЕСКИЙ ВОЕННЫЙ ОКРУГ",
    subtitle2: "180 ОБЩЕВОЙСКОВАЯ АРМИЯ",
    subtitle3: "709 СТРЕЛКОВАЯ ДИВИЗИЯ",
    documents: "ОБРАЗЦЫ ДОКУМЕНТОВ",
    contacts: "КОНТАКТЫ",
    militaryInfo: "ИНФОРМАЦИЯ ДЛЯ ВОЕННОСЛУЖАЩИХ",
    certificates: "СПРАВКИ",
    victimsData: "ДАННЫЕ ДЛЯ ПОСТРАДАВШИХ ВОЕННОСЛУЖАЩИХ",
    deceasedData: "ДАННЫЕ ПО ОФОРМЛЕНИЮ ПОГИБШИХ ВОЕННОСЛУЖАЩИХ",
    benefits: "ЛЬГОТЫ ВОЕННОСЛУЖАЩИХ И ЧЛЕНОВ ИХ СЕМЕЙ",
    vacations: "ОТПУСКА",
    ticker:
      "ВНИМАНИЕ! Соблюдайте меры безопасности на территории военной части. Посторонним вход запрещен.",
  },
  en: {
    title: "MILITARY SOCIAL WORK CENTER",
    subtitle1: "SOUTHERN ARCTIC MILITARY DISTRICT",
    subtitle2: "180 COMBINED ARMS ARMY",
    subtitle3: "709 RIFLE DIVISION",
    documents: "DOCUMENT SAMPLES",
    contacts: "CONTACTS",
    militaryInfo: "MILITARY PERSONNEL INFORMATION",
    certificates: "CERTIFICATES",
    victimsData: "DATA FOR INJURED PERSONNEL",
    deceasedData: "DATA FOR DECEASED PERSONNEL PROCESSING",
    benefits: "MILITARY PERSONNEL AND FAMILY BENEFITS",
    vacations: "VACATIONS",
    ticker:
      "ATTENTION! Follow safety measures on military territory. Unauthorized entry prohibited.",
  },
  pt: {
    title: "CENTRO DE TRABALHO SOCIAL MILITAR",
    subtitle1: "DISTRITO MILITAR ÁRTICO SUL",
    subtitle2: "180 EXÉRCITO DE ARMAS COMBINADAS",
    subtitle3: "709 DIVISÃO DE FUZILEIROS",
    documents: "AMOSTRAS DE DOCUMENTOS",
    contacts: "CONTATOS",
    militaryInfo: "INFORMAÇÕES PARA MILITARES",
    certificates: "CERTIFICADOS",
    victimsData: "DADOS PARA MILITARES FERIDOS",
    deceasedData: "DADOS PARA PROCESSAMENTO DE MILITARES FALECIDOS",
    benefits: "BENEFÍCIOS PARA MILITARES E FAMÍLIAS",
    vacations: "FÉRIAS",
    ticker:
      "ATENÇÃO! Siga as medidas de segurança no território militar. Entrada não autorizada proibida.",
  },
  wo: {
    title: "BÀKK-TAAN GU LIGGÉEY JAMONOY",
    subtitle1: "DERET JAMONOY PENKU PENKU",
    subtitle2: "180 JAMONOY ASKAN WI",
    subtitle3: "709 DIVIZIONG MBËR",
    documents: "MISAAL YU XËTU",
    contacts: "JOKKANTEY",
    militaryInfo: "ALBAR JAMONOY YI",
    certificates: "SËRTIFIKA",
    victimsData: "ALBAR JAMONOY YU JËKKËR",
    deceasedData: "ALBAR JAMONOY YU DEE",
    benefits: "NDAM JAMONOY AK SAY MBOKK",
    vacations: "WÀLLU",
    ticker: "GËSTU! Dëkk ci njariñ jamonoy bi. Duñu tax ku amul buur mu dugg.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("ru");

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return (
      translations[currentLanguage][key as keyof (typeof translations)["ru"]] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
