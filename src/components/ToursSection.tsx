import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ToursSection = () => {
  const tours = [
    {
      id: 1,
      title: "Европейские столицы",
      description: "Посетите 5 знаменитых столиц Европы за 12 дней",
      price: "от 89 000 ₽",
      duration: "12 дней",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Париж", "Рим", "Прага", "Вена", "Берлин"],
    },
    {
      id: 2,
      title: "Тропический рай",
      description: "Мальдивы - отдых на белоснежных пляжах",
      price: "от 156 000 ₽",
      duration: "7 дней",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Виллы на воде", "Снорклинг", "СПА", "Все включено"],
    },
    {
      id: 3,
      title: "Восточная сказка",
      description: "Турция - история, культура и пляжный отдых",
      price: "от 45 000 ₽",
      duration: "10 дней",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Стамбул", "Каппадокия", "Памуккале", "Анталья"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Популярные направления
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Откройте для себя незабываемые путешествия с нашими тщательно
            подобранными турами
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-blue-600">
                    {tour.duration}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {highlight}
                    </span>
                  ))}
                  {tour.highlights.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      +{tour.highlights.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      {tour.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      за человека
                    </span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                    <Icon name="Star" size={16} className="fill-current" />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-3">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Наши услуги
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Plane" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Авиабилеты</h4>
              <p className="text-gray-600 text-sm">
                Лучшие цены на перелеты по всему миру
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Отели</h4>
              <p className="text-gray-600 text-sm">
                Бронирование отелей любой категории
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Страховка</h4>
              <p className="text-gray-600 text-sm">
                Надежная туристическая страховка
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
