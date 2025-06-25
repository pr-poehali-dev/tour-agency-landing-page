import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      location: "Москва",
      rating: 5,
      text: "Невероятное путешествие по Европе! Все было организовано на высшем уровне. Особенно запомнилась Прага с её средневековой архитектурой.",
      tour: "Европейские столицы",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      location: "Санкт-Петербург",
      rating: 5,
      text: "Мальдивы превзошли все ожидания! Кристально чистая вода, белоснежный песок и сервис мирового уровня. Обязательно вернемся!",
      tour: "Тропический рай",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Елена Волкова",
      location: "Екатеринбург",
      rating: 5,
      text: "Япония поразила своим контрастом традиций и современности. Сакура, храмы, технологии - всё это создало незабываемые впечатления.",
      tour: "Путешествие по Японии",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы гордимся доверием наших путешественников и их яркими
            впечатлениями
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-in border-0 shadow-md hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      {testimonial.tour}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-sky-500 to-orange-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Присоединяйтесь к тысячам довольных клиентов!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Ваше незабываемое путешествие начинается здесь
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Icon name="Users" size={20} className="mr-2" />
                <span>5000+ довольных клиентов</span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={20} className="mr-2" />
                <span>Рейтинг 4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
