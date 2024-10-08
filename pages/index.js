import About from "../src/components/About.jsx";
import Contact from "../src/components/Contact.jsx";
import Experience from "../src/components/Experience.jsx";
import Hero from "../src/components/Hero.jsx";
import Leadership from "../src/components/Leadership.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Tech from "../src/components/Tech.jsx";
import Projects from "../src/components/Projects.jsx";
import dynamic from 'next/dynamic';

const LazyStarsCanvas = dynamic(() => import('../src/components/canvas/Stars'), { ssr: false });

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="hero" className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
        <div
          className="relative z-0"
          style={{
            background: "linear-gradient(to right, #566263, #677163, #9a9a7f, #aa8667, #c57b56, #c77663)",
          }}
        >
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="tech">
          <Tech />
        </div>
        <div id="leadership">
          <Leadership />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact" className='relative z-0'>
          <Contact />
          <LazyStarsCanvas />
        </div>
      </div>
    </>
  );
};

export default Home;
