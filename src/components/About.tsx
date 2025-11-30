import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Fish',
    title: 'Свежесть гарантирована',
    description: 'Прямые поставки с судов и рыбных хозяйств. Доставка в течение 24 часов после вылова.',
  },
  {
    icon: 'Award',
    title: 'Премиум качество',
    description: 'Все наши продукты проходят строгий контроль качества и сертификацию.',
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Специализированный транспорт с холодильными установками. Доставка по всей России.',
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Соблюдение всех норм хранения и транспортировки. Полная прозрачность происхождения.',
  },
];

const About = () => {
  return (
    <div className="py-20 px-4 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              О компании
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Качество, проверенное временем
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              С 2005 года мы занимаемся поставками элитных морепродуктов для ресторанов премиум-класса, 
              отелей и частных клиентов по всей России.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Наша команда профессионалов тщательно отбирает только лучшую продукцию от проверенных 
              поставщиков из Норвегии, Японии, Средиземноморья и Дальнего Востока.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-1">20+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="border-l border-border"></div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="border-l border-border"></div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">стран-поставщиков</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
