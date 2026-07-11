import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="bg-luxury-gradient min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
