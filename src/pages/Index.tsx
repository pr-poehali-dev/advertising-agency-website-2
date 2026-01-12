import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { QRCodeSVG } from 'qrcode.react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      icon: 'Megaphone',
      title: 'Реклама',
      description: 'Комплексные рекламные кампании в digital и традиционных медиа'
    },
    {
      icon: 'Palette',
      title: 'Брендинг',
      description: 'Создание и развитие уникальных брендов с нуля'
    },
    {
      icon: 'BarChart3',
      title: 'Маркетинговые исследования',
      description: 'Глубокий анализ рынка и целевой аудитории'
    },
    {
      icon: 'Globe',
      title: 'Digital-маркетинг',
      description: 'SMM, контекстная реклама, SEO-продвижение'
    },
    {
      icon: 'FileText',
      title: 'Контент-маркетинг',
      description: 'Создание продающего контента для всех каналов'
    },
    {
      icon: 'TrendingUp',
      title: 'Стратегическое планирование',
      description: 'Разработка маркетинговых стратегий и позиционирования'
    }
  ];

  const portfolio = [
    {
      title: 'Ребрендинг производителя мебели',
      category: 'Брендинг',
      result: '+180% узнаваемость бренда',
      company: 'FashionHouse',
      image: 'https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/b80f1723-eab4-47ea-ab93-608023ba3273.jpg'
    },
    {
      title: 'Digital-кампания для fashion-бренда',
      category: 'Digital-маркетинг',
      result: '+250% трафик на сайт',
      company: 'TechCorp',
      image: 'https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/51b03b39-4c5f-4daa-9af7-29f2c93aaa42.jpg'
    },
    {
      title: 'Запуск нового продукта IT-компании',
      category: 'Комплексная кампания',
      result: '5000+ лидов за месяц',
      company: 'StartupLab',
      image: 'https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/7f123bd1-e34b-4f65-a10e-20511a523eac.jpg'
    }
  ];

  const team = [
    {
      name: 'Анна Соколова',
      position: 'Креативный директор',
      bio: '12 лет опыта в рекламе. Лауреат Red Apple и Epica Awards.',
      image: 'https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/a56889ab-99be-4a54-9f97-b463e773ebeb.jpg'
    },
    {
      name: 'Дмитрий Волков',
      position: 'Стратег',
      bio: 'Эксперт в маркетинговых исследованиях. Работал с 50+ брендами.',
      image: 'https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/5706194e-e89c-4e62-8fc1-8e24380c4637.jpg'
    },
    {
      name: 'Елена Морозова',
      position: 'Digital-директор',
      bio: 'Специалист по performance-маркетингу. ROI — главный приоритет.',
      image: 'https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/80023ab2-dc8b-4fa1-98c2-d68d309be38e.jpg'
    },
    {
      name: 'Максим Кузнецов',
      position: 'Арт-директор',
      bio: 'Создаю визуальные решения, которые продают и вдохновляют.',
      image: 'https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/f1b6189b-1a46-4253-9517-3041d69eced3.jpg'
    }
  ];

  const testimonials = [
    {
      text: 'Профессиональный подход и выдающиеся результаты. Наши продажи выросли в 3 раза после запуска кампании.',
      author: 'Сергей Петров',
      company: 'CEO, TechCorp'
    },
    {
      text: 'Команда полностью поняла наш бренд и создала кампанию, которая превзошла все ожидания.',
      author: 'Мария Иванова',
      company: 'Маркетинг-директор, FashionHouse'
    },
    {
      text: 'Креативность, профессионализм и результат. Рекомендую как надежного партнера.',
      author: 'Алексей Смирнов',
      company: 'Основатель, StartupLab'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-gray-900">Veloffon</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'team', label: 'Команда' },
                { id: 'testimonials', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Создаём<br />
                <span className="text-primary">рекламу</span><br />
                которая работает
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Превращаем ваши идеи в успешные маркетинговые кампании с измеримыми результатами
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 h-14"
                onClick={() => scrollToSection('contact')}
              >
                Начать проект
              </Button>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/dcb8f822-4587-4801-888b-a8b934f28a38/files/c389ce5d-c824-4dfb-b906-c05f5ea2d47d.jpg"
                alt="Veloffon Agency"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Услуги</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Полный спектр маркетинговых решений для вашего бизнеса
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-shadow duration-300 border-0"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Портфолио</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Кейсы, которыми мы гордимся
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-2">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">{project.result}</p>
                  <p className="text-sm text-gray-500">{project.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Команда</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Профессионалы, создающие результат
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center border-0 hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{member.position}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Отзывы</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Что говорят наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg">
                <Icon name="Quote" className="text-primary mb-6" size={32} />
                <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы обсудим ваш проект
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@agency.com" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
                hello@agency.com
              </a>
              <a href="tel:+79991234567" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <QRCodeSVG 
                value="https://veloffon.ru" 
                size={120}
                level="H"
                includeMargin={false}
              />
            </div>
          </div>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 h-14 border-white text-white hover:bg-white hover:text-gray-900"
          >
            Отправить заявку
          </Button>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Veloffon. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;