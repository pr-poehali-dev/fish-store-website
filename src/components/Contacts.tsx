import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const contactInfo = [
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
    link: 'tel:+74951234567',
  },
  {
    icon: 'Mail',
    title: 'Email',
    value: 'info@fishpremium.ru',
    link: 'mailto:info@fishpremium.ru',
  },
  {
    icon: 'MapPin',
    title: 'Адрес',
    value: 'Москва, Рыбный рынок, павильон 15',
    link: '#',
  },
  {
    icon: 'Clock',
    title: 'Режим работы',
    value: 'Пн-Вс: 9:00 - 21:00',
    link: '#',
  },
];

const messengers = [
  {
    name: 'WhatsApp',
    icon: 'MessageCircle',
    link: 'https://wa.me/74951234567',
    color: 'hover:bg-green-500 hover:text-white',
  },
  {
    name: 'Telegram',
    icon: 'Send',
    link: 'https://t.me/fishpremium',
    color: 'hover:bg-blue-500 hover:text-white',
  },
];

const Contacts = () => {
  return (
    <div className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-shadow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={info.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                        <a 
                          href={info.link}
                          className="font-medium text-primary hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-4">
                  Напишите нам в мессенджерах
                </h3>
                <p className="text-white/90 mb-6">
                  Ответим на ваши вопросы в течение 5 минут
                </p>
                <div className="flex gap-3">
                  {messengers.map((messenger, index) => (
                    <Button
                      key={index}
                      size="lg"
                      className={`flex-1 bg-white/10 hover:bg-white/20 border border-white/20 ${messenger.color} transition-all`}
                      onClick={() => window.open(messenger.link, '_blank')}
                    >
                      <Icon name={messenger.icon as any} size={20} className="mr-2" />
                      {messenger.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                Форма обратной связи
              </h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Телефон" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Email" 
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение"
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/20">
          <CardContent className="p-8 text-center">
            <Icon name="Headphones" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">
              Консультация специалиста
            </h3>
            <p className="text-muted-foreground mb-6">
              Наши эксперты помогут подобрать продукцию под ваши нужды и ответят на все вопросы
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
