import './App.css';
import Welcome from './pages/js/Welcome';
import { Route, Routes } from 'react-router-dom';
import OfficeWork from './pages/js/OfficeWork';
import NavBar from './components/js/NavBar';
import Problems from './pages/js/Problems';
import Notes from './pages/js/Notes';
import Learning from './pages/js/Learning';
import NewOfficeForm from './pages/js/NewOfficeForm';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/office' element={<OfficeWork />}/>
      <Route path='/problems' element={<Problems />}/>
      <Route path='/notes' element={<Notes />}/>
      <Route path='/learning' element={<Learning />}/>
      <Route path='/new-office-form' element={<NewOfficeForm />}/>
    </Routes>
    </div>
    
  );
}

export default App;
