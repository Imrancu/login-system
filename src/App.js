import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';

function App() {

  return (
    <div className='app'>
      <div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
