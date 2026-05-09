import Hero from '../components/sections/Hero';
import STEMFocus from '../components/sections/STEMFocus';
import TechInFocus from '../components/sections/TechInFocus';
import Offerings from '../components/sections/Offerings';
import Methodology from '../components/sections/Methodology';
import Platform from '../components/sections/Platform';

export default function Home() {
  return (
    <>
      <Hero />
      <STEMFocus />
      <TechInFocus />
      <Offerings />
      <Methodology />
      <Platform />
    </>
  );
}
