import './styles/main.scss';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <main>
        <Nav />
        <ProfileSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default App;
