import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const bg = useColorModeValue("#f8f7f4", "#0a0a0a");

  return (
    <Box bg={bg} minH="100vh" transition="background 0.3s ease">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
