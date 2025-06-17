import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Certificates = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          className="mb-6 bg-blue-700 hover:bg-blue-800"
        >
          ← Назад
        </Button>

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          {t("certificates") || "Справки"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700">Здесь будет информация о справках</p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
