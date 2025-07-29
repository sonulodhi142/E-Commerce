import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Mens from './components/Mans';
import NavBar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
