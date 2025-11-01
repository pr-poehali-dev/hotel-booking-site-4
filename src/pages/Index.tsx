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
      name: 'Эконом',
      price: 3000,
      image: 'https://cdn.poehali.dev/projects/236b2027-2a09-4b02-8e11-9ac4bef37fa2/files/22c43054-63f8-4471-89f3-d994f38437a1.jpg',
      features: ['1 человек', 'Односпальная кровать', 'Бесплатный Wi-Fi', 'TV'],
    },
    {
      id: 2,
      name: 'Эконом двухместный',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/236b2027-2a09-4b02-8e11-9ac4bef37fa2/files/16a69ffe-e152-46a9-82ca-7d0dd81aded3.jpg',
      features: ['2 человека', '2 односпальные кровати', 'Бесплатный Wi-Fi', 'TV'],
    },
    {
      id: 3,
      name: 'Стандартный номер',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/236b2027-2a09-4b02-8e11-9ac4bef37fa2/files/b1d3768a-be1b-4a0f-9c5f-6729eea935ea.jpg',
      features: ['2 человека', 'Двуспальная кровать', 'Ванная комната', 'Wi-Fi'],
    },
    {
      id: 4,
      name: 'Стандарт улучшенный',
      price: 4500,
      image: 'https://cdn.poehali.dev/projects/236b2027-2a09-4b02-8e11-9ac4bef37fa2/files/023026a9-84ea-4cb5-9a60-c97f51f93d7d.jpg',
      features: ['2 человека', 'Двуспальная кровать', 'Балкон', 'Мини-бар', 'Wi-Fi'],
    },
    {
      id: 5,
      name: 'Комфорт',
      price: 4500,
      image: 'https://cdn.poehali.dev/projects/236b2027-2a09-4b02-8e11-9ac4bef37fa2/files/90f0b263-60fe-4e01-bc93-d24c11639733.jpg',
      features: ['2 человека', 'Двухспальная кровать', 'Бесплатный Wi-Fi', 'TV', 'Халаты', 'Тапочки', 'Фен', 'Кондиционер', 'Чайный набор'],
    },
    {
      id: 6,
      name: 'Семейный номер',
      price: 5500,
      image: 'https://cdn.poehali.dev/projects/236b2027-2a09-4b02-8e11-9ac4bef37fa2/files/831ee599-5d73-4f71-bffb-ec17c880eb2b.jpg',
      features: ['4 человека', '2 двуспальные кровати', 'Гостиная зона', 'Wi-Fi'],
    },
  ];

  const services = [
    { icon: 'Wifi', title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет во всех номерах' },
    { icon: 'UtensilsCrossed', title: 'Ресторан', description: 'Европейская и местная кухня' },
    { icon: 'Car', title: 'Парковка', description: 'Бесплатная охраняемая парковка' },
    { icon: 'Waves', title: 'SPA-центр', description: 'Бассейн, сауна, массаж' },
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
            {rooms.map((room, index) => (
              <div key={index} className="relative h-80 overflow-hidden rounded-lg group animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={room.image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">{room.name}</p>
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
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@albasar.ru</p>
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