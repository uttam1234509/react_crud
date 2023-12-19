import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage';
import { Login } from './Login';
import { Signup } from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
