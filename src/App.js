import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NavigationBar from '/components/Navigation';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/portfolio" element={<Portfolio />}/>
        <Route exact path="/contact-us" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
