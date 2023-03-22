import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './projects/Calculator';
import NotFound from './pages/NotFound';
import './App.css';

function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
