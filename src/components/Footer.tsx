import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'О компании', section: 'about' },
      { label: 'Каталог', section: 'catalog' },
      { label: 'Прайс', section: 'price' },
    ],
    services: [
      { label: 'Доставка', section: 'delivery' },
      { label: 'Контакты', section: 'contacts' },
    ],
  };

  return (
    <footer className="bg-primary text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🐟</div>
              <div>
                <h3 className="text-xl font-serif font-bold">Рыбный Премиум</h3>
                <p className="text-sm text-white/70">Элитные морепродукты</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Ваш надёжный поставщик качественных морепродуктов с 2005 года
            </p>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-white/10 text-white"
                onClick={() => window.open('https://wa.me/74951234567', '_blank')}
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-white/10 text-white"
                onClick={() => window.open('https://t.me/fishpremium', '_blank')}
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+74951234567" className="hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@fishpremium.ru" className="hover:text-accent transition-colors">
                  info@fishpremium.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5" />
                <span>Москва, Рыбный рынок, павильон 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} Рыбный Премиум. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
