import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';
import FloatingActions from './components/global/FloatingActions';
import ScrollProgress from './components/global/ScrollProgress';
import ScrollToTop from './components/global/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import TurnaroundTime from './pages/TurnaroundTime';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="relative overflow-x-hidden">
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/turnaround" element={<TurnaroundTime />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;