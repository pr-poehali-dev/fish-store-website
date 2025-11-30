import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const priceCategories = [
  {
    title: 'Свежая рыба',
    description: 'Актуальные цены на свежую рыбу',
    icon: 'Fish',
  },
  {
    title: 'Морепродукты',
    description: 'Креветки, крабы, устрицы и др.',
    icon: 'Waves',
  },
  {
    title: 'Икра и деликатесы',
    description: 'Премиум продукция',
    icon: 'Star',
  },
];

const Price = () => {
  return (
    <div className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Прайс-лист
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Актуальные цены на всю нашу продукцию. Цены обновляются ежедневно.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {priceCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={category.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
                <Button variant="outline" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary to-primary/90 text-white animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                  Полный каталог с ценами
                </h3>
                <p className="text-white/90 text-lg">
                  Скачайте наш полный прайс-лист в формате PDF со всеми категориями продукции, 
                  ценами и условиями доставки.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 whitespace-nowrap"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать полный прайс
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Цены указаны в рублях за килограмм. Оптовым клиентам предоставляются специальные условия.</p>
          <p className="mt-2">Для уточнения наличия и актуальных цен свяжитесь с нашим менеджером.</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
