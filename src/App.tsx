import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home'
import Gallery from './pages/Gallery';
import Equipment from './pages/Equipment';
import Recommendations from './pages/Recommendations';

function App() {

  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery /> } />
          <Route path="/Equipment" element={ <Equipment />} />
          <Route path="/Recommendations" element={ <Recommendations />} />
        </Routes>
      </div>
    </>
  )
}

export default App
