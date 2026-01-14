import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CodingProfiles from "./components/CodingProfiles";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <CodingProfiles />
      <Contact />
      <Footer />
      
      
    </div>
  );
}
