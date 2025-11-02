import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { toast } from 'sonner';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [activeSection, setActiveSection] = useState('home');

  const rooms = [
    {
      id: 1,
      name: 'Эконом с одной односпальной кроватью',
      price: 3000,
      image: 'https://cdn.poehali.dev/files/52eb5a3e-547d-4c3d-8dee-24e6f41b68dc.jpg',
      features: ['1 человек', 'Односпальная кровать', 'Бесплатный Wi-Fi', 'TV', 'Фен'],
    },
    {
      id: 2,
      name: 'Эконом с раздельными кроватями',
      price: 3500,
      image: 'https://cdn.poehali.dev/files/653b2425-1696-44c5-91ba-57a61aca6b1c.jpg',
      features: ['2 человека', '2 односпальные кровати', 'Бесплатный Wi-Fi', 'TV', 'Фен'],
    },
    {
      id: 3,
      name: 'Стандартный номер с 2х спальной кроватью',
      price: 3500,
      image: 'https://cdn.poehali.dev/files/8d109ca1-a9ae-4894-b40b-27301cd13b6b.jpg',
      features: ['2 человека', 'Двуспальная кровать', 'Ванная комната', 'Wi-Fi', 'Фен'],
    },
    {
      id: 4,
      name: 'Стандартный номер с раздельными кроватями',
      price: 3500,
      image: 'https://cdn.poehali.dev/files/f73a4363-41ae-4116-a5a3-606f96fd7d40.jpg',
      features: ['2 человека', '2 односпальные кровати', 'Ванная комната', 'Wi-Fi', 'Фен'],
    },
    {
      id: 5,
      name: 'Стандарт улучшенный с раздельными кроватями',
      price: 4500,
      image: 'https://cdn.poehali.dev/files/6ce3c9e4-c596-4271-954a-2956dd48aefc.jpg',
      features: ['2 человека', '2 односпальные кровати', 'Wi-Fi', 'Чайный набор', 'Бутылка воды', 'Тапочки', 'Халат', 'Фен'],
    },
    {
      id: 6,
      name: 'Комфорт',
      price: 4500,
      image: 'https://cdn.poehali.dev/files/150a0ea7-4396-46ed-a0e1-aa32928c2981.jpg',
      features: ['2 человека', 'Двухспальная кровать', 'Бесплатный Wi-Fi', 'TV', 'Халаты', 'Тапочки', 'Фен', 'Кондиционер', 'Чайный набор', 'Бутылка воды'],
      gallery: [
        'https://cdn.poehali.dev/files/150a0ea7-4396-46ed-a0e1-aa32928c2981.jpg',
        'https://cdn.poehali.dev/files/62600d35-1687-46dc-b141-35c01209c2f4.jpg',
        'https://cdn.poehali.dev/files/0471522b-054e-4ac8-b82e-b45f2f19575a.jpg',
        'https://cdn.poehali.dev/files/16de4666-6a7e-4b07-ab4d-0ce902511308.jpg',
        'https://cdn.poehali.dev/files/5c6bec9c-7c81-41a2-9440-5ab94a306c9e.jpg'
      ],
    },
    {
      id: 7,
      name: 'Семейный номер 4х местный',
      price: 5500,
      image: 'https://cdn.poehali.dev/files/e0332dff-142d-4b3a-b6b8-adcc7226b2cf.jpg',
      features: ['4 человека', '1 двуспальная кровать', '1 односпальная кровать', 'Диван', 'Гостиная зона', 'Wi-Fi', 'Чайный набор', 'Бутылка воды', 'Фен'],
      gallery: [
        'https://cdn.poehali.dev/files/e0332dff-142d-4b3a-b6b8-adcc7226b2cf.jpg',
        'https://cdn.poehali.dev/files/286dac7c-265b-4d7c-a570-7ca9a92564d7.jpg',
        'https://cdn.poehali.dev/files/877229dc-6e6e-47b8-b42c-f2ec1336915b.jpg',
        'https://cdn.poehali.dev/files/874f983e-0f7a-4be7-bcea-1c68eb99ce18.jpg',
        'https://cdn.poehali.dev/files/f46f7c87-9133-4774-ad6f-27bd4766ecb6.jpg'
      ],
    },
    {
      id: 8,
      name: 'Семейный 5-ти местный',
      price: 6000,
      image: 'https://cdn.poehali.dev/files/77c330ff-b893-4d3d-94b8-125f5db6e539.jpg',
      features: ['5 человек', '1 двуспальная кровать', '3 односпальные кровати', 'Гостиная зона', 'Wi-Fi', 'TV', 'Фен'],
      gallery: [
        'https://cdn.poehali.dev/files/77c330ff-b893-4d3d-94b8-125f5db6e539.jpg',
        'https://cdn.poehali.dev/files/189b7f10-4c8f-460d-aa50-b170c831664e.jpg',
        'https://cdn.poehali.dev/files/b7de35a0-46cc-4f13-8215-e00c0be2f615.jpg',
        'https://cdn.poehali.dev/files/49570488-fd4c-4288-a7ed-3d7cc58b0400.jpg'
      ],
    },
  ];

  const services = [
    { icon: 'Wifi', title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет во всех номерах' },
    { icon: 'UtensilsCrossed', title: 'Ресторан', description: 'Европейская и местная кухня' },
    { icon: 'Car', title: 'Парковка', description: 'Бесплатная охраняемая парковка' },
    { icon: 'Dumbbell', title: 'Тренажёрный зал', description: 'Современное оборудование для фитнеса' },
    { icon: 'Coffee', title: 'Завтрак', description: 'Континентальный завтрак включен' },
    { icon: 'Clock', title: '24/7 Reception', description: 'Круглосуточная стойка регистрации' },
  ];

  const reviews = [
    { name: 'Анна М.', rating: 5, text: 'Прекрасный отель! Очень уютно, как дома. Персонал внимательный и дружелюбный.', date: '15.10.2024' },
    { name: 'Дмитрий К.', rating: 5, text: 'Отличное расположение, чистые номера, вкусные завтраки. Обязательно вернемся!', date: '08.10.2024' },
    { name: 'Елена С.', rating: 5, text: 'Идеально для семейного отдыха. Дети в восторге от бассейна!', date: '02.10.2024' },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/0701b439-8e24-4d0c-b8ca-0bbaf3b6b00c.jpg" 
                alt="Алькасар" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">Алькасар</h1>
                <p className="text-xs text-muted-foreground">Отель-кафе</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'rooms', label: 'Номера' },
                { id: 'booking', label: 'Бронирование' },
                { id: 'services', label: 'Услуги' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('booking')}>Забронировать</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/files/e65a4c9c-3f5e-4155-b9a4-149aa2576d9e.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Добро пожаловать в отель - кафе "Алькасар"</h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">Уют и комфорт как дома</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('rooms')} className="bg-primary hover:bg-primary/90">
              Выбрать номер
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              Контакты
            </Button>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Наши номера</h2>
            <p className="text-muted-foreground text-lg">Выберите идеальный номер для вашего отдыха</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{room.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">{room.price} ₽ / ночь</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => scrollToSection('booking')}>
                    Забронировать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Бронирование</h2>
            <p className="text-muted-foreground text-lg">Забронируйте номер прямо сейчас</p>
          </div>
          <Card className="shadow-xl animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn">Дата заезда</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="CalendarIcon" className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, 'PPP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkOut">Дата выезда</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="CalendarIcon" className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, 'PPP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="roomType">Тип номера</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип номера" />
                    </SelectTrigger>
                    <SelectContent>
                      {rooms.map((room) => (
                        <SelectItem key={room.id} value={room.id.toString()}>
                          {room.name} - {room.price} ₽
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Всё для вашего комфорта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Галерея</h2>
            <p className="text-muted-foreground text-lg">Посмотрите, как уютно у нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { image: 'https://cdn.poehali.dev/files/54788ed6-2717-466d-a2f5-95acfcf69db1.jpg', title: 'Тренажёрный зал' },
              { image: 'https://cdn.poehali.dev/files/48f4de9f-f6dc-48f8-b8c8-f90779b61388.jpg', title: 'Тренажёрный зал' },
              { image: 'https://cdn.poehali.dev/files/9c3ef056-5d66-4e09-a5cc-7fea5878c8f9.jpg', title: 'Зона отдыха' },
              { image: 'https://cdn.poehali.dev/files/2797acf1-5b07-4312-bd4d-5d29e827dd2e.jpg', title: 'Зона отдыха' },
              { image: 'https://cdn.poehali.dev/files/67791adc-4c01-42ff-b823-4686adf27aa4.jpg', title: 'Зона релакса' },
              { image: 'https://cdn.poehali.dev/files/a9ccc741-c1a4-4b5d-b060-de4cbf991958.jpg', title: 'Ресепшн' },
              { image: 'https://cdn.poehali.dev/files/c46e3b83-06e7-43de-abf0-f931448a5f19.jpg', title: 'Холл' },
              ...rooms.map(room => ({ image: room.image, title: room.name }))
            ].map((item, index) => (
              <div key={index} className="relative h-80 overflow-hidden rounded-lg group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={item.image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Отзывы гостей</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши гости</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Контакты</h2>
            <p className="text-muted-foreground text-lg">Свяжитесь с нами</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Адрес и контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Егорьевск, Сиреневый переулок, д. 7</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (916) 119-80-19</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">alkasar@internet.ru</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Круглосуточно, 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle>О нас</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Отель "Алькасар" - это уютное место, где каждый гость чувствует себя как дома. 
                  Мы предлагаем комфортабельные номера, качественный сервис и внимательное отношение к каждому гостю.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Наша миссия - создать атмосферу домашнего уюта и тепла, где вы сможете отдохнуть 
                  от городской суеты и насладиться комфортом и гостеприимством.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Facebook" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="MessageCircle" className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/0701b439-8e24-4d0c-b8ca-0bbaf3b6b00c.jpg" 
              alt="Альбасар" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-primary">Алькасар</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Отель-кафе Алькасар. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;