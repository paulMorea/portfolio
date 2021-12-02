import HomePage from './layout/HomePage';
import ContactPage from './layout/ContactPage';
import BioPage from './layout/BioPage';

import {Routes, Route} from 'react-router-dom'

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='portfolio/' element={<HomePage />} />
        <Route path='portfolio/contact' element={<ContactPage />} />
        <Route path='portfolio/bio' element={<BioPage />} />
      </Routes> 
    </div>
  );
}

export default App;
