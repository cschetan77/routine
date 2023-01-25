import './App.css';
import Welcome from './pages/js/Welcome';
import { Route, Routes } from 'react-router-dom';
import OfficeWork from './pages/js/OfficeWork';
import Home from './pages/js/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Welcome />}/>
      <Route path='/office' element={<OfficeWork />}/>
    </Routes>
    </div>
    
  );
}

export default App;
