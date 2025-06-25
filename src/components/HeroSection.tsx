import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 opacity-90" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Откройте мир
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            невероятных приключений
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in [animation-delay:0.3s]">
          Путешествуйте с нами и создавайте воспоминания на всю жизнь
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.6s]">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Icon name="Plane" className="mr-2" size={20} />
            Начать путешествие
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <Icon name="MapPin" className="mr-2" size={20} />
            Выбрать направление
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-[float_3s_ease-in-out_infinite] hidden md:block">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Icon name="Camera" size={24} className="text-white" />
          </div>
        </div>

        <div className="absolute bottom-20 right-10 animate-[float_3s_ease-in-out_infinite_0.5s] hidden md:block">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Icon name="Compass" size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
