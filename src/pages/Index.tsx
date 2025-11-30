import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import Price from '@/components/Price';
import Delivery from '@/components/Delivery';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="catalog">
          <Catalog />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="price">
          <Price />
        </section>
        <section id="delivery">
          <Delivery />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default Index;
