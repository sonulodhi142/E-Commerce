import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Mens from './components/Mans';
import NavBar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Catagory from './components/Catagory';
import CartItem from './components/CartItem';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <CartItem/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/men' element={<Catagory dataType='men' />} />
      <Route path='/women' element={<Catagory dataType='women' />} />
      <Route path='/kid' element={<Catagory dataType='kid' />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
