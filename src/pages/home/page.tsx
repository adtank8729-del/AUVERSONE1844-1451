import Popup from './components/Popup';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Brand from './components/Brand';
import Environment from './components/Environment';
import Premium from './components/Premium';
import Complex from './components/Complex';
import Community from './components/Community';
import Unit from './components/Unit';
import Register from './components/Register';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Popup />
      <Header />
      <main>
        <div id="top">
          <Hero />
        </div>
        <Overview />
        <Brand />
        <Environment />
        <Premium />
        <Complex />
        <Community />
        <Unit />
        <Register />
        <Location />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}