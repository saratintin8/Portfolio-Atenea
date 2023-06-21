import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Container from "./Components/Container";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <AboutMe />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;
