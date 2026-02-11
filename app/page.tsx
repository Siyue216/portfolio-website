import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import TodoList from '@/components/TodoList';
import Feedback from '@/components/Feedback';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <TodoList />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}
