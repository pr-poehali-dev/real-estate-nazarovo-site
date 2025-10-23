import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Key',
      title: 'Продажа недвижимости',
      description: 'Поможем продать вашу недвижимость по выгодной цене'
    },
    {
      icon: 'Home',
      title: 'Покупка недвижимости',
      description: 'Подберем идеальный вариант под ваши требования'
    },
    {
      icon: 'Building2',
      title: 'Аренда',
      description: 'Долгосрочная и краткосрочная аренда жилья и коммерции'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Юридическое сопровождение',
      description: 'Полное юридическое сопровождение сделок'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={28} className="text-primary" />
              <span className="text-xl font-bold text-primary">Новый Адрес</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </nav>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                  Найдем ваш новый адрес в Назарово
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Профессиональное агентство недвижимости с индивидуальным подходом к каждому клиенту
                </p>
                <div className="flex gap-4">
                  <Button size="lg" onClick={() => scrollToSection('services')}>
                    Наши услуги
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                    Консультация
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                  alt="Недвижимость"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary mb-4">Наши услуги</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Полный спектр услуг на рынке недвижимости Назарово
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                  alt="О компании"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Агентство недвижимости "Новый Адрес" работает на рынке Назарово более 10 лет. 
                  Мы помогли сотням семей найти дом их мечты.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Наша команда профессионалов предоставляет полный спектр услуг: от подбора объекта 
                  до юридического сопровождения сделки.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">сделок</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-primary mb-4">Контакты</h2>
            <p className="text-center text-muted-foreground mb-12">
              Свяжитесь с нами удобным для вас способом
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-6">Контактная информация</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">Телефон</div>
                        <a href="tel:+73912345678" className="text-muted-foreground hover:text-primary">
                          +7 (391) 234-56-78
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:info@novyadres.ru" className="text-muted-foreground hover:text-primary">
                          info@novyadres.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">Адрес</div>
                        <div className="text-muted-foreground">
                          г. Назарово, ул. Ленина, 25
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium">Режим работы</div>
                        <div className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб: 10:00 - 15:00
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-6">Оставьте заявку</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="MapPin" size={24} />
            <span className="text-xl font-bold">Новый Адрес</span>
          </div>
          <p className="text-primary-foreground/80">
            © 2024 Агентство недвижимости "Новый Адрес". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;