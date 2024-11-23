//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './componentes/header/Header';
import Home from './componentes/home/Home';
import Novidades from './componentes/novidades/Novidades';
import Sobre from './componentes/sobre/Sobre';

function App() {
  return (
    <>
    <div className='App'>
    <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/novidades" element={<Novidades/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        
        
      </Routes>
    </BrowserRouter>
    </div>
</>


  );
}

export default App;