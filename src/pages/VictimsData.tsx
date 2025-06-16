import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VictimsData = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-blue-50 to-red-50">
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
            ДАННЫЕ ДЛЯ ПОСТРАДАВШИХ ВОЕННОСЛУЖАЩИХ
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-700 pl-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Порядок обращения
                </h3>
                <p className="text-gray-600">
                  Информация о порядке обращения за помощью пострадавшим
                  военнослужащим
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Необходимые документы
                </h3>
                <p className="text-gray-600">
                  Перечень документов, необходимых для получения помощи
                </p>
              </div>

              <div className="border-l-4 border-slate-600 pl-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Контакты для обращения
                </h3>
                <p className="text-gray-600">
                  Телефоны и адреса для обращения пострадавших военнослужащих
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VictimsData;
