import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import Navbar from './components/Shared/Navbar';


// const auth = getAuth(app);

function App() {

  return (
    <div className='app'>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/'></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
