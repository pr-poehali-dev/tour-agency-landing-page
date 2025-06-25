import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Туры", href: "#tours" },
    { label: "Отзывы", href: "#reviews" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

  const socialItems = [
    { icon: "Instagram", href: "#", label: "Instagram" },
    { icon: "Facebook", href: "#", label: "Facebook" },
    { icon: "MessageCircle", href: "#", label: "VK" },
  ];

  return (
    <header className="bg-gradient-to-r from-sky-500 to-orange-400 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-2">
              <Icon name="Plane" size={24} className="text-sky-500" />
            </div>
            <span className="text-white font-bold text-xl font-montserrat">
              ПутешествуйМир
            </span>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-orange-200 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Социальные сети и мобильное меню */}
          <div className="flex items-center space-x-4">
            {/* Социальные сети для десктопа */}
            <div className="hidden md:flex items-center space-x-3">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white hover:text-orange-200 transition-colors"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>

            {/* Мобильное меню */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 mb-4 p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-800 hover:text-sky-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <span className="text-gray-600 text-sm">Мы в соцсетях:</span>
                {socialItems.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-600 hover:text-sky-600 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
