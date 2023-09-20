
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Event from './components/Events';
import Gallery from './components/Gallery';
import Menu from './Menu';
import Footer from './Footer';

function App() {
  return (
    <>
      <Menu/>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Gallery' element={<Gallery />} />
      <Route path='/event' element={<Event />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
