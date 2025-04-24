import HeroSection from '@/components/home/HeroSection';
import PropuestaValor from '@/components/home/PropuestaValor';
import HabitacionesSlider from '@/components/home/HabitacionesSlider';
import Experiencias from '@/components/home/ExperienciasHome';
import Testimonios from '@/components/home/Testimonios';
import Ubicacion from '@/components/home/Ubicacion';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropuestaValor />
      <HabitacionesSlider />
      <Experiencias />
      <Testimonios />
      <Ubicacion />
    </>
  );
}