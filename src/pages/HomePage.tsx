import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../sections/Home";
import About from "../sections/About";
import Career from "../sections/Career";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Career />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
