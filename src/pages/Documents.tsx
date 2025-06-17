import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import RussianFlagHeader from "@/components/ui/russian-flag-header";

const Documents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-red-50">
      <RussianFlagHeader className="bg-gradient-to-r from-slate-200 to-slate-300" />

      <div className="container mx-auto px-4 py-8">
        <Button
          onClick={() => navigate("/")}
          className="mb-6 bg-blue-700 hover:bg-blue-800"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад на главную
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            ОБРАЗЦЫ ДОКУМЕНТОВ
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Служебные документы
              </h3>
              <p className="text-gray-600">
                Образцы рапортов, заявлений и других служебных документов
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Личные документы
              </h3>
              <p className="text-gray-600">
                Шаблоны документов для личных нужд военнослужащих
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
