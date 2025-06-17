import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import RussianFlagHeader from "@/components/ui/russian-flag-header";

const Contacts = () => {
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
          <h1 className="text-3xl font-bold text-blue-800 mb-4">КОНТАКТЫ</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      size={20}
                      className="mr-3 text-blue-700"
                    />
                    <span>+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Mail"
                      size={20}
                      className="mr-3 text-blue-700"
                    />
                    <span>info@military.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="mr-3 text-blue-700"
                    />
                    <span>Адрес воинской части</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Режим работы
                </h3>
                <div className="space-y-2">
                  <p>Понедельник - Пятница: 08:00 - 18:00</p>
                  <p>Суббота: 08:00 - 14:00</p>
                  <p>Воскресенье: выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
