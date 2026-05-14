import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
