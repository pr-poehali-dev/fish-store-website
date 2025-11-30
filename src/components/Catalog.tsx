import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'all', name: 'Все категории' },
  { id: 'fish', name: 'Свежая рыба' },
  { id: 'seafood', name: 'Морепродукты' },
  { id: 'caviar', name: 'Икра' },
  { id: 'delicacies', name: 'Деликатесы' },
];

const products = [
  {
    id: 1,
    name: 'Лосось норвежский',
    category: 'fish',
    price: '2 890',
    unit: 'кг',
    image: 'https://cdn.poehali.dev/projects/3230c9dd-f2dd-4395-bcd4-0f680a8c10c3/files/bbc04fb2-1661-4605-92e3-f0c05cdba4de.jpg',
    premium: true,
  },
  {
    id: 2,
    name: 'Тунец стейк',
    category: 'fish',
    price: '3 490',
    unit: 'кг',
    image: 'https://cdn.poehali.dev/projects/3230c9dd-f2dd-4395-bcd4-0f680a8c10c3/files/f72ca3ed-c34b-4d12-9888-1a7a58b8a6e7.jpg',
    premium: true,
  },
  {
    id: 3,
    name: 'Икра чёрная',
    category: 'caviar',
    price: '12 500',
    unit: '100г',
    image: 'https://cdn.poehali.dev/projects/3230c9dd-f2dd-4395-bcd4-0f680a8c10c3/files/cf8c5540-93cb-4bb0-99ff-b05aa1d10a82.jpg',
    premium: true,
  },
  {
    id: 4,
    name: 'Дорадо',
    category: 'fish',
    price: '1 890',
    unit: 'кг',
    image: 'https://cdn.poehali.dev/projects/3230c9dd-f2dd-4395-bcd4-0f680a8c10c3/files/bbc04fb2-1661-4605-92e3-f0c05cdba4de.jpg',
    premium: false,
  },
  {
    id: 5,
    name: 'Королевские креветки',
    category: 'seafood',
    price: '2 490',
    unit: 'кг',
    image: 'https://cdn.poehali.dev/projects/3230c9dd-f2dd-4395-bcd4-0f680a8c10c3/files/f72ca3ed-c34b-4d12-9888-1a7a58b8a6e7.jpg',
    premium: true,
  },
  {
    id: 6,
    name: 'Осьминог',
    category: 'seafood',
    price: '1 990',
    unit: 'кг',
    image: 'https://cdn.poehali.dev/projects/3230c9dd-f2dd-4395-bcd4-0f680a8c10c3/files/bbc04fb2-1661-4605-92e3-f0c05cdba4de.jpg',
    premium: false,
  },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Наш каталог
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Тщательно отобранные морепродукты премиального качества
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className="font-medium"
            >
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {product.premium && (
                  <Badge className="absolute top-4 right-4 bg-accent text-primary">
                    <Icon name="Award" size={14} className="mr-1" />
                    Premium
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <span className="text-muted-foreground ml-1">/ {product.unit}</span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-semibold">
            Показать больше товаров
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
