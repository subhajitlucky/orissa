import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Geography from './pages/Geography';
import Economy from './pages/Economy';
import Culture from './pages/Culture';
import Tourism from './pages/Tourism';
import Cuisine from './pages/Cuisine';
import People from './pages/People';
import News from './pages/News';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/people" element={<People />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;