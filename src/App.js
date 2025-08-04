import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js';
import Anima from './pages/Anima.js';
import Framer from './pages/Framer.js';
import FramerCELEK from './pages/FramerCELEK.js';

function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Anima' Component={Anima} />
          <Route path='/Framer' Component={Framer} />
          <Route path='/FramerCELEK' Component={FramerCELEK} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
