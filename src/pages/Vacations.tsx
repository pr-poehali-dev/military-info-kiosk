import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Vacations = () => {
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
          <h1 className="text-3xl font-bold text-blue-800 mb-4">ОТПУСКА</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Виды отпусков
              </h3>
              <p className="text-gray-600">
                Информация о различных видах отпусков для военнослужащих
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Порядок оформления
              </h3>
              <p className="text-gray-600">
                Процедура подачи рапорта и оформления отпуска
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-slate-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Продолжительность
              </h3>
              <p className="text-gray-600">
                Нормы продолжительности отпусков по категориям
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Денежное довольствие
              </h3>
              <p className="text-gray-600">
                Порядок выплаты денежного довольствия за отпуск
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacations;
