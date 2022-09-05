import './styles/main.scss';
import './styles/reset.scss';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="app">
      <HeroSection />
      <main>
        <Nav />
        <Profile />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
