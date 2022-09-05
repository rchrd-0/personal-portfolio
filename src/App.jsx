import './styles/main.scss';
import './styles/reset.scss';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Profile from './components/Profile';
// import AboutSection from './components/ProfileSection';
// import SkillsSection from './components/SkillsSection';

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <main>
        <Nav />
        <Profile />
      </main>
    </div>
  );
};

export default App;
