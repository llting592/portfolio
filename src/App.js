import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About'


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </>
    </Router>

  );
}

export default App;
