import './styles/main.scss';
import './styles/reset.scss';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <main>
        <Nav />
        <Profile />
        <Contact />
      </main>
    </div>
  );
};

export default App;
