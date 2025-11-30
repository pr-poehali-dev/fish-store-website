import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const deliveryOptions = [
  {
    icon: 'Truck',
    title: 'Курьерская доставка',
    description: 'По Москве и МО в течение 24 часов',
    price: 'от 500 ₽',
  },
  {
    icon: 'Package',
    title: 'Самовывоз',
    description: 'Из нашего склада на Рыбном рынке',
    price: 'Бесплатно',
  },
  {
    icon: 'Plane',
    title: 'Доставка по России',
    description: 'Экспресс-доставка авиа с холодильником',
    price: 'от 2000 ₽',
  },
];

const deliverySteps = [
  {
    step: '1',
    title: 'Оформление заказа',
    description: 'Выберите товары и оформите заказ по телефону или через мессенджеры',
  },
  {
    step: '2',
    title: 'Подтверждение',
    description: 'Менеджер свяжется с вами для уточнения деталей и времени доставки',
  },
  {
    step: '3',
    title: 'Упаковка',
    description: 'Продукция упаковывается в специальную термо-упаковку с хладагентами',
  },
  {
    step: '4',
    title: 'Доставка',
    description: 'Курьер доставит заказ в удобное для вас время с соблюдением холодовой цепи',
  },
];

const Delivery = () => {
  return (
    <div className="py-20 px-4 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Доставка
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы гарантируем сохранность свежести продукции на всех этапах доставки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {deliveryOptions.map((option, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent transition-all hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={option.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {option.description}
                </p>
                <div className="text-lg font-bold text-accent">
                  {option.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-primary text-center mb-8">
            Как происходит доставка
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-primary font-serif font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < deliverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-muted/50 border-2">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="AlertCircle" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-semibold text-primary mb-2">
                  Важная информация
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Минимальная сумма заказа для доставки - 3000 ₽</li>
                  <li>• Бесплатная доставка по Москве при заказе от 10 000 ₽</li>
                  <li>• Доставка осуществляется ежедневно с 9:00 до 21:00</li>
                  <li>• Возможна срочная доставка в течение 3-4 часов (уточняйте у менеджера)</li>
                  <li>• Вся продукция транспортируется в специальных термо-контейнерах</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Delivery;
